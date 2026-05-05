import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  component: HomeScreen,
});

/* ───────── Icons (line-style, swap for lucide-react later) ───────── */

type IconProps = { filled?: boolean; size?: number };

const stroke = (filled?: boolean) =>
  filled ? "var(--primary)" : "currentColor";
const fill = (filled?: boolean) => (filled ? "var(--primary)" : "none");

function IconHome({ filled, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill(filled)} stroke={stroke(filled)} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 11 L12 4 L20 11 V20 C20 20.5 19.5 21 19 21 H15 V14 H9 V21 H5 C4.5 21 4 20.5 4 20 Z" />
    </svg>
  );
}
function IconNews({ filled, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill(filled)} stroke={stroke(filled)} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5 H17 C17.6 5 18 5.4 18 6 V19 C18 20 18.8 21 20 21 C19 21 4 21 4 21 C3.4 21 3 20.6 3 20 V6 C3 5.4 3.4 5 4 5 Z" />
      <path d="M18 9 H21 V19 C21 20 20.5 21 20 21" />
      <path d="M6 9 H15 M6 13 H15 M6 17 H12" stroke={filled ? "white" : "currentColor"} />
    </svg>
  );
}
function IconMatch({ filled, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill(filled)} stroke={stroke(filled)} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3 L14 8 L19 9 M12 3 L10 8 L5 9 M14 8 L12 13 L10 8 M5 9 L8 14 L7 19 M19 9 L16 14 L17 19 M8 14 H16 M7 19 L12 17 L17 19" stroke={filled ? "white" : "currentColor"} />
    </svg>
  );
}
function IconCommunity({ filled, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill(filled)} stroke={stroke(filled)} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="9" r="3.2" />
      <circle cx="17" cy="10" r="2.6" />
      <path d="M3 19 C3 15.5 6 13.5 9 13.5 C12 13.5 15 15.5 15 19" />
      <path d="M15 14 C18 14 21 15.5 21 18.5" />
    </svg>
  );
}
function IconProfile({ filled, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill(filled)} stroke={stroke(filled)} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8.5" r="3.6" />
      <path d="M4.5 20 C5.5 16 8.5 14.5 12 14.5 C15.5 14.5 18.5 16 19.5 20" />
    </svg>
  );
}
function IconBell() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 16 V11 C6 7.7 8.7 5 12 5 C15.3 5 18 7.7 18 11 V16 L19.5 18 H4.5 Z" />
      <path d="M10 20.5 C10.5 21.4 11.2 21.8 12 21.8 C12.8 21.8 13.5 21.4 14 20.5" />
    </svg>
  );
}
function IconChevron({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5 L16 12 L9 19" />
    </svg>
  );
}

/* ───────── Team crest (no logo files; tasteful placeholder) ───────── */

type Crest = { base: string; stripe: string; text: string };

function TeamCrest({ crest, size = 48 }: { crest: Crest; size?: number }) {
  return (
    <div
      className="rounded-pill flex items-center justify-center overflow-hidden relative shrink-0"
      style={{ backgroundColor: crest.base, width: size, height: size }}
    >
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2"
        style={{ width: size * 0.18, backgroundColor: crest.stripe, opacity: 0.85 }}
      />
      <span
        className="relative font-display"
        style={{
          color: crest.stripe,
          fontWeight: 600,
          fontSize: size * 0.28,
          letterSpacing: 0.4,
        }}
      >
        {crest.text}
      </span>
    </div>
  );
}

const GS: Crest = { base: "#A90432", stripe: "#FDB912", text: "GS" };
const FB: Crest = { base: "#0A2240", stripe: "#FFED00", text: "FB" };

/* ───────── Section helpers ───────── */

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2
      className="font-display text-text-secondary px-5"
      style={{
        fontWeight: 600,
        fontSize: 12,
        lineHeight: "16px",
        letterSpacing: "0.18em",
      }}
    >
      {children}
    </h2>
  );
}

/* ───────── Data ───────── */

const NEWS = [
  {
    id: 1,
    title: "Antrenmanda derbi provası: Mertens'ten gol şov",
    source: "TRİBÜN Editör",
    time: "1 saat önce",
    tone: "from-[#1f1f1f] to-[#3a3a3a]",
  },
  {
    id: 2,
    title: "Buruk: 'Bu akşam Ali Sami Yen ruhunu sahaya yansıtacağız'",
    source: "Resmi Açıklama",
    time: "3 saat önce",
    tone: "from-[#7C0319] to-[#A90432]",
  },
  {
    id: 3,
    title: "Icardi'nin sakatlığı geride: ilk 11'de yer alacak",
    source: "TRİBÜN Editör",
    time: "5 saat önce",
    tone: "from-[#3b2e1a] to-[#5a4422]",
  },
  {
    id: 4,
    title: "Tribün koreografisi sızdı: 'Kralın dönüşü' temasıyla",
    source: "ultrAslan",
    time: "7 saat önce",
    tone: "from-[#854F0B] to-[#A06410]",
  },
];

