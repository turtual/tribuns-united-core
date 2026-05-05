import { createFileRoute } from "@tanstack/react-router";
import { Plus, Share2, Check } from "lucide-react";
import { useState } from "react";
import { PhoneFrame } from "@/components/tribun/Layout";
import { Avatar } from "@/components/tribun/Avatar";

export const Route = createFileRoute("/topluluk")({
  head: () => ({ meta: [{ title: "TRİBÜN — Topluluk" }] }),
  component: ToplulukScreen,
});

interface H {
  proposer: string;
  role: "fenomen" | "yazar" | "eski_futbolcu" | "kongre";
  tag: string;
  desc: string;
  votes: number;
  goal: number;
  daysLeft: number;
  featured?: boolean;
  supported?: boolean;
}

const HASHTAGS: H[] = [
  { proposer: "Mert K.", role: "fenomen", tag: "#icardiKalsın", desc: "Mauro Icardi'nin sözleşmesi yenilensin.", votes: 12847, goal: 20000, daysLeft: 3, featured: true },
  { proposer: "Hıncal Uluç", role: "yazar", tag: "#derbiyeHazırız", desc: "Cumartesi tüm tribün stadda.", votes: 8420, goal: 15000, daysLeft: 2, supported: true },
  { proposer: "Hagi", role: "eski_futbolcu", tag: "#altyapıyaYatırım", desc: "Florya tesisleri yenilensin.", votes: 5210, goal: 10000, daysLeft: 5 },
  { proposer: "Burak Y.", role: "kongre", tag: "#şeffafFinans", desc: "Üç ayda bir mali rapor.", votes: 3895, goal: 12000, daysLeft: 6 },
];

const ROLE_PILL: Record<H["role"], { label: string; bg: string; fg: string }> = {
  fenomen: { label: "FENOMEN", bg: "#FFB700", fg: "#1A1A1A" },
  yazar: { label: "SPOR YAZARI", bg: "#185FA5", fg: "#fff" },
  eski_futbolcu: { label: "EFSANE", bg: "#A32D2D", fg: "#fff" },
  kongre: { label: "KONGRE", bg: "#7B3F99", fg: "#fff" },
};

const ROLE_TO_AVATAR = {
  fenomen: "fenomen",
  yazar: "yazar",
  eski_futbolcu: "futbolcu",
  kongre: "kongre",
} as const;

function HashtagCard({ h }: { h: H }) {
  const [supported, setSupported] = useState(!!h.supported);
  const total = supported && !h.supported ? h.votes + 1 : h.votes;
  const pct = Math.min(100, Math.round((total / h.goal) * 100));
  const role = ROLE_PILL[h.role];
  return (
    <div className="relative overflow-hidden rounded-2xl bg-surface p-5" style={{ border: h.featured ? "2px solid #FFB700" : "1px solid var(--color-border-tertiary)" }}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <Avatar name={h.proposer} size="xs" status={ROLE_TO_AVATAR[h.role]} />
          <span className="truncate font-sans font-medium text-[13px]">{h.proposer}</span>
          <span className="rounded-full px-1.5 py-0.5 font-sans font-semibold uppercase" style={{ background: role.bg, color: role.fg, fontSize: 9, letterSpacing: "0.08em" }}>{role.label}</span>
        </div>
        <span className="rounded-full px-2 py-1 font-sans font-semibold uppercase" style={{ fontSize: 10, letterSpacing: "0.08em", background: h.featured ? "#FFB700" : "var(--color-success-bg)", color: h.featured ? "#1A1A1A" : "var(--color-success)" }}>
          {h.featured ? "ÖNE ÇIKTI" : "AÇIK"}
        </span>
      </div>

      <div className="mt-3 font-display font-semibold leading-[1.05] break-words" style={{ fontSize: 28, color: "#A32D2D" }}>{h.tag}</div>
      <p className="mt-2 font-sans text-[14px] text-text-secondary">{h.desc}</p>

      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="h-full rounded-full transition-[width] duration-500" style={{ width: `${pct}%`, background: h.featured ? "linear-gradient(90deg,#A32D2D,#FFB700)" : "#A32D2D" }} />
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className="font-sans font-medium text-[12px]">{total.toLocaleString("tr-TR")} <span className="text-text-tertiary">/ {h.goal.toLocaleString("tr-TR")} oy</span></span>
        <span className="font-sans text-[12px] text-text-secondary">{h.daysLeft} gün kaldı</span>
      </div>

      <div className="mt-4 flex gap-2">
        <button onClick={() => setSupported((s) => !s)} className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full font-sans font-medium text-[14px]" style={{ height: 44, background: supported ? "var(--color-success-bg)" : "#A32D2D", color: supported ? "var(--color-success)" : "white" }}>
          {supported ? (<><Check size={14} /> Destekledin</>) : "Destekliyorum"}
        </button>
        <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface" style={{ border: "1px solid var(--color-border)" }}><Share2 size={18} /></button>
      </div>
    </div>
  );
}

function ToplulukScreen() {
  const [tab, setTab] = useState("Açık Oylamalar");
  return (
    <PhoneFrame>
      <header className="sticky top-0 z-30 flex items-center justify-between px-4" style={{ height: 56, background: "var(--color-bg-primary)", borderBottom: "1px solid var(--color-border-tertiary)" }}>
        <h1 className="font-display font-semibold text-[24px]">Topluluk</h1>
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-surface" style={{ border: "1px solid var(--color-border)" }}><Plus size={18} /></button>
      </header>

      <div className="px-4 pt-4">
        <div className="relative overflow-hidden rounded-2xl p-5 text-white" style={{ background: "linear-gradient(135deg,#A32D2D,#7C0319)" }}>
          <span aria-hidden className="pointer-events-none absolute -right-6 -top-6 font-display font-semibold opacity-10" style={{ fontSize: 120, color: "#FFB700" }}>#</span>
          <div className="relative">
            <div className="font-display font-semibold text-[20px]">Tribünün Sesi Ol</div>
            <p className="mt-2 max-w-[260px] text-[13px] text-white/80">Sözünü ettiğin hashtag'i tribün ne kadar destekliyor? Oyla, gündeme taşı.</p>
            <button className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-sans font-medium text-[14px]" style={{ color: "#A32D2D" }}>
              <Plus size={14} /> Hashtag aç
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-5 px-4" style={{ height: 44, borderBottom: "1px solid var(--color-border-tertiary)" }}>
        {["Açık Oylamalar", "Geçmiş", "Benim"].map((t) => {
          const a = tab === t;
          return (
            <button key={t} onClick={() => setTab(t)} className="relative h-full text-[14px]" style={{ color: a ? "var(--color-text-primary)" : "var(--color-text-tertiary)", fontWeight: a ? 500 : 400 }}>
              {t}
              {a && <span className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: "#A32D2D" }} />}
            </button>
          );
        })}
      </div>

      <main className="flex-1 space-y-3 px-4 py-4">
        {HASHTAGS.map((h) => <HashtagCard key={h.tag} h={h} />)}
      </main>
    </PhoneFrame>
  );
}
