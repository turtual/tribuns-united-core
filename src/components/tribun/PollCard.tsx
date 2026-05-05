import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
 * TRİBÜN Poll Card
 * "TRİBÜN SORUYOR" — embedded in chat / feed.
 * ───────────────────────────────────────────── */

export type PollTheme = "standard" | "team_home" | "team_away";

export interface PollOption {
  id: string;
  label: string;
  /** Vote count. The component computes percentages. */
  votes: number;
}

export interface PollCardProps {
  question: string;
  options: PollOption[];
  /** Controlled: id of the option the user already voted for. */
  userVote?: string;
  /** Called when the user selects an option. */
  onVote?: (optionId: string) => void;
  theme?: PollTheme;
  /** Optional override for the bottom stat once voted. Defaults to total votes. */
  totalVotesLabel?: string;
  className?: string;
}

interface ThemePalette {
  cardBg: string;
  text: string; // primary dark text on the card
  textMuted: string;
  optionBg: string; // unvoted/inactive option pill bg
  myFill: string; // user's choice fill
  myFg: string;
  otherFill: string; // other options' progress fill
  hover: string;
}

const THEME_MAP: Record<PollTheme, ThemePalette> = {
  standard: {
    cardBg: "#FFB700",
    text: "#7C0319",
    textMuted: "rgba(124,3,25,0.7)",
    optionBg: "#FFFFFF",
    myFill: "#A32D2D",
    myFg: "#FFFFFF",
    otherFill: "rgba(124,3,25,0.10)",
    hover: "#FAEEDA",
  },
  team_home: {
    cardBg: "#FDB912",
    text: "#7C0319",
    textMuted: "rgba(124,3,25,0.7)",
    optionBg: "#FFFFFF",
    myFill: "#7C0319",
    myFg: "#FDB912",
    otherFill: "rgba(124,3,25,0.12)",
    hover: "#FFF1C2",
  },
  team_away: {
    cardBg: "#F5F2E8",
    text: "#0E1B3A",
    textMuted: "rgba(14,27,58,0.65)",
    optionBg: "#FFFFFF",
    myFill: "#0E1B3A",
    myFg: "#F5F2E8",
    otherFill: "rgba(14,27,58,0.10)",
    hover: "#EAE5D5",
  },
};

function formatVotes(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(".0", "")}K`;
  return String(n);
}

export function PollCard({
  question,
  options,
  userVote,
  onVote,
  theme = "standard",
  totalVotesLabel,
  className,
}: PollCardProps) {
  const palette = THEME_MAP[theme];

  // Allow uncontrolled use: track local vote when no userVote prop is provided.
  const [localVote, setLocalVote] = useState<string | undefined>(undefined);
  const activeVote = userVote ?? localVote;
  const voted = !!activeVote;

  const totalBaseVotes = options.reduce((sum, o) => sum + o.votes, 0);
  // When a local (uncontrolled) vote happens, optimistically add 1 to that option.
  const totalVotes = totalBaseVotes + (localVote && !userVote ? 1 : 0);

  const handleSelect = (id: string) => {
    if (voted) return;
    if (userVote === undefined) setLocalVote(id);
    onVote?.(id);
  };

  return (
    <div
      className={cn("rounded-2xl p-5", className)}
      style={{ background: palette.cardBg, color: palette.text }}
      role="group"
      aria-label="Tribün anketi"
    >
      <div
        className="font-display font-semibold uppercase"
        style={{ fontSize: 11, letterSpacing: "0.15em", color: palette.text, opacity: 0.85 }}
      >
        TRİBÜN SORUYOR
      </div>

      <h3
        className="mt-2 font-display font-semibold"
        style={{ fontSize: 18, lineHeight: "22px", color: palette.text }}
      >
        {question}
      </h3>

      <div className="mt-4 space-y-2" role="radiogroup" aria-label={question}>
        {options.map((opt) => {
          const isMine = activeVote === opt.id;
          const optVotes = opt.votes + (isMine && !userVote ? 1 : 0);
          const pct = voted && totalVotes > 0 ? Math.round((optVotes / totalVotes) * 100) : 0;

          const fillColor = isMine ? palette.myFill : palette.otherFill;
          const fgColor = isMine ? palette.myFg : palette.text;

          return (
            <button
              key={opt.id}
              type="button"
              role="radio"
              aria-checked={isMine}
              disabled={voted}
              onClick={() => handleSelect(opt.id)}
              className={cn(
                "group relative w-full overflow-hidden rounded-full text-left transition-transform",
                !voted && "active:scale-[0.99] cursor-pointer",
                voted && "cursor-default",
              )}
              style={{
                background: palette.optionBg,
                height: 44,
              }}
              onMouseEnter={(e) => {
                if (!voted) e.currentTarget.style.background = palette.hover;
              }}
              onMouseLeave={(e) => {
                if (!voted) e.currentTarget.style.background = palette.optionBg;
              }}
            >
              {/* Progress fill */}
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 transition-[width] duration-[400ms] ease-out"
                style={{
                  width: voted ? `${pct}%` : "0%",
                  background: fillColor,
                }}
              />

              <span className="relative flex h-full items-center justify-between gap-3 px-4">
                <span className="flex min-w-0 items-center gap-1.5">
                  {isMine && (
                    <Check
                      size={16}
                      strokeWidth={2.6}
                      style={{ color: fgColor }}
                      className="shrink-0 animate-[fade-in_0.3s_ease-out]"
                    />
                  )}
                  <span
                    className="truncate font-sans font-medium"
                    style={{ fontSize: 14, color: fgColor, transition: "color 200ms" }}
                  >
                    {opt.label}
                  </span>
                </span>
                {voted && (
                  <span
                    className="shrink-0 font-display font-semibold tabular-nums animate-[fade-in_0.3s_ease-out]"
                    style={{ fontSize: 14, color: fgColor, transition: "color 200ms" }}
                  >
                    {pct}%
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {!voted ? (
        <div
          className="mt-3 font-sans italic"
          style={{ fontSize: 11, color: palette.textMuted }}
        >
          Tribünün ne dediğini görmek için seçim yap
        </div>
      ) : (
        <div
          className="mt-3 font-sans tabular-nums animate-[fade-in_0.3s_ease-out]"
          style={{ fontSize: 12, color: palette.textMuted }}
        >
          {totalVotesLabel ?? `${formatVotes(totalVotes)} oy`}
        </div>
      )}
    </div>
  );
}

export default PollCard;
