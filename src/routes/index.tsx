import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  component: MatchScreen,
});

/* ───────── Icons ───────── */

function IconCalendar() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M3.5 10 H20.5 M8 3 V7 M16 3 V7" />
    </svg>
  );
}
function IconChevron({ dir = "right", size = 16 }: { dir?: "right" | "down"; size?: number }) {
  const d = dir === "right" ? "M9 6 L15 12 L9 18" : "M6 9 L12 15 L18 9";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}
function IconEye() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12 C4 6.5 8 4 12 4 C16 4 20 6.5 22 12 C20 17.5 16 20 12 20 C8 20 4 17.5 2 12 Z" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  );
}
function IconClose() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6 L18 18 M18 6 L6 18" />
    </svg>
  );
}
function IconBall() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 5 L14 9 L12 13 L10 9 Z M12 13 L8 16 M12 13 L16 16 M14 9 L18 9 M10 9 L6 9" />
    </svg>
  );
}
function IconCard({ color }: { color: string }) {
  return <span className="inline-block rounded-sm" style={{ width: 10, height: 14, background: color }} />;
}

/* Tab bar icons */
function IconHome({ filled }: { filled?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 11 L12 4 L20 11 V20 C20 20.5 19.5 21 19 21 H15 V14 H9 V21 H5 C4.5 21 4 20.5 4 20 Z" />
    </svg>
  );
}
function IconNews({ filled }: { filled?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5 H17 C17.6 5 18 5.4 18 6 V19 C18 20 18.8 21 20 21 C19 21 4 21 4 21 C3.4 21 3 20.6 3 20 V6 C3 5.4 3.4 5 4 5 Z" />
      <path d="M18 9 H21 V19 C21 20 20.5 21 20 21" />
      <path d="M6 9 H15 M6 13 H15 M6 17 H12" stroke={filled ? "white" : "currentColor"} />
    </svg>
  );
}
function IconMatch({ filled }: { filled?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3 L14 8 L19 9 M12 3 L10 8 L5 9 M14 8 L12 13 L10 8 M5 9 L8 14 L7 19 M19 9 L16 14 L17 19 M8 14 H16 M7 19 L12 17 L17 19" stroke={filled ? "white" : "currentColor"} />
    </svg>
  );
}
function IconCommunity() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="9" r="3.2" />
      <circle cx="17" cy="10" r="2.6" />
      <path d="M3 19 C3 15.5 6 13.5 9 13.5 C12 13.5 15 15.5 15 19" />
      <path d="M15 14 C18 14 21 15.5 21 18.5" />
    </svg>
  );
}
function IconProfile() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8.5" r="3.6" />
      <path d="M4.5 20 C5.5 16 8.5 14.5 12 14.5 C15.5 14.5 18.5 16 19.5 20" />
    </svg>
  );
}

/* ───────── Bits ───────── */

function LiveDot({ size = 8 }: { size?: number }) {
  return (
    <span className="relative inline-flex" style={{ width: size, height: size }}>
      <span
        className="absolute inset-0 rounded-pill animate-ping"
        style={{ background: "var(--primary)", opacity: 0.55 }}
      />
      <span
        className="relative inline-block rounded-pill"
        style={{ width: size, height: size, background: "var(--primary)" }}
      />
    </span>
  );
}

function TeamLogo({ tone, mono, size = 32 }: { tone: string; mono: string; size?: number }) {
  return (
    <div
      className="rounded-pill flex items-center justify-center shrink-0"
      style={{ width: size, height: size, background: tone }}
    >
      <span
        className="font-display"
        style={{ color: "white", fontWeight: 600, fontSize: size * 0.36, letterSpacing: "0.02em" }}
      >
        {mono}
      </span>
    </div>
  );
}

