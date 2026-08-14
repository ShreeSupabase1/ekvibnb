export function reportLovableError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  // Safe local logging to replace Lovable telemetry dependencies
  if (process.env.NODE_ENV === "development") {
    console.error("[App Error Handler]:", error, context);
  }
}