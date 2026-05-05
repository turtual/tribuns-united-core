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

/* Bottom tab bar — route-aware */
type TabKey = "home" | "gundem" | "mac" | "topluluk" | "profil";

interface TabDef {
  key: TabKey;
  label: string;
  to: "/" | "/gundem" | "/mac" | "/topluluk" | "/profil";
  path: string; // svg path
  hash?: boolean;
  circle?: boolean;
}

const TABS: TabDef[] = [
  { key: "home", label: "Ana Sayfa", to: "/", path: "M4 11 L12 4 L20 11 V20 H14 V14 H10 V20 H4 Z" },
  { key: "gundem", label: "Gündem", to: "/gundem", path: "M5 5 H19 V19 H5 Z M8 9 H16 M8 13 H16 M8 17 H13" },
  { key: "mac", label: "Maç", to: "/mac", path: "", circle: true },
  { key: "topluluk", label: "Topluluk", to: "/topluluk", path: "", hash: true },
  { key: "profil", label: "Profil", to: "/profil", path: "M12 12 m-4 0 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M4 21 C5 17 8.5 15.5 12 15.5 C15.5 15.5 19 17 20 21" },
];

export function BottomTabBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav
      className="grid grid-cols-5"
      style={{ height: 80, background: "white", borderTop: "1px solid var(--color-border-tertiary)" }}
    >
      {TABS.map((t) => {
        const active =
          t.to === "/" ? pathname === "/" : pathname === t.to || pathname.startsWith(t.to + "/");
        const color = active ? "#A32D2D" : "#999";
        return (
          <Link
            key={t.key}
            to={t.to}
            className="flex flex-col items-center justify-center gap-1 pt-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              {t.hash ? (
                <path d="M9 4 L7 20 M17 4 L15 20 M4 9 H20 M4 15 H20" />
              ) : t.circle ? (
                <circle cx="12" cy="12" r="8" />
              ) : (
                <path d={t.path} />
              )}
            </svg>
            <span className="font-sans text-[11px]" style={{ color, fontWeight: active ? 500 : 400 }}>
              {t.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

/* iPhone-like phone frame container */
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
        className="mx-auto flex flex-col"
        style={{
          width: 393,
          minHeight: 852,
          background: bg,
          boxShadow: "0 30px 80px rgba(0,0,0,0.18)",
        }}
      >
        {withStatusBar && <StatusBar tone={statusBarTone} />}
        <div className="flex-1 flex flex-col">{children}</div>
        {withTabs && <BottomTabBar />}
      </div>
    </div>
  );
}