function LeagueBadge({ name }: { name: string }) {
  return (
    <span
      className="rounded-pill px-2 py-0.5"
      style={{
        background: "var(--bg-secondary)",
        color: "var(--text-secondary)",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 10,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
    >
      {name}
    </span>
  );
}

/* ───────── Types ───────── */

type Team = { name: string; mono: string; tone: string };
type Match = {
  id: string;
  league: string;
  home: Team;
  away: Team;
  homeScore?: number;
  awayScore?: number;
  minute?: string;
  time?: string;
  date?: string;
  stadium?: string;
  isMyTeam?: boolean; // user's team is in this match
  myTeamSide?: "home" | "away";
  events?: { minute: string; type: "goal" | "yellow" | "red"; team: "home" | "away"; player: string }[];
  chatActive?: boolean;
};

const MY_TEAM = "Galatasaray";

/* ───────── Match Card ───────── */

function MatchRow({ team, score, isMine, time }: { team: Team; score?: number; isMine?: boolean; time?: string }) {
  return (
    <div
      className="flex items-center gap-3 px-3 py-2.5 rounded-xl relative"
      style={{
        background: isMine ? "var(--bg-primary)" : "transparent",
      }}
    >
      {isMine && (
        <span
          className="absolute left-0 top-2 bottom-2 rounded-pill"
          style={{ width: 3, background: "var(--primary)" }}
        />
      )}
      <TeamLogo tone={team.tone} mono={team.mono} />
      <span
        className="flex-1 font-display text-text-primary truncate"
        style={{ fontWeight: isMine ? 600 : 500, fontSize: 16 }}
      >
        {team.name}
      </span>
      {score !== undefined ? (
        <span className="font-display text-text-primary" style={{ fontWeight: 600, fontSize: 24, fontVariantNumeric: "tabular-nums" }}>
          {score}
        </span>
      ) : time ? (
        <span className="font-display text-text-secondary" style={{ fontWeight: 500, fontSize: 14, fontVariantNumeric: "tabular-nums" }}>
          {time}
        </span>
      ) : null}
    </div>
  );
}

function LiveCard({ m, onJoin, onGuest }: { m: Match; onJoin: () => void; onGuest: () => void }) {
  return (
    <article
      className="bg-surface rounded-2xl border"
      style={{ borderColor: "var(--border-tertiary)", padding: 16 }}
    >
      <div className="flex items-center justify-between">
        <LeagueBadge name={m.league} />
        <div className="flex items-center gap-1.5">
          <LiveDot />
          <span
            className="font-display"
            style={{ color: "var(--primary)", fontWeight: 600, fontSize: 13, letterSpacing: "0.04em" }}
          >
            {m.minute}
          </span>
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-1">
        <MatchRow team={m.home} score={m.homeScore} isMine={m.isMyTeam && m.myTeamSide === "home"} />
        <MatchRow team={m.away} score={m.awayScore} isMine={m.isMyTeam && m.myTeamSide === "away"} />
      </div>

      <div className="mt-4">
        {m.isMyTeam ? (
          <button
            type="button"
            onClick={onJoin}
            className="w-full rounded-pill flex items-center justify-center gap-2 transition-colors"
            style={{
              height: 44,
              background: "var(--primary)",
              color: "white",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              letterSpacing: "0.01em",
            }}
          >
            <LiveDot size={6} />
            Tribüne Gir
          </button>
        ) : (
          <button
            type="button"
            onClick={onGuest}
            className="w-full rounded-pill flex items-center justify-center gap-1.5 border transition-colors"
            style={{
              height: 44,
              background: "white",
              borderColor: "var(--border)",
              color: "var(--text-secondary)",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            Misafir olarak gir
            <IconChevron dir="right" size={16} />
          </button>
        )}
      </div>
    </article>
  );
}

function TodayCard({ m, onGuest, onJoin }: { m: Match; onGuest: () => void; onJoin: () => void }) {
  return (
    <article
      className="bg-surface rounded-2xl border"
      style={{ borderColor: "var(--border-tertiary)", padding: 16 }}
    >
      <div className="flex items-center justify-between">
        <LeagueBadge name={m.league} />
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-tertiary)" }}>
          Bugün
        </span>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="flex-1 flex flex-col items-center gap-2">
          <TeamLogo tone={m.home.tone} mono={m.home.mono} size={44} />
          <span className="font-display text-text-primary text-center" style={{ fontWeight: m.isMyTeam && m.myTeamSide === "home" ? 600 : 500, fontSize: 13, lineHeight: "16px" }}>
            {m.home.name}
          </span>
        </div>

        <div className="flex flex-col items-center gap-1 min-w-[64px]">
          <span
            className="font-display"
            style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: 22, fontVariantNumeric: "tabular-nums" }}
          >
            {m.time}
          </span>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, color: "var(--text-tertiary)", letterSpacing: "0.06em" }}>
            VS
          </span>
        </div>

        <div className="flex-1 flex flex-col items-center gap-2">
          <TeamLogo tone={m.away.tone} mono={m.away.mono} size={44} />
          <span className="font-display text-text-primary text-center" style={{ fontWeight: m.isMyTeam && m.myTeamSide === "away" ? 600 : 500, fontSize: 13, lineHeight: "16px" }}>
            {m.away.name}
          </span>
        </div>
      </div>

      {m.stadium && (
        <div className="mt-3 text-center" style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--text-tertiary)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {m.stadium}
        </div>
      )}

      <div className="mt-4">
        <button
          type="button"
          onClick={m.isMyTeam ? onJoin : onGuest}
          className="w-full rounded-pill flex items-center justify-center gap-1.5 transition-colors"
          style={{
            height: 40,
            background: m.isMyTeam ? "var(--primary)" : "white",
            border: m.isMyTeam ? "none" : "1px solid var(--border)",
            color: m.isMyTeam ? "white" : "var(--text-secondary)",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 13,
          }}
        >
          {m.isMyTeam ? "Tribün Hazır" : "Misafir olarak gir"}
          {!m.isMyTeam && <IconChevron dir="right" size={14} />}
        </button>
      </div>
    </article>
  );
}

