import { useEffect, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

/** Admin session state. Authentication only — no data features. */
export function useAdminSession() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_event, next) => {
      setSession(next);
    });

    void supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  return { session, user: session?.user ?? null };
}

export function adminDisplayName(user: User | null): string {
  if (!user) return "Admin";
  const meta = user.user_metadata as { full_name?: string; name?: string } | undefined;
  return meta?.full_name || meta?.name || user.email?.split("@")[0] || "Admin";
}
