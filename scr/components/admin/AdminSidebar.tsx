import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { ADMIN_NAV } from "@/lib/admin/nav";
import { cn } from "@/lib/utils";
import { AdminLogoutButton } from "./AdminLogoutButton";

interface AdminSidebarProps {
  open: boolean;
  onClose: () => void;
}

export function AdminSidebar({ open, onClose }: AdminSidebarProps) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-30 bg-foreground/40 lg:hidden"
          aria-hidden="true"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-border bg-card transition-transform duration-200 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <div>
            <p className="text-sm font-semibold tracking-tight text-foreground">EKVI Admin</p>
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              Bare &amp; Beyond
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-muted-foreground hover:bg-muted lg:hidden"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3" aria-label="Admin navigation">
          <ul className="space-y-1">
            {ADMIN_NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground data-[status=active]:bg-muted data-[status=active]:text-foreground"
                  activeProps={{ className: "bg-muted text-foreground" }}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-border p-3">
          <AdminLogoutButton variant="sidebar" />
        </div>
      </aside>
    </>
  );
}
