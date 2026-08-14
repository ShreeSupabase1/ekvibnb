import { createFileRoute } from "@tanstack/react-router";
import { AdminPageHeader, AdminPlaceholderCard } from "@/components/admin/AdminLayout";

export const Route = createFileRoute("/admin/_shell/appointments")({
  component: AppointmentsPage,
});

function AppointmentsPage() {
  return (
    <>
      <AdminPageHeader
        title="Appointments"
        description="Consultation bookings will be managed here."
      />
      <AdminPlaceholderCard label="No appointments connected yet." />
    </>
  );
}
