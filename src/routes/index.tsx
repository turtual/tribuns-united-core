import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  component: GundemScreen,
});

/* ───────── Icons ───────── */

function IconFilter() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M3 6 H21 M3 12 H21 M3 18 H21" />
      <circle cx="8" cy="6" r="2" fill="var(--bg-primary)" />
      <circle cx="16" cy="12" r="2" fill="var(--bg-primary)" />
      <circle cx="10" cy="18" r="2" fill="var(--bg-primary)" />
    </svg>
  );
}
function IconSearch() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16 L20 20" />
    </svg>
  );
}
function IconUp({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19 V5 M6 11 L12 5 L18 11" />
    </svg>
  );
}
function IconShare() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="12" r="2.2" />
      <circle cx="17" cy="6" r="2.2" />
      <circle cx="17" cy="18" r="2.2" />
      <path d="M8 11 L15 7 M8 13 L15 17" />
    </svg>
  );
}
function IconBookmark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4 H18 V21 L12 17 L6 21 Z" />
    </svg>
  );
}
function IconVerified() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2 L14.5 4 L17.8 3.6 L19 6.7 L22 8.5 L21 12 L22 15.5 L19 17.3 L17.8 20.4 L14.5 20 L12 22 L9.5 20 L6.2 20.4 L5 17.3 L2 15.5 L3 12 L2 8.5 L5 6.7 L6.2 3.6 L9.5 4 Z"
        fill="var(--info)"
      />
      <path d="M8 12 L11 15 L16.5 9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/* Tab bar icons (same set as home) */
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

/* ───────── Shared bits ───────── */

function Avatar({
  size = 32,
  initials,
  tone = "var(--bg-tertiary)",
  fg = "var(--text-secondary)",
}: {
  size?: number;
  initials: string;
  tone?: string;
  fg?: string;
}) {
  return (
    <div
      className="rounded-pill flex items-center justify-center shrink-0"
      style={{ width: size, height: size, backgroundColor: tone }}
    >
      <span className="font-display" style={{ color: fg, fontWeight: 600, fontSize: size * 0.4 }}>
        {initials}
      </span>
    </div>
  );
}

function StatusBadge({ kind }: { kind: "yazar" | "fenomen" | "futbolcu" | "kongre" | "kombine" }) {
  const map = {
    yazar: { label: "Spor Yazarı", color: "var(--badge-yazar)" },
    fenomen: { label: "Fenomen", color: "var(--badge-fenomen)" },
    futbolcu: { label: "Eski Futbolcu", color: "var(--badge-futbolcu)" },
    kongre: { label: "Kongre", color: "var(--badge-kongre)" },
    kombine: { label: "Kombine", color: "var(--badge-kombine)" },
  } as const;
  const cfg = map[kind];
  const onYellow = kind === "fenomen";
  return (
    <span
      className="rounded-pill px-2 py-0.5 shrink-0"
      style={{
        backgroundColor: cfg.color,
        color: onYellow ? "#1A1A1A" : "white",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 10,
        letterSpacing: "0.04em",
        lineHeight: "14px",
      }}
    >
      {cfg.label}
    </span>
  );
}

function DestekleButton({
  count,
  initialActive = false,
}: {
  count: number;
  initialActive?: boolean;
}) {
  const [active, setActive] = useState(initialActive);
  const total = active ? count + 1 : count;
  return (
    <button
      type="button"
      onClick={() => setActive((v) => !v)}
      className="rounded-pill border flex items-center gap-1.5 transition-colors"
      style={{
        height: 36,
        paddingLeft: 12,
        paddingRight: 14,
        borderColor: active ? "var(--primary)" : "var(--border)",
        backgroundColor: active ? "color-mix(in oklab, var(--primary) 8%, white)" : "white",
        color: active ? "var(--primary)" : "var(--text-primary)",
      }}
    >
      <IconUp size={14} />
      <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 13 }}>
        Destekle
      </span>
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          fontSize: 13,
          color: active ? "var(--primary)" : "var(--text-secondary)",
        }}
      >
        · {formatCount(total)}
      </span>
    </button>
  );
}

function formatCount(n: number) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return String(n);
}

