import { createFileRoute } from "@tanstack/react-router";
import { AdminPageHeader, AdminPlaceholderCard } from "@/components/admin/AdminLayout";

export const Route = createFileRoute("/admin/_shell/customers")({
  component: CustomersPage,
});

function CustomersPage() {
  return (
    <>
      <AdminPageHeader title="Customers" description="Patient records will be managed here." />
      <AdminPlaceholderCard label="No customers connected yet." />
    </>
  );
}
