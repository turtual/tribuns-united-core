import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: CommunityScreen,
});

/* ───────── Icons ───────── */

function IconPlus({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M12 5 V19 M5 12 H19" />
    </svg>
  );
}
function IconCheck({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12 L10 17 L19 7" />
    </svg>
  );
}
function IconShare() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 V15 M7 8 L12 3 L17 8" />
      <path d="M5 14 V19 C5 20 5.5 20.5 6.5 20.5 H17.5 C18.5 20.5 19 20 19 19 V14" />
    </svg>
  );
}

/* ───────── Status bar ───────── */

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-2 pb-1 text-text-primary" style={{ height: 44 }}>
      <span className="text-[15px] font-semibold tracking-tight">21:47</span>
      <div className="flex items-center gap-1.5">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="0.5"/><rect x="4.5" y="5" width="3" height="6" rx="0.5"/><rect x="9" y="2.5" width="3" height="8.5" rx="0.5"/><rect x="13.5" y="0" width="3" height="11" rx="0.5"/></svg>
        <span className="text-[11px] font-semibold">5G</span>
        <svg width="26" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2.5" stroke="currentColor" opacity="0.5"/><rect x="2.5" y="2.5" width="17" height="7" rx="1.2" fill="currentColor"/><rect x="23" y="4" width="2" height="4" rx="1" fill="currentColor" opacity="0.5"/></svg>
      </div>
    </div>
  );
}

/* ───────── Avatar ───────── */

function Avatar({ size = 24 }: { size?: number }) {
  return (
    <div
      className="shrink-0 rounded-full"
      style={{
        width: size,
        height: size,
        background: "linear-gradient(135deg, #E0D5BC, #C9B998)",
        border: "1px solid var(--color-border)",
      }}
    />
  );
}

/* ───────── Pills ───────── */

function StatusPill({ kind }: { kind: "fenomen" | "yazar" | "efsane" | "kongre" }) {
  const map = {
    fenomen: { label: "FENOMEN", bg: "#FFB700", color: "#1A1A1A" },
    yazar: { label: "SPOR YAZARI", bg: "#185FA5", color: "#ffffff" },
    efsane: { label: "EFSANE", bg: "#A32D2D", color: "#ffffff" },
    kongre: { label: "KONGRE", bg: "#6B2D8F", color: "#ffffff" },
  }[kind];
  return (
    <span
      className="inline-block rounded-full px-1.5 py-0.5 font-sans font-semibold uppercase"
      style={{ background: map.bg, color: map.color, fontSize: 9, letterSpacing: "0.08em", lineHeight: 1.2 }}
    >
      {map.label}
    </span>
  );
}

function StatePill({ kind }: { kind: "open" | "featured" | "won" | "closed" }) {
  const map = {
    open: { label: "AÇIK", bg: "var(--color-success-bg)", color: "var(--color-success)" },
    featured: { label: "ÖNE ÇIKTI", bg: "#FFB700", color: "#1A1A1A" },
    won: { label: "BAŞARILI", bg: "var(--color-success-bg)", color: "var(--color-success)" },
    closed: { label: "KAPANDI", bg: "#E8DBC4", color: "#666" },
  }[kind];
  return (
    <span
      className="inline-flex items-center rounded-full px-2 py-1 font-sans font-semibold uppercase"
      style={{ background: map.bg, color: map.color, fontSize: 10, letterSpacing: "0.08em", lineHeight: 1 }}
    >
      {map.label}
    </span>
  );
}

/* ───────── Hero card ───────── */

function HeroCard() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl p-5 text-white"
      style={{ background: "linear-gradient(135deg, #A32D2D 0%, #7C0319 100%)", minHeight: 120 }}
    >
      {/* subtle decoration */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-6 font-display font-semibold opacity-10"
        style={{ fontSize: 120, color: "#FFB700", lineHeight: 1 }}
      >
        #
      </span>
      <div className="relative">
        <div className="font-display font-semibold text-[20px] leading-tight">Tribünün Sesi Ol</div>
        <p className="mt-2 max-w-[260px] font-sans text-[13px] leading-[18px] text-white/80">
          Sözünü ettiğin hashtag'i tribün ne kadar destekliyor? Oyla, gündeme taşı.
        </p>
        <button
          className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-sans font-medium text-[14px] transition-transform active:scale-95"
          style={{ color: "#A32D2D" }}
        >
          <IconPlus size={14} />
          Hashtag aç
        </button>
      </div>
    </div>
  );
}

/* ───────── Hashtag card ───────── */

interface HashtagCardProps {
  proposer: { name: string; role: "fenomen" | "yazar" | "efsane" | "kongre" };
  tag: string;
  description: string;
  votes: number;
  goal: number;
  daysLeft: number;
  state: "open" | "featured";
  initiallySupported?: boolean;
}

