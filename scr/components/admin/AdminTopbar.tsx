import { Menu, Moon, Sun, UserRound } from "lucide-react";
import { adminDisplayName, useAdminSession } from "@/hooks/useAdminSession";
import { useAdminTheme } from "@/hooks/useAdminTheme";
import { AdminLogoutButton } from "./AdminLogoutButton";

interface AdminTopbarProps {
  onOpenSidebar: () => void;
}

export function AdminTopbar({ onOpenSidebar }: AdminTopbarProps) {
  const { user } = useAdminSession();
  const { theme, toggle } = useAdminTheme();

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between gap-3 border-b border-border bg-card px-4 md:px-6">
      <button
        type="button"
        onClick={onOpenSidebar}
        className="rounded-md p-2 text-muted-foreground hover:bg-muted lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="ml-auto flex items-center gap-2">
        <button
          type="button"
          onClick={toggle}
          className="rounded-md p-2 text-muted-foreground hover:bg-muted"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>

        <div className="flex items-center gap-2.5 rounded-md px-2 py-1.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <UserRound className="h-4 w-4" />
          </span>
          <div className="hidden leading-tight sm:block">
            <p className="text-sm font-medium text-foreground">{adminDisplayName(user)}</p>
            <p className="text-xs text-muted-foreground">Administrator</p>
          </div>
        </div>

        <AdminLogoutButton variant="navbar" />
      </div>
    </header>
  );
}
