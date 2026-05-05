import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  component: MatchLiveScreen,
});

/* ───────── Icons ───────── */

function IconChevronLeft() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 6 L9 12 L15 18" />
    </svg>
  );
}
function IconCheck({ size = 8 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12 L10 17 L19 7" />
    </svg>
  );
}
function IconArrowUp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19 V5 M5 12 L12 5 L19 12" />
    </svg>
  );
}
function IconSmile() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14 C9.5 15.5 10.7 16 12 16 C13.3 16 14.5 15.5 15.5 14" />
      <circle cx="9" cy="10" r="0.6" fill="currentColor" />
      <circle cx="15" cy="10" r="0.6" fill="currentColor" />
    </svg>
  );
}

/* ───────── Status bar ───────── */

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-2 pb-1 text-white" style={{ height: 44 }}>
      <span className="text-[15px] font-semibold tracking-tight">21:47</span>
      <div className="flex items-center gap-1.5">
        {/* signal */}
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="0.5"/><rect x="4.5" y="5" width="3" height="6" rx="0.5"/><rect x="9" y="2.5" width="3" height="8.5" rx="0.5"/><rect x="13.5" y="0" width="3" height="11" rx="0.5"/></svg>
        <span className="text-[11px] font-semibold">5G</span>
        <svg width="26" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2.5" stroke="currentColor" opacity="0.5"/><rect x="2.5" y="2.5" width="17" height="7" rx="1.2" fill="currentColor"/><rect x="23" y="4" width="2" height="4" rx="1" fill="currentColor" opacity="0.5"/></svg>
      </div>
    </div>
  );
}

/* ───────── Team logo placeholders (gradient circles) ───────── */

function TeamLogo({ team, size = 40 }: { team: "GS" | "FB"; size?: number }) {
  const bg =
    team === "GS"
      ? "linear-gradient(135deg, #FDB912 0%, #A90432 100%)"
      : "linear-gradient(135deg, #FFE600 0%, #00296B 100%)";
  const initials = team === "GS" ? "GS" : "FB";
  return (
    <div
      className="flex items-center justify-center rounded-full font-display font-semibold text-white shadow-lg"
      style={{ width: size, height: size, background: bg, fontSize: size * 0.36, letterSpacing: "0.02em" }}
    >
      {initials}
    </div>
  );
}

/* ───────── Match header ───────── */