function PastRow({ m, expanded, onToggle }: { m: Match; expanded: boolean; onToggle: () => void }) {
  const myWon =
    m.isMyTeam &&
    m.homeScore !== undefined &&
    m.awayScore !== undefined &&
    ((m.myTeamSide === "home" && m.homeScore > m.awayScore) ||
      (m.myTeamSide === "away" && m.awayScore > m.homeScore));
  const myDraw = m.isMyTeam && m.homeScore === m.awayScore;
  const accent = myWon ? "var(--success-fg)" : myDraw ? "var(--text-tertiary)" : m.isMyTeam ? "var(--primary)" : "var(--border)";

  return (
    <div className="bg-surface rounded-2xl border overflow-hidden" style={{ borderColor: "var(--border-tertiary)" }}>
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center gap-3 px-3 relative"
        style={{ height: 64 }}
      >
        <span className="absolute left-0 top-3 bottom-3 rounded-pill" style={{ width: 2, background: accent, opacity: m.isMyTeam ? 1 : 0 }} />
        <div className="flex items-center gap-1.5">
          <TeamLogo tone={m.home.tone} mono={m.home.mono} size={24} />
          <TeamLogo tone={m.away.tone} mono={m.away.mono} size={24} />
        </div>
        <div className="flex-1 text-left flex flex-col">
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 13, color: "var(--text-primary)" }}>
            {m.home.mono} – {m.away.mono}
          </span>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--text-tertiary)" }}>
            {m.date} · {m.league}
          </span>
        </div>
        <span className="font-display" style={{ fontWeight: 600, fontSize: 18, color: "var(--text-primary)", fontVariantNumeric: "tabular-nums" }}>
          {m.homeScore}–{m.awayScore}
        </span>
        <span style={{ color: "var(--text-tertiary)", transform: expanded ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>
          <IconChevron dir="down" size={16} />
        </span>
      </button>

      {expanded && (
        <div className="px-4 pb-4 border-t" style={{ borderColor: "var(--border-tertiary)" }}>
          <div className="pt-3 flex items-center justify-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <TeamLogo tone={m.home.tone} mono={m.home.mono} size={36} />
              <span className="font-display" style={{ fontWeight: 600, fontSize: 13 }}>{m.home.name}</span>
            </div>
            <span className="font-display" style={{ fontWeight: 600, fontSize: 32, fontVariantNumeric: "tabular-nums" }}>
              {m.homeScore} – {m.awayScore}
            </span>
            <div className="flex flex-col items-center gap-1">
              <TeamLogo tone={m.away.tone} mono={m.away.mono} size={36} />
              <span className="font-display" style={{ fontWeight: 600, fontSize: 13 }}>{m.away.name}</span>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            {(m.events ?? []).map((e, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span
                  className="font-display"
                  style={{
                    fontWeight: 600,
                    fontSize: 12,
                    color: "var(--text-tertiary)",
                    width: 32,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {e.minute}
                </span>
                <span style={{ color: e.type === "goal" ? "var(--text-primary)" : "transparent" }}>
                  {e.type === "goal" ? <IconBall /> : null}
                  {e.type === "yellow" ? <IconCard color="#F4C430" /> : null}
                  {e.type === "red" ? <IconCard color="#A32D2D" /> : null}
                </span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-primary)" }}>
                  {e.player}
                </span>
                <span className="ml-auto" style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--text-tertiary)" }}>
                  {e.team === "home" ? m.home.mono : m.away.mono}
                </span>
              </div>
            ))}
          </div>

          {m.chatActive && (
            <button
              type="button"
              className="mt-4 w-full rounded-pill"
              style={{
                height: 40,
                background: "var(--primary)",
                color: "white",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 13,
              }}
            >
              Tribüne Git
            </button>
          )}
        </div>
      )}
    </div>
  );
}

