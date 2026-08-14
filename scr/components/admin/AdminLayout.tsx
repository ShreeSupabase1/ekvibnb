import { useState, type ReactNode } from "react";
import { AdminSidebar } from "./AdminSidebar";
import { AdminTopbar } from "./AdminTopbar";

export function AdminLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-background">
      <AdminSidebar open={open} onClose={() => setOpen(false)} />
      <div className="flex min-h-dvh flex-col lg:pl-64">
        <AdminTopbar onOpenSidebar={() => setOpen(true)} />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}

export function AdminPageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h1>
      {description ? (
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

export function AdminPlaceholderCard({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-dashed border-border bg-card p-10 text-center">
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