function CardActions({
  count,
  initialActive = false,
  trailing,
}: {
  count: number;
  initialActive?: boolean;
  trailing?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between">
      <DestekleButton count={count} initialActive={initialActive} />
      <div className="flex items-center gap-1 text-text-secondary">
        {trailing ?? (
          <>
            <button type="button" aria-label="Paylaş" className="size-9 rounded-pill flex items-center justify-center hover:bg-bg-secondary">
              <IconShare />
            </button>
            <button type="button" aria-label="Kaydet" className="size-9 rounded-pill flex items-center justify-center hover:bg-bg-secondary">
              <IconBookmark />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function HeroImage({ tone, label }: { tone: string; label?: string }) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: 200,
        background: tone,
      }}
    >
      {/* subtle grain */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.18), transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.25), transparent 45%)",
        }}
      />
      {label && (
        <span
          className="absolute left-3 bottom-3 rounded-pill px-2.5 py-1 uppercase tracking-widest"
          style={{
            backgroundColor: "rgba(0,0,0,0.45)",
            color: "white",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 10,
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}

/* ───────── Card variants ───────── */

type NewsCardData = {
  source: string;
  sourceTone: string;
  time: string;
  headline: string;
  excerpt: string;
  imageTone: string;
  imageLabel?: string;
  destekle: number;
  destekleActive?: boolean;
};

function NewsCard({ d }: { d: NewsCardData }) {
  return (
    <article
      className="bg-surface rounded-2xl border overflow-hidden"
      style={{ borderColor: "var(--border-tertiary)" }}
    >
      <HeroImage tone={d.imageTone} label={d.imageLabel} />
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-text-secondary">
          <span
            className="size-4 rounded-pill shrink-0"
            style={{ backgroundColor: d.sourceTone }}
          />
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 12 }}>
            {d.source}
          </span>
          <span style={{ fontSize: 12 }}>·</span>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 12 }}>{d.time}</span>
        </div>

        <h2
          className="font-display text-text-primary line-clamp-3"
          style={{ fontWeight: 600, fontSize: 20, lineHeight: "28px", letterSpacing: "-0.005em" }}
        >
          {d.headline}
        </h2>

        <p
          className="text-text-secondary line-clamp-2"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: 14, lineHeight: "20px" }}
        >
          {d.excerpt}
        </p>

        <CardActions count={d.destekle} initialActive={d.destekleActive} />
      </div>
    </article>
  );
}

type EditorialData = {
  author: string;
  initials: string;
  badge: "yazar" | "fenomen" | "futbolcu" | "kongre" | "kombine";
  time: string;
  headline: string;
  body: string;
  destekle: number;
};

function EditorialCard({ d }: { d: EditorialData }) {
  return (
    <article
      className="bg-surface rounded-2xl border"
      style={{ borderColor: "var(--border-tertiary)", padding: 24 }}
    >
      <span
        className="font-display text-primary uppercase"
        style={{ fontWeight: 600, fontSize: 11, letterSpacing: "0.18em" }}
      >
        Editör Yorumu
      </span>

      <div className="mt-3 flex items-center gap-2.5">
        <Avatar size={32} initials={d.initials} />
        <span className="text-text-primary" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 14 }}>
          {d.author}
        </span>
        <StatusBadge kind={d.badge} />
        <span className="ml-auto text-text-tertiary" style={{ fontFamily: "var(--font-sans)", fontSize: 12 }}>
          {d.time}
        </span>
      </div>

      <h2
        className="mt-4 font-display text-text-primary"
        style={{
          fontWeight: 600,
          fontSize: 22,
          lineHeight: "30px",
          fontStyle: "italic",
          letterSpacing: "-0.005em",
        }}
      >
        “{d.headline}”
      </h2>

      <p
        className="mt-3 text-text-primary"
        style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: 15, lineHeight: "24px" }}
      >
        {d.body}
      </p>

      <div className="mt-5">
        <CardActions count={d.destekle} />
      </div>
    </article>
  );
}

type TweetData = {
  author: string;
  initials: string;
  handle: string;
  verified?: boolean;
  time: string;
  body: string;
  imageTone?: string;
  destekle: number;
};

function TweetCard({ d }: { d: TweetData }) {
  return (
    <article
      className="bg-surface rounded-2xl border"
      style={{ borderColor: "var(--border-tertiary)", padding: 16 }}
    >
      <div className="flex items-center gap-2.5">
        <Avatar size={36} initials={d.initials} tone="var(--bg-secondary)" />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span
              className="text-text-primary"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 14 }}
            >
              {d.author}
            </span>
            {d.verified && <IconVerified />}
          </div>
          <span
            className="text-text-tertiary"
            style={{ fontFamily: "var(--font-sans)", fontSize: 12 }}
          >
            {d.handle} · {d.time}
          </span>
        </div>
      </div>

      <p
        className="mt-3 text-text-primary"
        style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: 15, lineHeight: "22px" }}
      >
        {d.body}
      </p>

      {d.imageTone && (
        <div
          className="mt-3 w-full rounded-xl overflow-hidden border"
          style={{ borderColor: "var(--border-tertiary)", height: 160, background: d.imageTone }}
        />
      )}

      <div className="mt-3">
        <CardActions count={d.destekle} trailing={<></>} />
      </div>
    </article>
  );
}

/* ───────── Data ───────── */

const TABS_FILTER = ["Tümü", "Haber", "Yorum"] as const;
type FilterTab = (typeof TABS_FILTER)[number];

const NEWS_1: NewsCardData = {
  source: "Fanatik",
  sourceTone: "#A32D2D",
  time: "2 saat önce",
  headline: "Okan Buruk: 'Mertens için son maçımız değil'",
  excerpt:
    "Teknik direktör derbi öncesi konuştu: kadro derinliği ve rotasyonun önemine dikkat çekti.",
  imageTone: "linear-gradient(135deg, #1f1f1f 0%, #3a3a3a 100%)",
  imageLabel: "Basın Toplantısı",
  destekle: 147,
};