/* ───────── Modals ───────── */

function GuestModal({ onClose, onConfirm, teamName }: { onClose: () => void; onConfirm: () => void; teamName: string }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6" style={{ background: "rgba(20,16,10,0.55)" }}>
      <div
        className="bg-surface rounded-2xl w-full"
        style={{ maxWidth: 320, padding: 24 }}
      >
        <div className="flex justify-center" style={{ color: "var(--primary)" }}>
          <IconEye />
        </div>
        <h3
          className="mt-3 text-center font-display text-text-primary"
          style={{ fontWeight: 600, fontSize: 20, letterSpacing: "-0.005em" }}
        >
          Misafir olarak gir
        </h3>
        <p
          className="mt-2 text-center text-text-secondary"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: 14, lineHeight: "20px" }}
        >
          {teamName} tribününe sadece izleyici olarak girebilirsin. Yorum yazamaz, oylama yapamazsın.
        </p>
        <div className="mt-6 flex flex-col gap-2">
          <button
            type="button"
            onClick={onConfirm}
            className="w-full rounded-pill"
            style={{
              height: 48,
              background: "var(--primary)",
              color: "white",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 15,
            }}
          >
            Devam et
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full"
            style={{
              height: 40,
              background: "transparent",
              color: "var(--text-secondary)",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            İptal
          </button>
        </div>
      </div>
    </div>
  );
}

function JoinedSheet({ onClose, match }: { onClose: () => void; match: Match }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center" style={{ background: "rgba(20,16,10,0.55)" }} onClick={onClose}>
      <div
        className="w-full max-w-[393px] bg-surface rounded-t-3xl"
        style={{ padding: 20, paddingBottom: 32 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <span className="font-display" style={{ fontWeight: 600, fontSize: 16 }}>Tribüne giriliyor</span>
          <button type="button" onClick={onClose} className="size-8 flex items-center justify-center text-text-secondary"><IconClose /></button>
        </div>
        <div className="mt-4 flex items-center justify-center gap-3">
          <TeamLogo tone={match.home.tone} mono={match.home.mono} size={40} />
          <span className="font-display" style={{ fontWeight: 600, fontSize: 14 }}>vs</span>
          <TeamLogo tone={match.away.tone} mono={match.away.mono} size={40} />
        </div>
        <p className="mt-3 text-center" style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-secondary)" }}>
          Aslan Tribünü hazır. Maç boyunca yorum yapabilirsin.
        </p>
      </div>
    </div>
  );
}

/* ───────── Data ───────── */

