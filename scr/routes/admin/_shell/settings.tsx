import { createFileRoute } from "@tanstack/react-router";
import { adminDisplayName, useAdminSession } from "@/hooks/useAdminSession";
import { AdminPageHeader } from "@/components/admin/AdminLayout";

export const Route = createFileRoute("/admin/_shell/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  const { user } = useAdminSession();

  return (
    <>
      <AdminPageHeader title="Settings" description="Admin account and panel preferences." />
      <div className="max-w-lg rounded-lg border border-border bg-card p-6">
        <h2 className="text-sm font-semibold text-foreground">Signed-in account</h2>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Name</dt>
            <dd className="text-foreground">{adminDisplayName(user)}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Email</dt>
            <dd className="text-foreground">{user?.email ?? "—"}</dd>
          </div>
        </dl>
      </div>
    </>
  );
}
