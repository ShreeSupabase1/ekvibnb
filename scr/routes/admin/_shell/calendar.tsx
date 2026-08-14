import { createFileRoute } from "@tanstack/react-router";
import { AdminPageHeader, AdminPlaceholderCard } from "@/components/admin/AdminLayout";

export const Route = createFileRoute("/admin/_shell/calendar")({
  component: CalendarPage,
});

function CalendarPage() {
  return (
    <>
      <AdminPageHeader title="Calendar" description="Clinic schedule view." />
      <AdminPlaceholderCard label="No schedule connected yet." />
    </>
  );
}