function MatchHeader({ scoreShake }: { scoreShake: boolean }) {
  return (
    <header
      className="sticky top-0 z-30 text-white"
      style={{
        background: "linear-gradient(180deg, #A90432 0%, #7C0319 100%)",
        borderBottom: "1px solid #FDB912",
      }}
    >
      <StatusBar />
      {/* Top row */}
      <div className="flex items-center justify-between px-4" style={{ height: 44 }}>
        <button className="text-white -ml-1 p-1" aria-label="Geri">
          <IconChevronLeft />
        </button>
        <div className="t-caption text-white/70" style={{ letterSpacing: "0.15em" }}>
          RAMS PARK
        </div>
        <div
          className="flex items-center gap-1.5 rounded-full px-2.5 py-1"
          style={{ background: "#FDB912", color: "#7C0319" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full" style={{ background: "#A90432", opacity: 0.7 }} />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: "#A90432" }} />
          </span>
          <span className="font-sans font-semibold text-[12px]" style={{ letterSpacing: "0.02em" }}>CANLI 67'</span>
        </div>
      </div>
      {/* Bottom row */}
      <div className="grid grid-cols-3 items-center px-4 pb-3" style={{ minHeight: 76 }}>
        <div className="flex items-center gap-2.5">
          <TeamLogo team="GS" />
          <div className="font-display font-semibold text-[16px] text-white leading-tight">Galatasaray</div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`font-display font-semibold text-[32px] leading-none ${scoreShake ? "animate-[shake_0.5s_ease-in-out]" : ""}`}
            style={{ color: "#FDB912" }}
          >
            2 - 1
          </div>
          <div className="t-tiny mt-1 text-white/70">67' İLK YARI BİTTİ</div>
        </div>
        <div className="flex items-center justify-end gap-2.5">
          <div className="font-display font-semibold text-[16px] text-white leading-tight text-right">Fenerbahçe</div>
          <TeamLogo team="FB" />
        </div>
      </div>
    </header>
  );
}

/* ───────── Tribün switcher ───────── */

function TribunSwitcher() {
  return (
    <div className="grid grid-cols-2 gap-2 px-4 py-2" style={{ background: "#7C0319" }}>
      {/* GS active */}
      <div className="rounded-xl p-3" style={{ background: "#FDB912" }}>
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-sm" style={{ background: "linear-gradient(135deg, #FDB912 0%, #A90432 100%)", border: "1px solid #7C0319" }} />
          <span className="font-display font-semibold text-[12px]" style={{ color: "#7C0319", letterSpacing: "0.08em" }}>
            GS TRİBÜNÜ
          </span>
        </div>
        <div className="mt-1 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3B6D11]" />
          <span className="t-caption" style={{ color: "#7C0319", opacity: 0.7 }}>12.4K aktif</span>
        </div>
      </div>
      {/* FB inactive */}
      <button className="rounded-xl p-3 text-left transition-colors hover:bg-white/15" style={{ background: "rgba(255,255,255,0.10)" }}>
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-sm" style={{ background: "linear-gradient(135deg, #FFE600 0%, #00296B 100%)" }} />
          <span className="font-display font-semibold text-[12px] text-white" style={{ letterSpacing: "0.08em" }}>
            FB TRİBÜNÜ
          </span>
        </div>
        <div className="mt-1 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3B6D11]" />
          <span className="t-caption text-white/70">8.7K aktif</span>
        </div>
      </button>
    </div>
  );
}

/* ───────── Tab bar ───────── */

function TabBar({ active, onChange }: { active: string; onChange: (t: string) => void }) {
  const tabs = ["Sohbet", "İstatistik", "Olay"];
  return (
    <div className="flex px-4" style={{ background: "#7C0319", height: 44, borderBottom: "1px solid rgba(253,185,18,0.15)" }}>
      {tabs.map((t) => {
        const isActive = active === t;
        return (
          <button
            key={t}
            onClick={() => onChange(t)}
            className="relative flex-1 font-display font-semibold text-[14px] transition-opacity"
            style={{ color: "white", opacity: isActive ? 1 : 0.6 }}
          >
            {t}
            {isActive && (
              <span
                className="absolute left-1/2 -translate-x-1/2 rounded-full"
                style={{ bottom: 0, width: 32, height: 3, background: "#FDB912" }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

/* ───────── Avatar ───────── */

function Avatar({ size = 32, badge }: { size?: number; badge?: "verified" | "red" | "yellow" }) {
  const badgeColor =
    badge === "verified" ? "#185FA5" : badge === "red" ? "#A32D2D" : badge === "yellow" ? "#FDB912" : null;
  return (
    <div className="relative shrink-0">
      <div
        className="rounded-full"
        style={{
          width: size,
          height: size,
          background: "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04))",
          border: "1px solid rgba(253,185,18,0.2)",
        }}
      />
      {badgeColor && (
        <span
          className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center rounded-full text-white"
          style={{ width: 14, height: 14, background: badgeColor, border: "2px solid #7C0319" }}
        >
          {badge === "verified" && <IconCheck size={8} />}
          {badge === "red" && <span className="font-display text-[8px] font-semibold leading-none">★</span>}
          {badge === "yellow" && <span className="font-display text-[8px] font-semibold leading-none" style={{ color: "#7C0319" }}>✦</span>}
        </span>
      )}
    </div>
  );
}

/* ───────── Status pill (SPOR YAZARI / EFSANE / FENOMEN) ───────── */

function RolePill({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="inline-block rounded-full px-1.5 py-0.5 font-sans font-semibold uppercase text-white"
      style={{ background: color, fontSize: 9, letterSpacing: "0.08em", lineHeight: 1.2 }}
    >
      {label}
    </span>
  );
}

/* ───────── Chat message ───────── */

type Role = "fan" | "yazar" | "efsane" | "fenomen";

interface ChatMsgProps {
  role: Role;
  username: string;
  text: string;
  time: string;
}

function ChatMessage({ role, username, text, time }: ChatMsgProps) {
  const isSpecial = role !== "fan";
  const bubbleBg = role === "fan" ? "#8B0526" : "#A5163C";
  const borderColor =
    role === "yazar" ? "#185FA5" : role === "efsane" ? "#A32D2D" : role === "fenomen" ? "#FDB912" : "transparent";
  const badgeKind: "verified" | "red" | "yellow" | undefined =
    role === "yazar" ? "verified" : role === "efsane" ? "red" : role === "fenomen" ? "yellow" : undefined;
  const rolePill =
    role === "yazar"
      ? { label: "SPOR YAZARI", color: "#185FA5" }
      : role === "efsane"
      ? { label: "EFSANE", color: "#A32D2D" }
      : role === "fenomen"
      ? { label: "FENOMEN", color: "#C99000" }
      : null;

  return (
    <div className="flex items-end gap-2 px-4 animate-[slideUp_0.3s_ease-out]">
      <Avatar badge={badgeKind} />
      <div
        className="relative max-w-[280px]"
        style={{
          background: bubbleBg,
          borderRadius: "16px 16px 16px 4px",
          padding: "10px 14px 8px",
          borderLeft: isSpecial ? `2px solid ${borderColor}` : undefined,
        }}
      >
        <div className="flex items-center gap-1.5">
          <span className="font-sans font-medium text-[12px]" style={{ color: "#FDB912" }}>
            {username}
          </span>
          {rolePill && <RolePill label={rolePill.label} color={rolePill.color} />}
        </div>
        <div className="mt-0.5 font-sans text-[14px] leading-[20px] text-white">{text}</div>
        <div className="mt-0.5 text-right font-sans text-[10px] text-white/50">{time}</div>
      </div>
    </div>
  );
}

/* ───────── Poll card ───────── */

function PollCard() {
  const [vote, setVote] = useState<number | null>(null);
  const options = [
    { label: "Evet, formda", pct: 64 },
    { label: "Hayır, Icardi devam etsin", pct: 36 },
  ];
  return (
    <div
      className="mx-4 my-1 rounded-2xl p-5 animate-[slideUp_0.3s_ease-out]"
      style={{ background: "#FDB912", color: "#7C0319" }}
    >
      <div className="font-display font-semibold text-[11px]" style={{ letterSpacing: "0.12em" }}>
        TRİBÜN SORUYOR
      </div>
      <div className="mt-2 font-display font-semibold text-[18px] leading-[24px]">
        Yarın Mertens ilk 11'de mi başlasın?
      </div>
      <div className="mt-4 space-y-2">
        {options.map((opt, i) => {
          const voted = vote !== null;
          const isMine = vote === i;
          return (
            <button
              key={opt.label}
              onClick={() => vote === null && setVote(i)}
              className="relative w-full overflow-hidden rounded-full bg-white text-left transition-transform active:scale-[0.99]"
              style={{ padding: "12px 16px" }}
            >
              {voted && (
                <span
                  className="absolute inset-y-0 left-0 transition-[width] duration-300 ease-out"
                  style={{
                    width: `${opt.pct}%`,
                    background: isMine ? "rgba(124,3,25,0.18)" : "rgba(124,3,25,0.08)",
                  }}
                />
              )}
              <span className="relative flex items-center justify-between">
                <span className="font-sans font-medium text-[14px]" style={{ color: "#7C0319" }}>
                  {opt.label}
                </span>
                {voted && (
                  <span className="font-display font-semibold text-[14px]" style={{ color: "#7C0319" }}>
                    {opt.pct}%
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>
      <div
        className="mt-3 font-sans text-[11px] italic"
        style={{ color: "#7C0319", opacity: 0.7 }}
      >
        Tribünün ne dediğini görmek için seçim yap
      </div>
    </div>
  );
}

/* ───────── Goal banner ───────── */

function GoalBanner() {
  return (
    <div
      className="mx-4 my-1 relative overflow-hidden rounded-2xl p-4 animate-[slideUp_0.3s_ease-out]"
      style={{ background: "linear-gradient(110deg, #FDB912 0%, #E8A100 45%, #A90432 100%)" }}
    >
      {/* sparks */}
      <div className="pointer-events-none absolute inset-0">
        {[
          [10, 30], [70, 18], [40, 70], [85, 60], [25, 80], [55, 35], [92, 25], [15, 55],
        ].map(([x, y], i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: i % 2 ? 3 : 2,
              height: i % 2 ? 3 : 2,
              opacity: 0.7,
              boxShadow: "0 0 6px rgba(255,255,255,0.9)",
            }}
          />
        ))}
      </div>
      <div className="relative font-display font-semibold text-[24px] leading-tight text-white" style={{ textShadow: "0 1px 2px rgba(124,3,25,0.5)" }}>
        GOOOL! <span style={{ color: "#FFF8E0" }}>Icardi 67'</span>
      </div>
      <div className="relative mt-1 font-sans text-[12px] text-white/90">
        Galatasaray 2 — 1 Fenerbahçe
      </div>
    </div>
  );
}

/* ───────── Input bar ───────── */

function InputBar() {
  return (
    <div
      className="sticky bottom-0 z-20 flex items-center gap-[9px] px-4 py-3"
      style={{ background: "linear-gradient(180deg, #F5E6CC 0%, #F0E0BD 100%)", height: 64, borderTop: "1px solid #D4C4A8" }}
    >
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full text-[#7C0319]"
        style={{ background: "rgba(255,255,255,0.7)", border: "1px solid #D4C4A8" }}
        aria-label="Emoji"
      >
        <IconSmile />
      </button>
      <input
        className="h-10 flex-1 rounded-full bg-white px-4 font-sans text-[14px] text-[#1A1A1A] placeholder:text-[#999] outline-none focus:ring-2 focus:ring-[#A32D2D]/30"
        placeholder="Tribünden seslen..."
      />
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full text-white shadow-md"
        style={{ background: "linear-gradient(135deg, #C73838 0%, #A32D2D 100%)" }}
        aria-label="Gönder"
      >
        <IconArrowUp />
      </button>
    </div>
  );
}

/* ───────── Screen ───────── */

function MatchLiveScreen() {
  const [activeTab, setActiveTab] = useState("Sohbet");
  const [scoreShake, setScoreShake] = useState(false);
  const feedRef = useRef<HTMLDivElement>(null);

  // brief shake when mounted (simulating goal celebration)
  useEffect(() => {
    const t = setTimeout(() => setScoreShake(true), 400);
    const t2 = setTimeout(() => setScoreShake(false), 1200);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="theme-gs-home min-h-screen w-full" style={{ background: "#7C0319" }}>
      {/* Phone frame container */}
      <div
        className="mx-auto flex flex-col"
        style={{
          width: 393,
          minHeight: 852,
          background: "#7C0319",
          color: "white",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
        }}
      >
        <MatchHeader scoreShake={scoreShake} />
        <TribunSwitcher />
        <TabBar active={activeTab} onChange={setActiveTab} />

        {/* Feed */}
        <div ref={feedRef} className="flex-1 space-y-3 py-4" style={{ background: "#7C0319" }}>
          <ChatMessage role="fan" username="emre_gs" text="Icardi bu maçta yine kralımız 👑" time="67'" />
          <ChatMessage
            role="yazar"
            username="Hıncal Uluç"
            text="Mertens'in pas yüzdesi %94. Bu adamın yaşına bakmayın, beyni hâlâ Napoli'de attığı goller gibi keskin."
            time="66'"
          />
          <ChatMessage role="fan" username="cimbom_1905" text="HAKEM NEYE BAKIYOR YA, FAUL APAÇIK!" time="65'" />
          <PollCard />
          <ChatMessage
            role="fenomen"
            username="ultrAslan_Cem"
            text="Tribün ayakta. Bu atmosfer ekrana sığmaz. Buradan selamlar 🟡🔴"
            time="64'"
          />
          <GoalBanner />
          <ChatMessage
            role="efsane"
            username="Hagi"
            text="Bu takım kalbiyle oynuyor. Devre arasında baskıyı sürdürmeleri lazım, Fener kenarda toparlanır."
            time="63'"
          />
          <ChatMessage role="fan" username="aslan_yürekli" text="Mauro nereye atarsa atsın gol oluyor be 🔥" time="62'" />
          <ChatMessage
            role="yazar"
            username="Uğur Meleke"
            text="Galatasaray'ın ikinci yarıdaki press temposu, 30 yıllık derbi tarihinde gördüğüm en agresif on dakikalardan biri."
            time="61'"
          />
          <ChatMessage role="fan" username="kerimm" text="Hadi bir gol daha, bitirelim bu işi! 🦁" time="60'" />
          <div className="h-2" />
        </div>

        <InputBar />
      </div>

      {/* Local keyframes */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0) scale(1); }
          20% { transform: translateX(-3px) scale(1.05); }
          40% { transform: translateX(3px) scale(1.05); }
          60% { transform: translateX(-2px) scale(1.04); }
          80% { transform: translateX(2px) scale(1.02); }
        }
      `}</style>
    </div>
  );
}
