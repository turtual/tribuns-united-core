import { forwardRef, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
 * TRİBÜN Avatar
 * Sizes, status badges, and ring variants for the
 * fan-tier system (Spor Yazarı, Fenomen, Efsane…)
 * ───────────────────────────────────────────── */

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

export type AvatarStatus =
  | "none"
  | "yazar" // Spor Yazarı (blue ✓)
  | "fenomen" // Fenomen (yellow ★)
  | "futbolcu" // Eski Futbolcu (red ⚽)
  | "kongre" // Kongre Üyesi (purple ◆)
  | "kombine"; // Kombine Sahibi (green 🎟)

export type AvatarRing = "default" | "team" | "official" | "celebrity";

export interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "size"> {
  /** Image src — when missing or failed, initials are shown */
  src?: string;
  /** Display name. Used for alt text + initials fallback */
  name: string;
  size?: AvatarSize;
  status?: AvatarStatus;
  ring?: AvatarRing;
  /** Override the ring color (used when ring="team") */
  teamColor?: string;
  /** Show a small green online dot in the top-right corner. Cannot be combined with status. */
  online?: boolean;
  className?: string;
}

const SIZE_PX: Record<AvatarSize, number> = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 64,
  xl: 96,
};

const FONT_PX: Record<AvatarSize, number> = {
  xs: 10,
  sm: 12,
  md: 15,
  lg: 22,
  xl: 32,
};

const RING_PX: Record<AvatarSize, number> = {
  xs: 1.5,
  sm: 2,
  md: 2,
  lg: 3,
  xl: 4,
};

/* ───── Status badge content ───── */

function StatusGlyph({ status, pixel }: { status: AvatarStatus; pixel: number }) {
  if (status === "none") return null;
  const glyph: Record<Exclude<AvatarStatus, "none">, string> = {
    yazar: "✓",
    fenomen: "★",
    futbolcu: "⚽",
    kongre: "◆",
    kombine: "🎟",
  };
  // Emoji like ⚽/🎟 don't take currentColor; use slightly smaller for visual balance.
  const isEmoji = status === "futbolcu" || status === "kombine";
  return (
    <span
      aria-hidden
      className="leading-none"
      style={{
        fontSize: isEmoji ? pixel * 0.7 : pixel * 0.62,
        color: "white",
        fontWeight: 700,
      }}
    >
      {glyph[status]}
    </span>
  );
}

const STATUS_BG: Record<Exclude<AvatarStatus, "none">, string> = {
  yazar: "#185FA5",
  fenomen: "#FFB700",
  futbolcu: "#A32D2D",
  kongre: "#7B3F99",
  kombine: "#3B6D11",
};

const STATUS_LABEL: Record<Exclude<AvatarStatus, "none">, string> = {
  yazar: "Spor Yazarı",
  fenomen: "Fenomen",
  futbolcu: "Eski Futbolcu",
  kongre: "Kongre Üyesi",
  kombine: "Kombine Sahibi",
};

/* ───── Helpers ───── */

function initialsOf(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0]!.slice(0, 2).toLocaleUpperCase("tr-TR");
  return (parts[0]![0]! + parts[parts.length - 1]![0]!).toLocaleUpperCase("tr-TR");
}

function ringStyle(ring: AvatarRing, teamColor: string | undefined, width: number) {
  switch (ring) {
    case "team":
      return {
        background: teamColor ?? "#A32D2D",
        padding: width,
      };
    case "official":
      return {
        background: "linear-gradient(135deg, #FFE08A, #FFB700 60%, #B8860B)",
        padding: width,
      };
    case "celebrity":
      return {
        background:
          "conic-gradient(from 220deg, #FFB700, #1A1A1A, #FFB700, #1A1A1A, #FFB700)",
        padding: width,
      };
    case "default":
    default:
      return {
        background: "white",
        padding: width,
      };
  }
}

/* ───── Component ───── */

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  {
    src,
    name,
    size = "md",
    status = "none",
    ring = "default",
    teamColor,
    online = false,
    className,
    alt,
    ...imgProps
  },
  ref,
) {
  const px = SIZE_PX[size];
  const ringWidth = RING_PX[size];
  const innerPx = px - ringWidth * 2;
  const badgePx = Math.max(14, Math.round(px * 0.32));
  const badgeOffset = -Math.max(1, Math.round(badgePx * 0.12));

  const showBadge = status !== "none";
  // online dot is mutually exclusive with status; status wins.
  const showOnline = online && !showBadge;

  const initials = initialsOf(name);
  const altText = alt ?? `${name} avatarı`;

  return (
    <span
      ref={ref}
      role="img"
      aria-label={
        showBadge
          ? `${name} — ${STATUS_LABEL[status as Exclude<AvatarStatus, "none">]}`
          : altText
      }
      className={cn("relative inline-flex shrink-0 items-center justify-center rounded-full", className)}
      style={{
        width: px,
        height: px,
        ...ringStyle(ring, teamColor, ringWidth),
      }}
    >
      {/* Inner circle */}
      <span
        className="flex items-center justify-center overflow-hidden rounded-full"
        style={{
          width: innerPx,
          height: innerPx,
          background: "var(--color-bg-secondary)",
        }}
      >
        {src ? (
          <img
            {...imgProps}
            src={src}
            alt={altText}
            className="h-full w-full object-cover"
            onError={(e) => {
              // Hide broken image so initials show through
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        ) : (
          <span
            aria-hidden
            className="font-display font-semibold leading-none"
            style={{
              fontSize: FONT_PX[size],
              color: "#A32D2D",
              letterSpacing: "-0.01em",
            }}
          >
            {initials}
          </span>
        )}
      </span>

      {/* Status badge */}
      {showBadge && (
        <span
          aria-hidden
          className="absolute flex items-center justify-center rounded-full"
          style={{
            width: badgePx,
            height: badgePx,
            right: badgeOffset,
            bottom: badgeOffset,
            background: STATUS_BG[status as Exclude<AvatarStatus, "none">],
            border: `${Math.max(1.5, ringWidth)}px solid white`,
            boxShadow: "0 1px 2px rgba(0,0,0,0.18)",
          }}
        >
          <StatusGlyph status={status} pixel={badgePx} />
        </span>
      )}

      {/* Online indicator */}
      {showOnline && (
        <span
          aria-label="Çevrimiçi"
          role="status"
          className="absolute rounded-full"
          style={{
            width: Math.max(8, Math.round(px * 0.22)),
            height: Math.max(8, Math.round(px * 0.22)),
            top: badgeOffset,
            right: badgeOffset,
            background: "#3B6D11",
            border: `${Math.max(1.5, ringWidth)}px solid white`,
          }}
        />
      )}
    </span>
  );
});

export default Avatar;
