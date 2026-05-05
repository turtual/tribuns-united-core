import { createFileRoute } from "@tanstack/react-router";
import {
  Settings,
  Bell,
  MessageCircle,
  Trophy,
  Shirt,
  ChevronRight,
  CalendarCheck,
  ClipboardList,
  Plus,
  Palette,
  Crown,
  HelpCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: ProfileScreen,
});

/* ───────── Status bar ───────── */

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-2 pb-1 text-white" style={{ height: 44 }}>
      <span className="text-[15px] font-semibold tracking-tight">21:47</span>
      <div className="flex items-center gap-1.5">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="0.5"/><rect x="4.5" y="5" width="3" height="6" rx="0.5"/><rect x="9" y="2.5" width="3" height="8.5" rx="0.5"/><rect x="13.5" y="0" width="3" height="11" rx="0.5"/></svg>
        <span className="text-[11px] font-semibold">5G</span>
        <svg width="26" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2.5" stroke="currentColor" opacity="0.5"/><rect x="2.5" y="2.5" width="17" height="7" rx="1.2" fill="currentColor"/><rect x="23" y="4" width="2" height="4" rx="1" fill="currentColor" opacity="0.5"/></svg>
      </div>
    </div>
  );
}

/* ───────── Team logo / Avatar placeholders ───────── */

function TeamLogo({ team, size = 24 }: { team: "GS" | "FB" | "BJK" | "TS"; size?: number }) {
  const map = {
    GS: "linear-gradient(135deg, #FDB912 0%, #A90432 100%)",
    FB: "linear-gradient(135deg, #FFE600 0%, #00296B 100%)",
    BJK: "linear-gradient(135deg, #FFFFFF 0%, #1A1A1A 100%)",
    TS: "linear-gradient(135deg, #8B0000 0%, #003F87 100%)",
  };
  const initials = team;
  return (
    <div
      className="flex items-center justify-center rounded-full font-display font-semibold text-white"
      style={{
        width: size,
        height: size,
        background: map[team],
        fontSize: size * 0.36,
        letterSpacing: "0.02em",
      }}
    >
      {initials}
    </div>
  );
}

function FriendAvatar({ size = 60, teamColor }: { size?: number; teamColor: string }) {
  return (
    <div
      className="rounded-full"
      style={{
        width: size,
        height: size,
        background: "linear-gradient(135deg, #E0D5BC, #C9B998)",
        border: `2px solid ${teamColor}`,
      }}
    />
  );
}

/* ───────── Hero ───────── */

function Hero() {
  return (
    <header
      className="relative px-6 pb-8 pt-2 text-center"
      style={{
        background: "linear-gradient(180deg, #A90432 0%, #7C0319 35%, rgba(250,238,218,0) 100%)",
      }}
    >
      <StatusBar />

      {/* Top bar */}
      <div className="-mx-2 mb-4 flex items-center justify-between">
        <div className="w-9" />
        <h1 className="font-display font-semibold text-[20px] text-white">Profil</h1>
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
          aria-label="Ayarlar"
        >
          <Settings size={22} />
        </button>
      </div>

      {/* Avatar */}
      <div className="mx-auto" style={{ width: 96, height: 96 }}>
        <div
          className="h-full w-full rounded-full"
          style={{
            background: "linear-gradient(135deg, #E0D5BC, #C9B998)",
            border: "4px solid white",
            boxShadow: "0 8px 24px -8px rgba(0,0,0,0.35)",
          }}
        />
      </div>

      {/* Name */}
      <div className="mt-3 font-display font-semibold text-[24px] leading-tight text-white">
        Ali Salihoğlu
      </div>
      <div className="mt-0.5 font-sans text-[14px] text-white/80">@alisa</div>

      {/* Status */}
      <div className="mt-2 flex justify-center">
        <span
          className="inline-block rounded-full px-2.5 py-1 font-sans font-semibold uppercase"
          style={{ background: "#FFB700", color: "#1A1A1A", fontSize: 10, letterSpacing: "0.08em", lineHeight: 1 }}
        >
          FENOMEN
        </span>
      </div>

      {/* Team affiliation */}
      <div className="mt-3 inline-flex items-center gap-1.5 text-white/90">
        <TeamLogo team="GS" size={20} />
        <span className="font-sans text-[12px]">Galatasaray</span>
        <span className="font-sans text-[12px] opacity-60">·</span>
        <span className="font-sans text-[12px]">12 yıllık taraftar</span>
      </div>
    </header>
  );
}

/* ───────── Score card ───────── */

