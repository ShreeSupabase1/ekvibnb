import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

interface AdminLogoutButtonProps {
  variant?: "sidebar" | "navbar";
}

export function AdminLogoutButton({ variant = "sidebar" }: AdminLogoutButtonProps) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [busy, setBusy] = useState(false);

  async function handleSignOut() {
    setBusy(true);
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/admin/login", replace: true });
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      disabled={busy}
      className={cn(
        "inline-flex items-center gap-2 rounded-md text-sm font-medium transition-colors disabled:opacity-60",
        variant === "sidebar"
          ? "w-full px-3 py-2.5 text-muted-foreground hover:bg-muted hover:text-foreground"
          : "px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
    >
      <LogOut className="h-4 w-4" />
      {busy ? "Signing out…" : "Logout"}
    </button>
  );
}