const EDITORIAL_1: EditorialData = {
  author: "Mehmet Demirkol",
  initials: "MD",
  badge: "yazar",
  time: "4 saat önce",
  headline: "Derbi sadece üç puan değil, bir kimlik sınavıdır",
  body:
    "Bu akşam sahaya çıkacak olan, sadece on bir oyuncu değil; bir şehrin, bir kuşağın ve bir tribünün hafızası. Ali Sami Yen'den RAMS Park'a uzanan çizgide değişen yalnızca tabela oldu. Geri kalan her şey — ses, koku, beklenti — aynı.",
  destekle: 312,
};

const TWEET_1: TweetData = {
  author: "Galatasaray",
  initials: "GS",
  handle: "@GalatasaraySK",
  verified: true,
  time: "1 sa",
  body:
    "Aslanlar, bu akşam tribünlerimizle birlikte sahada olacak. RAMS Park'a hazırız. 🦁",
  imageTone: "linear-gradient(135deg, #A90432 0%, #7C0319 100%)",
  destekle: 8420,
};

const NEWS_2: NewsCardData = {
  source: "TRİBÜN Editör",
  sourceTone: "#FFB700",
  time: "5 saat önce",
  headline: "Icardi'nin sakatlığı geride: ilk 11'de yer alacak",
  excerpt:
    "Arjantinli golcü son antrenmanı tam takım tamamladı. Teknik ekip, derbi kadrosunda Icardi'ye güveniyor.",
  imageTone: "linear-gradient(135deg, #3b2e1a 0%, #5a4422 100%)",
  destekle: 524,
  destekleActive: true,
};

const TWEET_2: TweetData = {
  author: "Aydın Cingöz",
  initials: "AC",
  handle: "@aydincingoz",
  verified: false,
  time: "3 sa",
  body:
    "Sol kanatta Sané'nin bu sezonki en iyi performansını bekliyorum. Karakter olarak da bu maça yatkın bir oyuncu — derbiye göre yaratılmış adeta.",
  destekle: 96,
};

const EDITORIAL_2: EditorialData = {
  author: "Hakan Şükür",
  initials: "HŞ",
  badge: "futbolcu",
  time: "6 saat önce",
  headline: "Bizim için derbi, sadece kazanılması gereken bir maç değildir",
  body:
    "Derbiye çıkmak, formayı giymekten daha fazlasıdır. O 90 dakika boyunca taşıdığın şey üç harf değil, bir tarihtir. Bu akşam sahada olacak arkadaşlarımın bunu hissettiğini biliyorum.",
  destekle: 1820,
};

/* ───────── Screen ───────── */

const TABS = [
  { key: "home", label: "Ana Sayfa", Icon: IconHome },
  { key: "news", label: "Gündem", Icon: IconNews },
  { key: "match", label: "Maç", Icon: IconMatch },
  { key: "community", label: "Topluluk", Icon: IconCommunity },
  { key: "profile", label: "Profil", Icon: IconProfile },
] as const;

function GundemScreen() {
  const [filter, setFilter] = useState<FilterTab>("Tümü");
  const [active] = useState<(typeof TABS)[number]["key"]>("news");

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <div className="mx-auto w-full max-w-[393px] min-h-screen flex flex-col relative">
        {/* App bar */}
        <header
          className="sticky top-0 z-30 bg-bg-primary flex items-center justify-between px-4"
          style={{ height: 56 }}
        >
          <h1
            className="font-display text-text-primary"
            style={{ fontWeight: 600, fontSize: 24, letterSpacing: "-0.01em" }}
          >
            Gündem
          </h1>
          <div className="flex items-center gap-1 text-text-primary">
            <button type="button" aria-label="Filtrele" className="size-10 flex items-center justify-center">
              <IconFilter />
            </button>
            <button type="button" aria-label="Ara" className="size-10 flex items-center justify-center">
              <IconSearch />
            </button>
          </div>
        </header>

        {/* Filter tab strip */}
        <div
          className="sticky top-14 z-30 bg-bg-primary border-b"
          style={{ borderColor: "var(--border-tertiary)" }}
        >
          <div className="relative flex items-stretch px-4" style={{ height: 48 }}>
            {TABS_FILTER.map((t) => {
              const isActive = filter === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setFilter(t)}
                  className="relative px-4 flex items-center"
                  style={{
                    color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                    fontFamily: isActive ? "var(--font-display)" : "var(--font-sans)",
                    fontWeight: isActive ? 600 : 500,
                    fontSize: 16,
                  }}
                >
                  {t}
                  <span
                    className="absolute left-3 right-3 -bottom-px transition-opacity"
                    style={{
                      height: 3,
                      backgroundColor: "var(--primary)",
                      borderRadius: 2,
                      opacity: isActive ? 1 : 0,
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Feed */}
        <main className="flex-1 pb-28 pt-4 px-4 flex flex-col gap-4">
          <NewsCard d={NEWS_1} />
          <EditorialCard d={EDITORIAL_1} />
          <TweetCard d={TWEET_1} />
          <NewsCard d={NEWS_2} />
          <TweetCard d={TWEET_2} />
          <EditorialCard d={EDITORIAL_2} />
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
