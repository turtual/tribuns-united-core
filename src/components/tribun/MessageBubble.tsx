import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Avatar, type AvatarStatus } from "./Avatar";

/* ─────────────────────────────────────────────
 * TRİBÜN Message Bubble
 * Used in the live match chat. Adapts to standard
 * (beige) and team-themed (crimson / navy) screens.
 * ───────────────────────────────────────────── */

export type MessageStatus =
  | "sportwriter"
  | "fenomen"
  | "eski_futbolcu"
  | "kongre"
  | "kombine"
  | "celebrity"
  | null;

export type MessageTheme = "standard" | "team_home" | "team_away";

export interface MessageBubbleProps {
  username: string;
  text: string;
  timestamp: string;
  avatarUrl?: string;
  status?: MessageStatus;
  theme?: MessageTheme;
  isOwn?: boolean;
  className?: string;
  /** Optional inline content rendered above the message text (e.g. quote, image) */
  children?: ReactNode;
}

/* ───── Status → visual config ───── */

interface StatusConfig {
  label: string;
  color: string; // accent color (border + pill bg)
  pillFg: string;
  avatar: AvatarStatus;
  ring?: "official" | "celebrity";
}

const STATUS_MAP: Record<NonNullable<MessageStatus>, StatusConfig> = {
  sportwriter: { label: "SPOR YAZARI", color: "#185FA5", pillFg: "#FFFFFF", avatar: "yazar" },
  fenomen: { label: "FENOMEN", color: "#FFB700", pillFg: "#1A1A1A", avatar: "fenomen" },
  eski_futbolcu: { label: "EFSANE", color: "#A32D2D", pillFg: "#FFFFFF", avatar: "futbolcu" },
  kongre: { label: "KONGRE", color: "#7B3F99", pillFg: "#FFFFFF", avatar: "kongre" },
  kombine: { label: "KOMBİNE", color: "#3B6D11", pillFg: "#FFFFFF", avatar: "kombine" },
  celebrity: { label: "ÜNLÜ", color: "#1A1A1A", pillFg: "#FFB700", avatar: "none", ring: "celebrity" },
};

/* ───── Theme → bubble palette ───── */

interface ThemePalette {
  bubbleBg: string;
  specialBg: string;
  text: string;
  username: string; // accent for username
  timestamp: string;
}

const THEME_MAP: Record<MessageTheme, ThemePalette> = {
  standard: {
    bubbleBg: "#FFFFFF",
    specialBg: "#FFF8EC",
    text: "#1A1A1A",
    username: "#A32D2D",
    timestamp: "rgba(26,26,26,0.45)",
  },
  team_home: {
    bubbleBg: "#8B0526",
    specialBg: "#A5163C",
    text: "#FFFFFF",
    username: "#FDB912",
    timestamp: "rgba(255,255,255,0.5)",
  },
  team_away: {
    bubbleBg: "#1A2D5A",
    specialBg: "#23397A",
    text: "#F5F2E8",
    username: "#F5F2E8",
    timestamp: "rgba(245,242,232,0.55)",
  },
};

/* ───── Pill ───── */

function StatusPill({ label, bg, fg }: { label: string; bg: string; fg: string }) {
  return (
    <span
      className="inline-block rounded-full font-sans font-semibold uppercase"
      style={{
        background: bg,
        color: fg,
        fontSize: 9,
        lineHeight: 1.2,
        padding: "2px 6px",
        letterSpacing: "0.08em",
      }}
    >
      {label}
    </span>
  );
}

/* ───── Component ───── */

export function MessageBubble({
  username,
  text,
  timestamp,
  avatarUrl,
  status = null,
  theme = "standard",
  isOwn = false,
  className,
  children,
}: MessageBubbleProps) {
  const palette = THEME_MAP[theme];
  const statusConfig = status ? STATUS_MAP[status] : null;
  const isSpecial = !!statusConfig;

  const bubbleBg = isSpecial ? palette.specialBg : palette.bubbleBg;
  const accent = statusConfig?.color;

  // Speech-bubble corner: smaller corner faces the avatar
  const radius = isOwn ? "16px 16px 4px 16px" : "16px 16px 16px 4px";

  return (
    <div
      className={cn("flex w-full items-end gap-2 px-4 animate-[fade-in_0.3s_ease-out]", isOwn && "flex-row-reverse", className)}
    >
      <Avatar
        src={avatarUrl}
        name={username}
        size="sm"
        status={statusConfig?.avatar ?? "none"}
        ring={statusConfig?.ring ?? "default"}
      />

      <div
        className="relative max-w-[280px] min-w-0"
        style={{
          background: bubbleBg,
          color: palette.text,
          borderRadius: radius,
          padding: "8px 14px 6px",
          borderLeft: !isOwn && isSpecial ? `2px solid ${accent}` : undefined,
          borderRight: isOwn && isSpecial ? `2px solid ${accent}` : undefined,
          boxShadow:
            theme === "standard"
              ? "0 1px 2px rgba(26,26,26,0.06)"
              : "0 1px 2px rgba(0,0,0,0.25)",
        }}
      >
        {/* Username + status pill */}
        <div className={cn("flex items-center gap-1.5 flex-wrap", isOwn && "flex-row-reverse")}>
          <span
            className="font-sans font-medium leading-none"
            style={{ color: palette.username, fontSize: 12 }}
          >
            {username}
          </span>
          {statusConfig && (
            <StatusPill
              label={statusConfig.label}
              bg={statusConfig.color}
              fg={statusConfig.pillFg}
            />
          )}
        </div>

        {/* Optional inline content (quote, image, etc.) */}
        {children && <div className="mt-2">{children}</div>}

        {/* Message text */}
        <p
          className="mt-1 font-sans break-words"
          style={{ fontSize: 14, lineHeight: "20px" }}
        >
          {text}
        </p>

        {/* Timestamp */}
        <div
          className={cn("mt-0.5 font-sans", isOwn ? "text-left" : "text-right")}
          style={{ fontSize: 10, color: palette.timestamp, lineHeight: 1.4 }}
        >
          {timestamp}
        </div>
      </div>
    </div>
  );
}

export default MessageBubble;