function HashtagCard({ proposer, tag, description, votes, goal, daysLeft, state, initiallySupported }: HashtagCardProps) {
  const [supported, setSupported] = useState(!!initiallySupported);
  const total = supported && !initiallySupported ? votes + 1 : votes;
  const pct = Math.min(100, Math.round((total / goal) * 100));
  const isFeatured = state === "featured";

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-surface p-5"
      style={{
        border: isFeatured ? "2px solid #FFB700" : "1px solid var(--color-border-tertiary)",
        boxShadow: isFeatured ? "0 8px 24px -12px rgba(255,183,0,0.4)" : "0 1px 2px rgba(0,0,0,0.03)",
      }}
    >
      {isFeatured && (
        <>
          {/* Corner ribbon */}
          <span
            aria-hidden
            className="absolute -left-px -top-px h-12 w-12"
            style={{
              background: "linear-gradient(135deg, #FFB700 0%, #FFB700 50%, transparent 50%)",
            }}
          />
          <span
            className="absolute left-1 top-1 font-display font-semibold uppercase"
            style={{ fontSize: 9, color: "#1A1A1A", letterSpacing: "0.1em", transform: "rotate(-45deg) translate(-4px, 6px)", transformOrigin: "left top" }}
          >
            ★
          </span>
        </>
      )}

      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <Avatar />
          <span className="truncate font-sans font-medium text-[13px] text-text-primary">{proposer.name}</span>
          <StatusPill kind={proposer.role} />
        </div>
        <StatePill kind={state} />
      </div>

      {/* Hashtag */}
      <div className="mt-3 font-display font-semibold leading-[1.05] break-words" style={{ fontSize: 28, color: "#A32D2D" }}>
        {tag}
      </div>

      {/* Description */}
      <p className="mt-2 font-sans text-[14px] leading-[20px] text-text-secondary">{description}</p>

      {/* Progress bar */}
      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full" style={{ background: "var(--color-bg-secondary)" }}>
        <div
          className="h-full rounded-full transition-[width] duration-500 ease-out"
          style={{
            width: `${pct}%`,
            background: isFeatured
              ? "linear-gradient(90deg, #A32D2D 0%, #FFB700 100%)"
              : "#A32D2D",
          }}
        />
      </div>

      {/* Stats */}
      <div className="mt-2 flex items-center justify-between">
        <span className="font-sans font-medium text-[12px] text-text-primary">
          {total.toLocaleString("tr-TR")} <span className="text-text-tertiary">/ {goal.toLocaleString("tr-TR")} oy</span>
        </span>
        <span className="font-sans text-[12px] text-text-secondary">{daysLeft} gün kaldı</span>
      </div>

      {/* Actions */}
      <div className="mt-4 flex items-stretch gap-2">
        <button
          onClick={() => setSupported((s) => !s)}
          className="flex-1 rounded-full font-sans font-medium text-[14px] transition-all active:scale-[0.98] inline-flex items-center justify-center gap-1.5"
          style={{
            height: 44,
            background: supported ? "var(--color-success-bg)" : "#A32D2D",
            color: supported ? "var(--color-success)" : "white",
            border: supported ? "1px solid color-mix(in oklab, var(--color-success) 25%, transparent)" : "none",
          }}
        >
          {supported ? (
            <>
              <IconCheck size={14} /> Destekledin
            </>
          ) : (
            "Destekliyorum"
          )}
        </button>
        <button
          aria-label="Paylaş"
          className="flex items-center justify-center rounded-xl bg-surface text-text-primary transition-colors hover:bg-bg-secondary"
          style={{ width: 44, height: 44, border: "1px solid var(--color-border)" }}
        >
          <IconShare />
        </button>
      </div>
    </div>
  );
}

/* ───────── Tab strip ───────── */