const HASHTAGS = [
  { tag: "icardiKalsın", votes: "4.2K oy" },
  { tag: "bizimküba", votes: "2.8K oy" },
  { tag: "saracoğluHasreti", votes: "1.6K oy" },
];

const TABS = [
  { key: "home", label: "Ana Sayfa", Icon: IconHome },
  { key: "news", label: "Gündem", Icon: IconNews },
  { key: "match", label: "Maç", Icon: IconMatch },
  { key: "community", label: "Topluluk", Icon: IconCommunity },
  { key: "profile", label: "Profil", Icon: IconProfile },
] as const;

/* ───────── Screen ───────── */

function HomeScreen() {
  const [active, setActive] = useState<(typeof TABS)[number]["key"]>("home");
  const [vote, setVote] = useState<"yes" | "no" | null>(null);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <div className="mx-auto w-full max-w-[393px] min-h-screen flex flex-col relative">
        {/* Top app bar — sticky */}
        <header
          className="sticky top-0 z-30 bg-bg-primary border-b flex items-center justify-between px-5"
          style={{ height: 56, borderColor: "var(--border-tertiary)" }}
        >
          <span
            className="font-display text-primary"
            style={{ fontWeight: 600, fontSize: 18, letterSpacing: "-0.01em" }}
          >
            TRİBÜN
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Bildirimler"
              className="size-10 -mr-1 flex items-center justify-center text-text-primary relative"
            >
              <IconBell />
              <span
                className="absolute top-1.5 right-1.5 size-2 rounded-pill"
                style={{ backgroundColor: "var(--primary)" }}
              />
            </button>
            <button
              type="button"
              aria-label="Profil"
              className="size-8 rounded-pill overflow-hidden"
              style={{ backgroundColor: "var(--bg-tertiary)" }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span
                  className="font-display text-text-secondary"
                  style={{ fontWeight: 600, fontSize: 13 }}
                >
                  EK
                </span>
              </div>
            </button>
          </div>
        </header>

        {/* Scrollable content */}
        <main className="flex-1 pb-28 pt-5 flex flex-col gap-7">
          {/* Section 1 — Today's match */}
          <section className="px-5">
            <article
              className="relative w-full rounded-2xl overflow-hidden"
              style={{
                height: 156,
                background: "linear-gradient(135deg, #A90432 0%, #7C0319 100%)",
                boxShadow: "0 8px 24px -12px rgba(124,3,25,0.55)",
              }}
            >
              {/* Gold accent strip */}
              <div
                className="absolute inset-y-0 left-0"
                style={{ width: 4, backgroundColor: "#FDB912" }}
              />
              <div className="relative h-full flex flex-col justify-between px-5 py-4">
                <div className="flex items-center justify-between">
                  <span
                    className="text-white"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 500,
                      fontSize: 12,
                      letterSpacing: "0.12em",
                      opacity: 0.8,
                    }}
                  >
                    BUGÜN 19:00 · RAMS PARK
                  </span>
                  <span
                    className="rounded-pill px-2 py-0.5 text-[10px] uppercase tracking-widest"
                    style={{
                      backgroundColor: "rgba(253,185,18,0.15)",
                      color: "#FDB912",
                      fontWeight: 600,
                    }}
                  >
                    Derbi
                  </span>
                </div>

                <div className="flex items-center justify-center gap-5">
                  <div className="flex flex-col items-center gap-1.5">
                    <TeamCrest crest={GS} size={44} />
                    <span
                      className="font-display text-white"
                      style={{ fontWeight: 600, fontSize: 14 }}
                    >
                      Galatasaray
                    </span>
                  </div>
                  <span
                    className="font-display"
                    style={{
                      color: "#FDB912",
                      fontWeight: 600,
                      fontSize: 28,
                      letterSpacing: "0.04em",
                    }}
                  >
                    VS
                  </span>
                  <div className="flex flex-col items-center gap-1.5">
                    <TeamCrest crest={FB} size={44} />
                    <span
                      className="font-display text-white"
                      style={{ fontWeight: 600, fontSize: 14 }}
                    >
                      Fenerbahçe
                    </span>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="rounded-pill bg-white hover:bg-white/90 transition-colors px-4 py-2"
                    style={{
                      color: "#A32D2D",
                      fontFamily: "var(--font-sans)",
                      fontWeight: 500,
                      fontSize: 14,
                    }}
                  >
                    Tribüne Gir →
                  </button>
                </div>
              </div>
            </article>
          </section>

          {/* Section 2 — News */}
          <section className="flex flex-col gap-3">
            <SectionTitle>GÜNDEM</SectionTitle>
            <div
              className="flex gap-3 overflow-x-auto pb-1 px-5 [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none" }}
            >
              {NEWS.map((n) => (
                <article
                  key={n.id}
                  className="bg-surface rounded-xl border overflow-hidden shrink-0 flex flex-col"
                  style={{
                    width: 260,
                    borderColor: "var(--border-tertiary)",
                  }}
                >
                  <div
                    className={`bg-gradient-to-br ${n.tone}`}
                    style={{ height: 110 }}
                  />
                  <div className="p-3 flex flex-col gap-3 flex-1">
                    <h3
                      className="font-display text-text-primary line-clamp-2"
                      style={{ fontWeight: 600, fontSize: 16, lineHeight: "20px" }}
                    >
                      {n.title}
                    </h3>
                    <div
                      className="flex items-center justify-between mt-auto text-text-secondary"
                      style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 12 }}
                    >
                      <span>{n.source}</span>
                      <span>{n.time}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Section 3 — Trending hashtags */}
          <section className="flex flex-col gap-3">
            <SectionTitle>TRİBÜNDE BU HAFTA</SectionTitle>
            <div className="px-5 flex flex-col gap-2.5">
              {HASHTAGS.map((h) => (
                <button
                  key={h.tag}
                  type="button"
                  className="bg-surface rounded-xl border flex items-center gap-3 text-left hover:border-primary transition-colors"
                  style={{
                    borderColor: "var(--border-tertiary)",
                    padding: 16,
                  }}
                >
                  <span
                    className="font-display text-primary shrink-0"
                    style={{
                      fontWeight: 600,
                      fontSize: 24,
                      lineHeight: "24px",
                      width: 20,
                    }}
                  >
                    #
                  </span>
                  <span
                    className="flex-1 text-text-primary truncate"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 500,
                      fontSize: 16,
                    }}
                  >
                    {h.tag}
                  </span>
                  <span
                    className="text-text-secondary"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 500,
                      fontSize: 12,
                    }}
                  >
                    {h.votes}
                  </span>
                  <span className="text-text-tertiary">
                    <IconChevron />
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* Section 4 — Suggested poll */}
          <section className="flex flex-col gap-3">
            <SectionTitle>BUGÜNÜN SORUSU</SectionTitle>
            <div className="px-5">
              <div
                className="bg-surface rounded-xl border"
                style={{ borderColor: "var(--border-tertiary)", padding: 20 }}
              >
                <h3
                  className="font-display text-text-primary"
                  style={{ fontWeight: 600, fontSize: 20, lineHeight: "28px" }}
                >
                  Bu akşamki ilk 11'de Mertens olmalı mı?
                </h3>

                <div className="mt-4 flex flex-col gap-2.5">
                  {[
                    { k: "yes" as const, label: "Evet, formda", pct: 62 },
                    { k: "no" as const, label: "Hayır, Icardi yeter", pct: 38 },
                  ].map((opt) => {
                    const voted = vote !== null;
                    const isMine = vote === opt.k;
                    return (
                      <button
                        key={opt.k}
                        type="button"
                        onClick={() => setVote(opt.k)}
                        className="relative w-full rounded-pill border overflow-hidden text-left transition-colors"
                        style={{
                          borderColor: isMine ? "var(--primary)" : "var(--border)",
                          backgroundColor: voted ? "transparent" : "white",
                          height: 48,
                        }}
                      >
                        {voted && (
                          <div
                            className="absolute inset-y-0 left-0 transition-all duration-500"
                            style={{
                              width: `${opt.pct}%`,
                              backgroundColor: isMine
                                ? "color-mix(in oklab, var(--primary) 14%, white)"
                                : "var(--bg-secondary)",
                            }}
                          />
                        )}
                        <div className="relative h-full flex items-center justify-between px-5">
                          <span
                            className="text-text-primary"
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontWeight: 500,
                              fontSize: 15,
                            }}
                          >
                            {opt.label}
                          </span>
                          {voted && (
                            <span
                              style={{
                                fontFamily: "var(--font-sans)",
                                fontWeight: 600,
                                fontSize: 13,
                                color: isMine ? "var(--primary)" : "var(--text-secondary)",
                              }}
                            >
                              %{opt.pct}
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <p
                  className="mt-4 text-text-secondary"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    fontSize: 12,
                  }}
                >
                  1.247 taraftar oy verdi
                </p>
              </div>
            </div>
          </section>
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
                onClick={() => setActive(t.key)}
                className="flex-1 flex flex-col items-center justify-center gap-1 transition-colors"
                style={{
                  color: isActive ? "var(--primary)" : "var(--text-tertiary)",
                }}
              >
                <Icon filled={isActive} size={24} />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    fontSize: 11,
                    letterSpacing: "0.02em",
                  }}
                >
                  {t.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
