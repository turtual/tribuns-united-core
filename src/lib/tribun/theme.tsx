import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { getTodayFixture, isMatchDay as checkIsMatchDay } from "./fixtures";

export type ThemePreference = "auto" | "standard" | "force-home" | "force-away";
export type ResolvedTheme = "standard" | "gs-home" | "gs-away";

export const PREFERENCE_LABELS: Record<ThemePreference, string> = {
  auto: "Otomatik",
  standard: "Standart",
  "force-home": "GS Ev Sahibi",
  "force-away": "GS Deplasman",
};

const STORAGE_KEY = "tribun.themePreference";

type Ctx = {
  preference: ThemePreference;
  resolved: ResolvedTheme;
  isMatchDay: boolean;
  setPreference: (p: ThemePreference) => void;
  themeClass: string;
};

const ThemeContext = createContext<Ctx | null>(null);

function resolveTheme(pref: ThemePreference): ResolvedTheme {
  if (pref === "force-home") return "gs-home";
  if (pref === "force-away") return "gs-away";
  if (pref === "standard") return "standard";
  const f = getTodayFixture();
  if (!f) return "standard";
  return f.venue === "home" ? "gs-home" : "gs-away";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>("auto");

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY) as ThemePreference | null;
      if (v && ["auto", "standard", "force-home", "force-away"].includes(v)) {
        setPreferenceState(v);
      }
    } catch {}
  }, []);

  const setPreference = (p: ThemePreference) => {
    setPreferenceState(p);
    try { localStorage.setItem(STORAGE_KEY, p); } catch {}
  };

  const value = useMemo<Ctx>(() => {
    const resolved = resolveTheme(preference);
    const themeClass =
      resolved === "gs-home" ? "theme-gs-home" : resolved === "gs-away" ? "theme-gs-away" : "";
    return {
      preference,
      resolved,
      isMatchDay: checkIsMatchDay(),
      setPreference,
      themeClass,
    };
  }, [preference]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): Ctx {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    return {
      preference: "auto",
      resolved: "standard",
      isMatchDay: false,
      setPreference: () => {},
      themeClass: "",
    };
  }
  return ctx;
}
