import { Link, useRouterState } from "@tanstack/react-router";
import { type ReactNode } from "react";

/* Shared status bar (white or dark) */
export function StatusBar({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "light" ? "white" : "var(--color-text-primary)";
  return (
    <div className="flex items-center justify-between px-6 pt-2 pb-1" style={{ height: 44, color }}>
      <span className="text-[15px] font-semibold tracking-tight">21:47</span>
      <div className="flex items-center gap-1.5">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="0.5"/><rect x="4.5" y="5" width="3" height="6" rx="0.5"/><rect x="9" y="2.5" width="3" height="8.5" rx="0.5"/><rect x="13.5" y="0" width="3" height="11" rx="0.5"/></svg>
        <span className="text-[11px] font-semibold">5G</span>
        <svg width="26" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2.5" stroke="currentColor" opacity="0.5"/><rect x="2.5" y="2.5" width="17" height="7" rx="1.2" fill="currentColor"/><rect x="23" y="4" width="2" height="4" rx="1" fill="currentColor" opacity="0.5"/></svg>
      </div>
    </div>
  );
}

/* Bottom tab bar — floating dark pill, route-aware */
type TabKey = "home" | "gundem" | "mac" | "topluluk" | "profil";

interface TabDef {
  key: TabKey;
  label: string;
  to: "/" | "/gundem" | "/mac" | "/topluluk" | "/profil";
  icon: (active: boolean) => ReactNode;
}

const ACCENT = "#D8FF3C"; // lime/yellow accent like the reference

const TABS: TabDef[] = [
  {
    key: "home",
    label: "Ana Sayfa",
    to: "/",
    icon: (a) => (
      <svg width="26" height="26" viewBox="0 0 24 24" fill={a ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
        <path d="M3 11 L12 3 L21 11 V20 a1 1 0 0 1 -1 1 H15 V14 H9 V21 H4 a1 1 0 0 1 -1 -1 Z" />
      </svg>
    ),
  },
  {
    key: "gundem",
    label: "Gündem",
    to: "/gundem",
    icon: () => (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
        <path d="M5 4 H17 a2 2 0 0 1 2 2 V20 H7 a2 2 0 0 1 -2 -2 Z" />
        <path d="M9 9 H15 M9 13 H15 M9 17 H13" />
      </svg>
    ),
  },
  {
    key: "mac",
    label: "Maç",
    to: "/mac",
    icon: () => (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3 L14 8 L19 9 M12 3 L10 8 L5 9 M5 9 L7 15 L12 17 L17 15 L19 9 M7 15 L5 20 M17 15 L19 20 M12 17 L12 21" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "topluluk",
    label: "Topluluk",
    to: "/topluluk",
    icon: () => (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 4 L7 20 M17 4 L15 20 M4 9 H20 M3 15 H19" />
      </svg>
    ),
  },
  {
    key: "profil",
    label: "Profil",
    to: "/profil",
    icon: () => (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="9" r="4" />
        <path d="M4 21 C5 16.5 8.5 14.5 12 14.5 C15.5 14.5 19 16.5 20 21" />
      </svg>
    ),
  },
];

export function BottomTabBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav
      className="flex items-center justify-between"
      style={{
        background: "#1F1F1F",
        borderRadius: 999,
        padding: "10px 14px",
        boxShadow: "0 12px 32px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04) inset",
      }}
    >
      {TABS.map((t) => {
        const active =
          t.to === "/" ? pathname === "/" : pathname === t.to || pathname.startsWith(t.to + "/");
        return (
          <Link
            key={t.key}
            to={t.to}
            className="flex flex-col items-center justify-center transition-all"
            style={{
              color: active ? ACCENT : "rgba(255,255,255,0.85)",
              filter: active ? `drop-shadow(0 0 10px ${ACCENT}80)` : "none",
              gap: 2,
              padding: "4px 6px",
              minWidth: 56,
            }}
          >
            {t.icon(active)}
            <span
              className="font-sans text-[11px]"
              style={{ fontWeight: active ? 600 : 500, letterSpacing: 0.1 }}
            >
              {t.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

/* iPhone-like phone frame container with sticky/fixed bottom nav */
export function PhoneFrame({
  children,
  bg = "var(--color-bg-primary)",
  withTabs = true,
  withStatusBar = true,
  statusBarTone = "dark",
  themeClass,
}: {
  children: ReactNode;
  bg?: string;
  withTabs?: boolean;
  withStatusBar?: boolean;
  statusBarTone?: "dark" | "light";
  themeClass?: string;
}) {
  return (
    <div className={`min-h-screen w-full ${themeClass ?? ""}`} style={{ background: bg }}>
      <div
        className="mx-auto relative flex flex-col"
        style={{
          width: 393,
          height: 852,
          background: bg,
          boxShadow: "0 30px 80px rgba(0,0,0,0.18)",
          overflow: "hidden",
        }}
      >
        {withStatusBar && <StatusBar tone={statusBarTone} />}
        <div
          className="flex-1 flex flex-col overflow-y-auto"
          style={{ paddingBottom: withTabs ? 110 : 0 }}
        >
          {children}
        </div>
        {withTabs && (
          <div
            className="absolute left-0 right-0 px-4"
            style={{ bottom: 18, pointerEvents: "none" }}
          >
            <div style={{ pointerEvents: "auto" }}>
              <BottomTabBar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
