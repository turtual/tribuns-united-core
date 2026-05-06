import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, ChevronRight } from "lucide-react";
import { useState } from "react";
import { PhoneFrame } from "@/components/tribun/Layout";
import { MatchCard } from "@/components/tribun/MatchCard";

export const Route = createFileRoute("/mac")({
  head: () => ({ meta: [{ title: "TRİBÜN — Maç" }] }),
  component: MacScreen,
});

interface Match {
  id: string;
  home: { code: string; name: string; bg: string };
  away: { code: string; name: string; bg: string };
  homeScore?: number;
  awayScore?: number;
  time: string;
  league: string;
  isMine?: boolean;
  myTeamSide?: "home" | "away";
  state: "live" | "today" | "past";
}

const MATCHES: Match[] = [
  { id: "m1", state: "live", home: { code: "GS", name: "Galatasaray", bg: "linear-gradient(135deg,#FDB912,#A90432)" }, away: { code: "FB", name: "Fenerbahçe", bg: "linear-gradient(135deg,#FFE600,#00296B)" }, homeScore: 2, awayScore: 1, time: "67'", league: "Süper Lig", isMine: true, myTeamSide: "home" },
  { id: "m2", state: "today", home: { code: "BJK", name: "Beşiktaş", bg: "linear-gradient(135deg,#FFFFFF,#1A1A1A)" }, away: { code: "TS", name: "Trabzonspor", bg: "linear-gradient(135deg,#8B0000,#003F87)" }, time: "21:00", league: "Süper Lig" },
  { id: "m3", state: "past", home: { code: "GS", name: "Galatasaray", bg: "linear-gradient(135deg,#FDB912,#A90432)" }, away: { code: "BJK", name: "Beşiktaş", bg: "linear-gradient(135deg,#FFFFFF,#1A1A1A)" }, homeScore: 3, awayScore: 0, time: "Pazar", league: "Süper Lig", isMine: true, myTeamSide: "home" },
];

function MacScreen() {
  const [seg, setSeg] = useState<"live" | "today" | "past">("live");
  const list = MATCHES.filter((m) => m.state === seg);

  return (
    <PhoneFrame>
      <header
        className="sticky top-0 z-30 flex items-center justify-between px-4"
        style={{ height: 56, background: "var(--color-bg-primary)", borderBottom: "1px solid var(--color-border-tertiary)" }}
      >
        <h1 className="font-display font-semibold text-[24px]">Maç</h1>
        <Calendar size={22} />
      </header>

      {/* Segmented control */}
      <div className="flex gap-1 px-4 py-3">
        {[
          { k: "live", label: "CANLI", live: true },
          { k: "today", label: "BUGÜN" },
          { k: "past", label: "GEÇMİŞ" },
        ].map((s) => {
          const a = seg === s.k;
          return (
            <button
              key={s.k}
              onClick={() => setSeg(s.k as "live" | "today" | "past")}
              className="flex-1 rounded-full py-2 font-sans font-medium text-[12px] transition-colors"
              style={{
                background: a ? "#A32D2D" : "white",
                color: a ? "white" : "var(--color-text-secondary)",
                border: a ? "none" : "1px solid var(--color-border-tertiary)",
                letterSpacing: "0.06em",
              }}
            >
              {s.live && <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full" style={{ background: a ? "white" : "#A32D2D" }} />}
              {s.label}
            </button>
          );
        })}
      </div>

      <main className="flex-1 space-y-3 px-4 pb-4">
        {list.length === 0 && (
          <div className="rounded-2xl bg-surface px-4 py-12 text-center text-text-secondary" style={{ border: "1px solid var(--color-border-tertiary)" }}>
            Şu an bu kategoride maç yok.
          </div>
        )}
        {list.map((m) => {
          if (m.state === "past") {
            return (
              <div
                key={m.id}
                className="rounded-2xl bg-surface p-4"
                style={{ border: m.isMine ? "2px solid #A32D2D" : "1px solid var(--color-border-tertiary)" }}
              >
                <div className="t-tiny text-text-tertiary">{m.league}</div>
                <div className="mt-2 grid grid-cols-3 items-center">
                  <TeamCell team={m.home} score={m.homeScore} />
                  <div className="text-center font-display font-semibold text-[18px]">{m.time}</div>
                  <TeamCell team={m.away} score={m.awayScore} align="end" />
                </div>
                <button className="mt-3 flex h-11 w-full items-center justify-center rounded-full bg-bg-secondary font-sans font-medium text-[14px] text-text-primary">
                  Maç Özeti
                </button>
              </div>
            );
          }
          const leagueBg =
            m.state === "live"
              ? "radial-gradient(ellipse at center, rgba(253,185,18,0.35), rgba(124,3,25,0.95) 70%), #2a0610"
              : "radial-gradient(ellipse at center, rgba(216,255,60,0.25), rgba(0,0,0,0.95) 70%), #0a0a0a";
          return (
            <div key={m.id} className="space-y-2">
              <MatchCard
                state={m.state === "live" ? "live" : "upcoming"}
                to={m.isMine && m.state === "live" ? "/mac/canli" : undefined}
                league={{ name: m.league.toUpperCase(), bg: leagueBg }}
                home={m.home}
                away={m.away}
                homeScore={m.homeScore}
                awayScore={m.awayScore}
                time={m.time}
                venue={m.state === "live" ? "RAMS PARK" : undefined}
              />
              {m.isMine && m.state === "live" && (
                <Link to="/mac/canli" className="flex h-11 items-center justify-center gap-1 rounded-full font-sans font-medium text-[14px] text-white" style={{ background: "#A32D2D" }}>
                  Tribüne Gir <ChevronRight size={14} />
                </Link>
              )}
              {m.state === "today" && !m.isMine && (
                <button className="flex h-11 w-full items-center justify-center rounded-full font-sans font-medium text-[14px]" style={{ border: "1px solid var(--color-border)", color: "var(--color-text-secondary)" }}>
                  Misafir olarak izle
                </button>
              )}
            </div>
          );
        })}
      </main>
    </PhoneFrame>
  );
}

function TeamCell({ team, score, align = "start" }: { team: Match["home"]; score?: number; align?: "start" | "end" }) {
  return (
    <div className={`flex items-center gap-2 ${align === "end" ? "justify-end" : ""}`}>
      {align === "end" && score !== undefined && <span className="font-display font-semibold text-[20px]">{score}</span>}
      <div className="flex h-10 w-10 items-center justify-center rounded-full font-display font-semibold text-[12px] text-white" style={{ background: team.bg }}>{team.code}</div>
      {align === "start" && (
        <>
          <span className="font-display font-semibold text-[14px] truncate">{team.name}</span>
          {score !== undefined && <span className="ml-auto font-display font-semibold text-[20px]">{score}</span>}
        </>
      )}
    </div>
  );
}