const TEAM_GS: Team = { name: "Galatasaray", mono: "GS", tone: "linear-gradient(135deg,#A90432,#7C0319)" };
const TEAM_FB: Team = { name: "Fenerbahçe", mono: "FB", tone: "linear-gradient(135deg,#1B3D7A,#0E2453)" };
const TEAM_BJK: Team = { name: "Beşiktaş", mono: "BJK", tone: "linear-gradient(135deg,#1A1A1A,#3a3a3a)" };
const TEAM_TS: Team = { name: "Trabzonspor", mono: "TS", tone: "linear-gradient(135deg,#7A1F2F,#3F1118)" };
const TEAM_BS: Team = { name: "Başakşehir", mono: "İBFK", tone: "linear-gradient(135deg,#243B6B,#142046)" };
const TEAM_KS: Team = { name: "Kayserispor", mono: "KS", tone: "linear-gradient(135deg,#B89A2B,#7A6418)" };

const LIVE: Match[] = [
  {
    id: "l1",
    league: "Süper Lig",
    home: TEAM_GS,
    away: TEAM_TS,
    homeScore: 2,
    awayScore: 1,
    minute: "67'",
    isMyTeam: true,
    myTeamSide: "home",
  },
  {
    id: "l2",
    league: "Süper Lig",
    home: TEAM_FB,
    away: TEAM_BJK,
    homeScore: 0,
    awayScore: 0,
    minute: "23'",
  },
];

const TODAY: Match[] = [
  {
    id: "t1",
    league: "Türkiye Kupası",
    home: TEAM_GS,
    away: TEAM_KS,
    time: "20:00",
    stadium: "RAMS Park",
    isMyTeam: true,
    myTeamSide: "home",
  },
  {
    id: "t2",
    league: "Süper Lig",
    home: TEAM_BS,
    away: TEAM_BJK,
    time: "17:30",
    stadium: "Başakşehir Fatih Terim",
  },
];

const PAST: Match[] = [
  {
    id: "p1",
    league: "Süper Lig",
    home: TEAM_GS,
    away: TEAM_FB,
    homeScore: 3,
    awayScore: 1,
    date: "20 Nis 2026",
    isMyTeam: true,
    myTeamSide: "home",
    chatActive: true,
    events: [
      { minute: "12'", type: "goal", team: "home", player: "Icardi" },
      { minute: "34'", type: "yellow", team: "away", player: "Tadić" },
      { minute: "58'", type: "goal", team: "away", player: "Dzeko" },
      { minute: "71'", type: "goal", team: "home", player: "Mertens" },
      { minute: "84'", type: "goal", team: "home", player: "Sané" },
    ],
  },
  {
    id: "p2",
    league: "Süper Lig",
    home: TEAM_BJK,
    away: TEAM_GS,
    homeScore: 0,
    awayScore: 2,
    date: "13 Nis 2026",
    isMyTeam: true,
    myTeamSide: "away",
    events: [
      { minute: "22'", type: "goal", team: "away", player: "Mertens" },
      { minute: "67'", type: "red", team: "home", player: "Mustafi" },
      { minute: "78'", type: "goal", team: "away", player: "Icardi" },
    ],
  },
  {
    id: "p3",
    league: "Süper Lig",
    home: TEAM_TS,
    away: TEAM_FB,
    homeScore: 1,
    awayScore: 1,
    date: "8 Nis 2026",
    events: [],
  },
];

/* ───────── Screen ───────── */

const TABS = [
  { key: "home", label: "Ana Sayfa", Icon: IconHome },
  { key: "news", label: "Gündem", Icon: IconNews },
  { key: "match", label: "Maç", Icon: IconMatch },
  { key: "community", label: "Topluluk", Icon: IconCommunity },
  { key: "profile", label: "Profil", Icon: IconProfile },
] as const;

const SEGMENTS = ["CANLI", "BUGÜN", "GEÇMİŞ"] as const;
type Segment = (typeof SEGMENTS)[number];

