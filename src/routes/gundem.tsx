import { createFileRoute } from "@tanstack/react-router";
import { Filter, Search } from "lucide-react";
import { useState } from "react";
import { PhoneFrame } from "@/components/tribun/Layout";
import { Avatar } from "@/components/tribun/Avatar";

export const Route = createFileRoute("/gundem")({
  head: () => ({ meta: [{ title: "TRİBÜN — Gündem" }] }),
  component: GundemScreen,
});

function DestekleButton({ count, initial }: { count: number; initial?: boolean }) {
  const [active, setActive] = useState(!!initial);
  const total = active ? count + 1 : count;
  return (
    <button
      onClick={() => setActive((v) => !v)}
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-sans font-medium text-[13px] transition-colors"
      style={{
        background: active ? "color-mix(in oklab, #A32D2D 8%, white)" : "white",
        color: active ? "#A32D2D" : "var(--color-text-primary)",
        border: `1px solid ${active ? "#A32D2D" : "var(--color-border-tertiary)"}`,
      }}
    >
      ▲ Destekle · {total.toLocaleString("tr-TR")}
    </button>
  );
}

function GundemScreen() {
  const [filter, setFilter] = useState("Tümü");
  return (
    <PhoneFrame>
      <header
        className="sticky top-0 z-30 flex items-center justify-between px-4"
        style={{ height: 56, background: "var(--color-bg-primary)", borderBottom: "1px solid var(--color-border-tertiary)" }}
      >
        <h1 className="font-display font-semibold text-[24px]">Gündem</h1>
        <div className="flex items-center gap-3">
          <Filter size={22} />
          <Search size={22} />
        </div>
      </header>

      {/* Tabs */}
      <div className="flex gap-5 px-4" style={{ height: 48, borderBottom: "1px solid var(--color-border-tertiary)" }}>
        {["Tümü", "Haber", "Yorum"].map((t) => {
          const a = filter === t;
          return (
            <button key={t} onClick={() => setFilter(t)} className="relative h-full font-sans text-[14px]" style={{ color: a ? "var(--color-text-primary)" : "var(--color-text-tertiary)", fontWeight: a ? 500 : 400 }}>
              {t}
              {a && <span className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: "#A32D2D" }} />}
            </button>
          );
        })}
      </div>

      <main className="flex-1 space-y-4 px-4 py-4">
        {/* News card */}
        <article className="overflow-hidden rounded-2xl bg-surface" style={{ border: "1px solid var(--color-border-tertiary)" }}>
          <div className="h-44" style={{ background: "linear-gradient(135deg,#A90432,#7C0319)" }} />
          <div className="p-4">
            <div className="t-tiny text-text-tertiary">Sabah Spor · 2 saat önce</div>
            <h2 className="mt-1 font-display font-semibold text-[20px] leading-tight">Icardi'nin yeni sözleşmesinde son detaylar</h2>
            <p className="mt-1 font-sans text-[14px] text-text-secondary">Yönetim kurulu Mauro Icardi ile iki yıllık opsiyonlu uzatma görüşmelerinin son aşamasında.</p>
            <div className="mt-3"><DestekleButton count={342} /></div>
          </div>
        </article>

        {/* Editorial */}
        <article className="rounded-2xl bg-surface p-5" style={{ border: "1px solid var(--color-border-tertiary)" }}>
          <div className="flex items-center gap-2">
            <Avatar name="Hıncal Uluç" status="yazar" size="sm" />
            <div>
              <div className="font-sans font-medium text-[13px]">Hıncal Uluç</div>
              <div className="t-tiny text-text-tertiary">Sabah · 4 sa</div>
            </div>
          </div>
          <h2 className="mt-3 font-display font-semibold italic text-[22px] leading-tight">"Mertens'in dehası rakamlardan büyük."</h2>
          <p className="mt-2 font-sans text-[15px] text-text-secondary">Devre arasının ardından sahaya çıkan adamın oyun zekası, futbolu yıllardır izleyen herkesin kabulü.</p>
          <div className="mt-3"><DestekleButton count={1240} initial /></div>
        </article>

        {/* Tweet */}
        <article className="rounded-2xl bg-surface p-4" style={{ border: "1px solid var(--color-border-tertiary)" }}>
          <div className="flex items-center gap-2">
            <Avatar name="UltrAslan" status="fenomen" size="sm" />
            <div className="flex items-center gap-1">
              <span className="font-sans font-medium text-[13px]">UltrAslan</span>
              <span className="text-[12px] text-text-tertiary">@ultras · 6sa</span>
            </div>
          </div>
          <p className="mt-2 font-sans text-[15px]" style={{ lineHeight: "22px" }}>Stadda atmosfer şahane. Bu takım bizim takımımız 🟡🔴</p>
          <div className="mt-3"><DestekleButton count={580} /></div>
        </article>

        {/* News card 2 */}
        <article className="overflow-hidden rounded-2xl bg-surface" style={{ border: "1px solid var(--color-border-tertiary)" }}>
          <div className="h-40" style={{ background: "linear-gradient(135deg,#3B6D11,#1f3a09)" }} />
          <div className="p-4">
            <div className="t-tiny text-text-tertiary">Fanatik · Dün</div>
            <h2 className="mt-1 font-display font-semibold text-[20px] leading-tight">Florya'ya 50 milyon TL'lik yatırım</h2>
            <div className="mt-3"><DestekleButton count={812} /></div>
          </div>
        </article>
      </main>
    </PhoneFrame>
  );
}
