import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";

/** Protected admin shell. Client-only: the session lives in browser storage. */
export const Route = createFileRoute("/admin/_shell")({
  ssr: false,
  beforeLoad: async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) {
      throw redirect({ to: "/admin/login" });
    }
    return { user: data.user };
  },
  component: () => (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  ),
});