function TabStrip({ active, onChange }: { active: string; onChange: (v: string) => void }) {
  const tabs = ["Açık Oylamalar", "Geçmiş", "Benim"];
  return (
    <div className="flex items-center gap-5 px-4" style={{ height: 44, borderBottom: "1px solid var(--color-border-tertiary)" }}>
      {tabs.map((t) => {
        const isActive = active === t;
        return (
          <button
            key={t}
            onClick={() => onChange(t)}
            className="relative h-full font-sans text-[14px] transition-colors"
            style={{
              color: isActive ? "var(--color-text-primary)" : "var(--color-text-tertiary)",
              fontWeight: isActive ? 500 : 400,
            }}
          >
            {t}
            {isActive && (
              <span
                className="absolute left-0 right-0 mx-auto rounded-full"
                style={{ bottom: -1, height: 2, background: "#A32D2D" }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

/* ───────── Bottom CTA banner ───────── */

function PromoBanner() {
  return (
    <div
      className="flex items-center justify-between gap-3 px-4"
      style={{
        height: 60,
        background: "#F0E4D0",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="min-w-0">
        <div className="font-sans font-medium text-[13px] leading-tight text-text-primary truncate">
          Sıradaki gündemini sen oluştur
        </div>
        <div className="font-sans text-[11px] text-text-secondary">Anında oylamaya açılır</div>
      </div>
      <button
        className="shrink-0 rounded-full font-sans font-medium text-[13px] transition-transform active:scale-95"
        style={{
          height: 36,
          padding: "0 14px",
          background: "#FFB700",
          color: "#1A1A1A",
          boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
        }}
      >
        199 TL'ye Aç
      </button>
    </div>
  );
}

/* ───────── Bottom tab bar (line icons) ───────── */

function BottomTabBar() {
  const tabs = [
    { key: "home", label: "Ana Sayfa", path: "M4 11 L12 4 L20 11 V20 H14 V14 H10 V20 H4 Z" },
    { key: "news", label: "Gündem", path: "M5 5 H19 V19 H5 Z M8 9 H16 M8 13 H16 M8 17 H13" },
    { key: "match", label: "Maç", path: "M12 4 V20 M4 12 H20 M6 6 L18 18 M18 6 L6 18", circle: true },
    { key: "community", label: "Topluluk", path: "M12 7 V19 M5 11 H19", active: true, hash: true },
    { key: "profile", label: "Profil", path: "M12 12 m-4 0 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M4 21 C5 17 8.5 15.5 12 15.5 C15.5 15.5 19 17 20 21" },
  ];
  return (
    <nav
      className="grid grid-cols-5"
      style={{ height: 80, background: "white", borderTop: "1px solid var(--color-border-tertiary)" }}
    >
      {tabs.map((t) => (
        <button key={t.key} className="flex flex-col items-center justify-center gap-1 pt-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={t.active ? "#A32D2D" : "#999"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {t.hash ? (
              <>
                <path d="M9 4 L7 20 M17 4 L15 20 M4 9 H20 M4 15 H20" />
              </>
            ) : t.circle ? (
              <circle cx="12" cy="12" r="8" />
            ) : (
              <path d={t.path} />
            )}
          </svg>
          <span
            className="font-sans text-[11px]"
            style={{ color: t.active ? "#A32D2D" : "#999", fontWeight: t.active ? 500 : 400 }}
          >
            {t.label}
          </span>
        </button>
      ))}
    </nav>
  );
}

/* ───────── Screen ───────── */

function CommunityScreen() {
  const [tab, setTab] = useState("Açık Oylamalar");

  return (
    <div className="min-h-screen w-full" style={{ background: "var(--color-bg-primary)" }}>
      <div
        className="mx-auto flex flex-col"
        style={{
          width: 393,
          minHeight: 852,
          background: "var(--color-bg-primary)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.15)",
        }}
      >
        <StatusBar />

        {/* App bar */}
        <header
          className="sticky top-0 z-30 flex items-center justify-between px-4"
          style={{ height: 56, background: "var(--color-bg-primary)", borderBottom: "1px solid var(--color-border-tertiary)" }}
        >
          <h1 className="font-display font-semibold text-[24px] text-text-primary">Topluluk</h1>
          <button
            className="flex items-center justify-center rounded-full bg-surface text-text-primary transition-transform active:scale-95"
            style={{ width: 36, height: 36, border: "1px solid var(--color-border)" }}
            aria-label="Hashtag aç"
          >
            <IconPlus />
          </button>
        </header>

        {/* Hero + tabs + cards */}
        <div className="flex-1">
          <div className="px-4 pt-4">
            <HeroCard />
          </div>

          <div className="mt-4">
            <TabStrip active={tab} onChange={setTab} />
          </div>

          <div className="space-y-3 px-4 py-4">
            <HashtagCard
              proposer={{ name: "Mert K.", role: "fenomen" }}
              tag="#icardiKalsın"
              description="Mauro Icardi'nin sözleşmesi yenilensin. Tribün onun kalmasını istiyor."
              votes={12847}
              goal={20000}
              daysLeft={3}
              state="featured"
            />
            <HashtagCard
              proposer={{ name: "Hıncal Uluç", role: "yazar" }}
              tag="#derbiyeHazırız"
              description="Cumartesi günü tüm tribün stadda. Saat 19:00 Türk Telekom'a yürüyüş."
              votes={8420}
              goal={15000}
              daysLeft={2}
              state="open"
              initiallySupported
            />
            <HashtagCard
              proposer={{ name: "Hagi", role: "efsane" }}
              tag="#altyapıyaYatırım"
              description="Florya tesislerinin yenilenmesi ve U19 takımına yeni teknik direktör."
              votes={5210}
              goal={10000}
              daysLeft={5}
              state="open"
            />
            <HashtagCard
              proposer={{ name: "Burak Y.", role: "kongre" }}
              tag="#şeffafFinans"
              description="Yönetim kurulu üç ayda bir detaylı mali rapor yayınlasın."
              votes={3895}
              goal={12000}
              daysLeft={6}
              state="open"
            />
            <HashtagCard
              proposer={{ name: "ultrAslan_Cem", role: "fenomen" }}
              tag="#tribünIndirim"
              description="Genç taraftar için kombine bilet fiyatları yüzde 40 düşürülsün."
              votes={1847}
              goal={8000}
              daysLeft={9}
              state="open"
            />
            <div className="h-2" />
          </div>
        </div>

        <PromoBanner />
        <BottomTabBar />
      </div>
    </div>
  );
}
