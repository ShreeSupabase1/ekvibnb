import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { BUSINESS } from "@/constants/business";
import { CLINIC_JSON_LD } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <p className="text-eyebrow">Error 404</p>
        <h1 className="mt-4 font-serif text-6xl md:text-7xl text-ink">Not found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you're looking for has moved or doesn't exist.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <p className="text-eyebrow">Something went wrong</p>
        <h1 className="mt-4 font-serif text-4xl text-ink">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Please try again or return to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-ivory"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#9C6B30" },
      { title: `${BUSINESS.name} — ${BUSINESS.tagline}` },
      { name: "description", content: BUSINESS.description },
      { name: "author", content: BUSINESS.name },
      { name: "keywords", content: "medical aesthetic clinic, skin clinic, laser, injectables, botox, filler, hair, wellness, Nerul, Navi Mumbai, Mumbai, dermatology" },
      { property: "og:title", content: `${BUSINESS.name} — ${BUSINESS.tagline}` },
      { property: "og:description", content: BUSINESS.description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: BUSINESS.name },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "EKVI Bare & Beyond Aesthetics" },
      { property: "og:title", content: "EKVI Bare & Beyond Aesthetics" },
      { name: "twitter:title", content: "EKVI Bare & Beyond Aesthetics" },
      { name: "description", content: "At Bare & Beyond, we believe beauty is not about changing who you are — it is about helping you feel confident, refreshed, healthy, and comfortable in your own" },
      { property: "og:description", content: "At Bare & Beyond, we believe beauty is not about changing who you are — it is about helping you feel confident, refreshed, healthy, and comfortable in your own" },
      { name: "twitter:description", content: "At Bare & Beyond, we believe beauty is not about changing who you are — it is about helping you feel confident, refreshed, healthy, and comfortable in your own" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/fa0f4cab-64e0-4bb7-bda3-7c7997ddd410" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/fa0f4cab-64e0-4bb7-bda3-7c7997ddd410" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=Cormorant+Garamond:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(CLINIC_JSON_LD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isAdmin = pathname === "/admin" || pathname.startsWith("/admin/");

  if (isAdmin) {
    return (
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-dvh flex-col bg-background">
        <Header />
        <main className="flex-1 pt-20 md:pt-24">
          <Outlet />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </QueryClientProvider>
  );
}