function MatchScreen() {
  const [seg, setSeg] = useState<Segment>("CANLI");
  const [expanded, setExpanded] = useState<string | null>("p1");
  const [guest, setGuest] = useState<Match | null>(null);
  const [joined, setJoined] = useState<Match | null>(null);
  const [active] = useState<(typeof TABS)[number]["key"]>("match");

  const onGuest = (m: Match) => setGuest(m);
  const onJoin = (m: Match) => setJoined(m);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <div className="mx-auto w-full max-w-[393px] min-h-screen flex flex-col relative">
        {/* App bar */}
        <header
          className="sticky top-0 z-30 bg-bg-primary flex items-center justify-between px-4"
          style={{ height: 56 }}
        >
          <h1 className="font-display text-text-primary" style={{ fontWeight: 600, fontSize: 24, letterSpacing: "-0.01em" }}>
            Maç
          </h1>
          <button type="button" aria-label="Takvim" className="size-10 flex items-center justify-center text-text-primary">
            <IconCalendar />
          </button>
        </header>

        {/* Segmented control */}
        <div className="px-4 pt-2 pb-3 sticky top-14 z-20 bg-bg-primary">
          <div
            className="bg-surface rounded-pill border flex items-center"
            style={{ borderColor: "var(--border-tertiary)", padding: 4, height: 44 }}
          >
            {SEGMENTS.map((s) => {
              const isActive = seg === s;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSeg(s)}
                  className="flex-1 rounded-pill flex items-center justify-center gap-1.5 transition-all"
                  style={{
                    height: 36,
                    background: isActive ? "var(--primary)" : "transparent",
                    color: isActive ? "white" : "var(--text-secondary)",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    fontSize: 13,
                    letterSpacing: "0.04em",
                  }}
                >
                  {s === "CANLI" && <LiveDot size={6} />}
                  {s}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <main className="flex-1 pb-28 px-4 flex flex-col gap-4">
          {seg === "CANLI" && (
            <>
              <SectionHeader title="Şu an oynanıyor" />
              <div className="flex flex-col gap-3">
                {LIVE.map((m) => (
                  <LiveCard key={m.id} m={m} onJoin={() => onJoin(m)} onGuest={() => onGuest(m)} />
                ))}
              </div>
              <SectionHeader title="Bugün" />
              <div className="flex flex-col gap-3">
                {TODAY.map((m) => (
                  <TodayCard key={m.id} m={m} onJoin={() => onJoin(m)} onGuest={() => onGuest(m)} />
                ))}
              </div>
            </>
          )}

          {seg === "BUGÜN" && (
            <>
              <SectionHeader title="Bugünün maçları" />
              <div className="flex flex-col gap-3">
                {TODAY.map((m) => (
                  <TodayCard key={m.id} m={m} onJoin={() => onJoin(m)} onGuest={() => onGuest(m)} />
                ))}
              </div>
            </>
          )}

          {seg === "GEÇMİŞ" && (
            <>
              <SectionHeader title="Geçmiş" />
              <div className="flex flex-col gap-2">
                {PAST.map((m) => (
                  <PastRow
                    key={m.id}
                    m={m}
                    expanded={expanded === m.id}
                    onToggle={() => setExpanded(expanded === m.id ? null : m.id)}
                  />
                ))}
              </div>
            </>
          )}
        </main>

        {/* Bottom tab bar */}
        <nav
          className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[393px] bg-surface border-t flex items-stretch"
          style={{ height: 80, borderColor: "var(--border-tertiary)", paddingBottom: 12 }}
        >
          {TABS.map((t) => {
            const isActive = active === t.key;
            const Icon = t.Icon;
            return (
              <button
                key={t.key}
                type="button"
                className="flex-1 flex flex-col items-center justify-center gap-1 transition-colors"
                style={{ color: isActive ? "var(--primary)" : "var(--text-tertiary)" }}
              >
                <Icon filled={isActive} />
                <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 11, letterSpacing: "0.02em" }}>
                  {t.label}
                </span>
              </button>
            );
          })}
        </nav>

        {guest && (
          <GuestModal
            teamName={guest.home.name === MY_TEAM ? guest.away.name : guest.home.name + " – " + guest.away.name}
            onClose={() => setGuest(null)}
            onConfirm={() => setGuest(null)}
          />
        )}
        {joined && <JoinedSheet match={joined} onClose={() => setJoined(null)} />}
      </div>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="pt-2">
      <h2 className="font-display text-text-primary" style={{ fontWeight: 600, fontSize: 18, letterSpacing: "-0.005em" }}>
        {title}
      </h2>
    </div>
  );
}

function _unused(_: ReactNode) {}
