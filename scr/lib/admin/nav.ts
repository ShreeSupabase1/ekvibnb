import { CalendarDays, LayoutDashboard, Settings, Users, ClipboardList } from "lucide-react";

export interface AdminNavItem {
  label: string;
  to: string;
  icon: typeof LayoutDashboard;
}

export const ADMIN_NAV: AdminNavItem[] = [
  { label: "Dashboard", to: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Appointments", to: "/admin/appointments", icon: ClipboardList },
  { label: "Customers", to: "/admin/customers", icon: Users },
  { label: "Calendar", to: "/admin/calendar", icon: CalendarDays },
  { label: "Settings", to: "/admin/settings", icon: Settings },
];
