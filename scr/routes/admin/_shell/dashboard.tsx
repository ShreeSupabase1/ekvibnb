import { createFileRoute } from "@tanstack/react-router";
import { AdminPageHeader, AdminPlaceholderCard } from "@/components/admin/AdminLayout";

export const Route = createFileRoute("/admin/_shell/dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <>
      <AdminPageHeader
        title="Dashboard"
        description="Overview of clinic activity. Metrics will be connected in a later phase."
      />
      <AdminPlaceholderCard label="No data connected yet." />
    </>
  );
}