function ScoreCard() {
  const stats = [
    { icon: <CalendarCheck size={18} />, value: "23/30", label: "Maç günü" },
    { icon: <MessageCircle size={18} />, value: "142", label: "Yorum" },
    { icon: <ClipboardList size={18} />, value: "89", label: "Anket" },
  ];
  return (
    <section
      className="rounded-2xl bg-surface p-6"
      style={{ border: "1px solid var(--color-border-tertiary)", boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}
    >
      <div className="font-display font-semibold text-[11px] text-text-secondary" style={{ letterSpacing: "0.12em" }}>
        AKTİF TARAFTAR SKORU
      </div>

      <div className="mt-2 flex items-baseline gap-1">
        <span className="font-display font-semibold leading-none" style={{ fontSize: 64, color: "#A32D2D" }}>
          87
        </span>
        <span className="font-display font-semibold text-[24px] text-text-tertiary">/100</span>
      </div>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full" style={{ background: "var(--color-bg-secondary)" }}>
        <div
          className="h-full rounded-full transition-[width] duration-700 ease-out"
          style={{ width: "87%", background: "linear-gradient(90deg, #A32D2D, #C73838)" }}
        />
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl px-3 py-2.5" style={{ background: "var(--color-bg-secondary)" }}>
            <div className="text-text-secondary">{s.icon}</div>
            <div className="mt-1 font-display font-semibold text-[16px] text-text-primary leading-tight">
              {s.value}
            </div>
            <div className="font-sans text-[11px] text-text-secondary">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────── Forma reward ───────── */

function FormaCard() {
  return (
    <section
      className="relative overflow-hidden rounded-2xl p-5"
      style={{
        background: "linear-gradient(135deg, #FFB700 0%, #FFA500 100%)",
        boxShadow: "0 12px 30px -12px rgba(255,165,0,0.55)",
      }}
    >
      {/* decorative shine */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.45) 0%, transparent 70%)" }}
      />

      <div className="relative flex items-center gap-4">
        <div
          className="flex shrink-0 items-center justify-center rounded-2xl"
          style={{ width: 88, height: 88, background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.4)" }}
        >
          <Shirt size={56} strokeWidth={1.4} color="#1A1A1A" />
        </div>

        <div className="min-w-0 flex-1 text-[#1A1A1A]">
          <div className="font-display font-semibold text-[11px]" style={{ letterSpacing: "0.12em" }}>
            AYIN FORMASI
          </div>
          <div className="mt-1 font-display font-semibold text-[22px] leading-tight">13 puan kaldı</div>
          <div className="mt-1 font-sans text-[12px] leading-[16px] opacity-80">
            Bu ayın forması: GS 25-26 sezon dış saha
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full" style={{ background: "rgba(26,26,26,0.18)" }}>
            <div className="h-full rounded-full bg-white transition-[width] duration-700 ease-out" style={{ width: "87%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Section header ───────── */

function SectionHeader({ title, count }: { title: string; count?: number }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h2 className="font-display font-semibold text-[18px] text-text-primary">
        {title}
        {count !== undefined && <span className="text-text-tertiary"> ({count})</span>}
      </h2>
      <button className="inline-flex items-center gap-0.5 font-sans text-[13px] text-text-secondary hover:text-text-primary">
        Tümü <ChevronRight size={16} />
      </button>
    </div>
  );
}

/* ───────── Friends ───────── */

function FriendsRow() {
  const friends = [
    { name: "Mert", color: "#A90432" },
    { name: "Selin", color: "#FFE600" },
    { name: "Burak", color: "#1A1A1A" },
    { name: "Ayşe", color: "#A90432" },
    { name: "Cem", color: "#003F87" },
    { name: "Defne", color: "#A90432" },
    { name: "Eren", color: "#FFE600" },
  ];
  return (
    <section>
      <SectionHeader title="Arkadaşlar" count={24} />
      <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-4 pb-1">
          {/* Invite tile */}
          <button className="flex w-16 shrink-0 flex-col items-center gap-1.5">
            <div
              className="flex items-center justify-center rounded-full text-text-secondary"
              style={{ width: 60, height: 60, border: "2px dashed var(--color-border)", background: "transparent" }}
            >
              <Plus size={22} />
            </div>
            <span className="font-sans text-[12px] text-text-secondary">Davet Et</span>
          </button>
          {friends.map((f) => (
            <div key={f.name} className="flex w-16 shrink-0 flex-col items-center gap-1.5">
              <FriendAvatar teamColor={f.color} />
              <span className="font-sans text-[12px] text-text-primary">{f.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Activity ───────── */

function ActivityList() {
  const items = [
    { Icon: Bell, text: "Mert K. seni tribüne çağırdı", time: "2s" },
    { Icon: MessageCircle, text: "Hıncal Uluç yorumunu beğendi", time: "1sa" },
    { Icon: Trophy, text: "#icardiKalsın hashtag'i hedefe ulaştı", time: "3sa" },
    { Icon: Shirt, text: "Eylül forma ödülünü kazandın", time: "Dün" },
    { Icon: Bell, text: "Galatasaray - Fenerbahçe maçı başlıyor", time: "2g" },
  ];
  return (
    <section>
      <SectionHeader title="Etkinlik" />
      <div
        className="overflow-hidden rounded-2xl bg-surface"
        style={{ border: "1px solid var(--color-border-tertiary)" }}
      >
        {items.map((it, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-4 py-3"
            style={{ borderTop: i === 0 ? "none" : "1px solid var(--color-border-tertiary)" }}
          >
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-text-primary"
              style={{ background: "var(--color-bg-secondary)" }}
            >
              <it.Icon size={18} />
            </div>
            <span className="flex-1 font-sans text-[14px] text-text-primary">{it.text}</span>
            <span className="font-sans text-[12px] text-text-tertiary">{it.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────── Settings shortcut grid ───────── */

function SettingsGrid() {
  const items = [
    { Icon: Bell, label: "Bildirimler" },
    { Icon: Palette, label: "Tema" },
    { Icon: Crown, label: "Premium" },
    { Icon: HelpCircle, label: "Yardım" },
  ];
  return (
    <section>
      <SectionHeader title="Ayarlar" />
      <div className="grid grid-cols-2 gap-3">
        {items.map((it) => (
          <button
            key={it.label}
            className="flex items-center gap-3 rounded-xl bg-surface p-4 text-left transition-colors hover:bg-bg-secondary"
            style={{ border: "1px solid var(--color-border-tertiary)" }}
          >
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full"
              style={{ background: "var(--color-bg-secondary)", color: "#A32D2D" }}
            >
              <it.Icon size={18} />
            </div>
            <span className="font-sans font-medium text-[14px] text-text-primary">{it.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

/* ───────── Bottom tab bar ───────── */

function BottomTabBar() {
  const tabs = [
    { key: "home", label: "Ana Sayfa", path: "M4 11 L12 4 L20 11 V20 H14 V14 H10 V20 H4 Z" },
    { key: "news", label: "Gündem", path: "M5 5 H19 V19 H5 Z M8 9 H16 M8 13 H16 M8 17 H13" },
    { key: "match", label: "Maç" },
    { key: "community", label: "Topluluk", hash: true },
    { key: "profile", label: "Profil", path: "M12 12 m-4 0 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M4 21 C5 17 8.5 15.5 12 15.5 C15.5 15.5 19 17 20 21", active: true },
  ];
  return (
    <nav
      className="sticky bottom-0 grid grid-cols-5"
      style={{ height: 80, background: "white", borderTop: "1px solid var(--color-border-tertiary)" }}
    >
      {tabs.map((t) => (
        <button key={t.key} className="flex flex-col items-center justify-center gap-1 pt-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={t.active ? "#A32D2D" : "#999"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {t.hash ? (
              <path d="M9 4 L7 20 M17 4 L15 20 M4 9 H20 M4 15 H20" />
            ) : t.key === "match" ? (
              <circle cx="12" cy="12" r="8" />
            ) : (
              <path d={t.path} />
            )}
          </svg>
          <span className="font-sans text-[11px]" style={{ color: t.active ? "#A32D2D" : "#999", fontWeight: t.active ? 500 : 400 }}>
            {t.label}
          </span>
        </button>
      ))}
    </nav>
  );
}

/* ───────── Screen ───────── */

function ProfileScreen() {
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
        <Hero />

        {/* Pulled-up content stack */}
        <main className="-mt-4 flex-1 space-y-5 px-4 pb-8">
          <ScoreCard />
          <FormaCard />
          <FriendsRow />
          <ActivityList />
          <SettingsGrid />

          {/* Footer */}
          <div className="pt-4 text-center">
            <button className="font-sans font-medium text-[14px]" style={{ color: "#A32D2D" }}>
              Çıkış yap
            </button>
            <div className="mt-3 font-sans text-[10px] text-text-tertiary" style={{ letterSpacing: "0.04em" }}>
              TRİBÜN v1.0.0 · Made with ❤️ in Türkiye
            </div>
          </div>
        </main>

        <BottomTabBar />
      </div>
    </div>
  );
}
