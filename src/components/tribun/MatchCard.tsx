import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
 * TRİBÜN Match Card
 * Dark card used on Home & Maç screens for live
 * and upcoming matches. Inspired by broadcast-style
 * scorebugs (UCL match-strip).
 * ───────────────────────────────────────────── */

export type MatchCardState = "live" | "upcoming";

export interface MatchCardTeam {
  code: string; // 3-4 letter monogram (e.g. "GS", "MDRD")
  name: string;
  /** CSS background for the crest disc */
  bg: string;
}

export interface MatchCardProps {
  state: MatchCardState;
  league: {
    name: string; // e.g. "SÜPER LİG", "UEFA CHAMPIONS LEAGUE"
    /** CSS background for the left panel */
    bg?: string;
    /** Optional 1-2 word group/round label shown bottom-right */
    group?: string;
  };
  home: MatchCardTeam;
  away: MatchCardTeam;
  /** Required when state === "live" */
  homeScore?: number;
  awayScore?: number;
  /** Live: clock like "64:20" or "67'". Upcoming: kickoff like "21:00" */
  time: string;
  venue?: string;
  to?: string; // navigation target
  className?: string;
}

const ACCENT_LIME = "#D8FF3C";

export function MatchCard({
  state,
  league,
  home,
  away,
  homeScore,
  awayScore,
  time,
  venue,
  group,
  to,
  className,
}: MatchCardProps & { group?: string }) {
  const content = (
    <div
      className={cn(
        "relative grid overflow-hidden rounded-2xl text-white shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)]",
        className,
      )}
      style={{
        gridTemplateColumns: "112px 1fr",
        background: "#0E0E10",
        minHeight: 148,
      }}
    >
      {/* Left league panel */}
      <div
        className="relative flex flex-col items-center justify-center p-3"
        style={{
          background:
            league.bg ??
            "radial-gradient(ellipse at center, rgba(216,255,60,0.35), rgba(0,0,0,0.9) 70%), #0a1a08",
        }}
      >
        <div
          className="font-display font-semibold uppercase text-center leading-tight"
          style={{ fontSize: 11, letterSpacing: "0.12em" }}
        >
          {league.name}
        </div>
      </div>

      {/* Right scorebug */}
      <div className="relative flex flex-col justify-between p-4">
        <div className="flex items-center justify-between gap-2">
          {/* Home */}
          <div className="flex flex-1 flex-col items-center gap-1.5">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full font-display font-semibold text-white text-[11px] ring-2 ring-white/15"
              style={{ background: home.bg }}
              aria-hidden
            />
            <div
              className="font-sans font-medium uppercase text-white/80"
              style={{ fontSize: 11, letterSpacing: "0.08em" }}
            >
              {home.code}
            </div>
          </div>

          {/* Score / vs */}
          <div className="flex flex-col items-center gap-1.5 px-2">
            {state === "live" ? (
              <div
                className="font-display font-semibold tabular-nums"
                style={{ fontSize: 28, lineHeight: 1 }}
              >
                {homeScore ?? 0}
                <span className="mx-2 text-white/60">-</span>
                {awayScore ?? 0}
              </div>
            ) : (
              <div
                className="font-display font-semibold text-white/70"
                style={{ fontSize: 22, lineHeight: 1 }}
              >
                vs
              </div>
            )}
            <div
              className="rounded-full px-2.5 py-1 font-sans font-semibold tabular-nums"
              style={{
                background: state === "live" ? "#1A1A1A" : "rgba(255,255,255,0.08)",
                color: state === "live" ? ACCENT_LIME : "rgba(255,255,255,0.85)",
                fontSize: 11,
                letterSpacing: "0.04em",
                border: state === "live" ? `1px solid ${ACCENT_LIME}40` : "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {state === "live" && (
                <span
                  className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle animate-pulse"
                  style={{ background: ACCENT_LIME }}
                />
              )}
              {time}
            </div>
          </div>

          {/* Away */}
          <div className="flex flex-1 flex-col items-center gap-1.5">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full font-display font-semibold text-white text-[11px] ring-2 ring-white/15"
              style={{ background: away.bg }}
              aria-hidden
            />
            <div
              className="font-sans font-medium uppercase text-white/80"
              style={{ fontSize: 11, letterSpacing: "0.08em" }}
            >
              {away.code}
            </div>
          </div>
        </div>

        {/* Bottom row: venue + group/round */}
        {(venue || group) && (
          <div className="mt-3 flex items-center justify-between gap-2">
            {venue ? (
              <div className="flex min-w-0 items-center gap-1">
                <MapPin size={12} style={{ color: ACCENT_LIME }} />
                <span
                  className="truncate font-sans font-semibold uppercase text-white/85"
                  style={{ fontSize: 10.5, letterSpacing: "0.1em" }}
                >
                  {venue}
                </span>
              </div>
            ) : <span />}
            {group && (
              <span
                className="font-sans text-white/70"
                style={{ fontSize: 11 }}
              >
                {group}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );

  if (to) {
    return (
      <Link to={to} className="block">
        {content}
      </Link>
    );
  }
  return content;
}

export default MatchCard;
