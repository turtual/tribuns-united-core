import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { MessageBubble } from "@/components/tribun/MessageBubble";
import { PollCard } from "@/components/tribun/PollCard";

export const Route = createFileRoute("/mac/canli")({
  head: () => ({ meta: [{ title: "TRİBÜN — Canlı Tribün" }] }),
  component: LiveMatchScreen,
});

function LiveMatchScreen() {
  const [tab, setTab] = useState<"sohbet" | "stat" | "olay">("sohbet");
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShake(true), 500);
    const t2 = setTimeout(() => setShake(false), 1300);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  return (
    <div className="theme-gs-home min-h-screen w-full" style={{ background: "#7C0319" }}>
      <div className="mx-auto flex flex-col" style={{ width: 393, minHeight: 852, background: "#7C0319", color: "white" }}>
        {/* Sticky header */}
        <header
          className="sticky top-0 z-30 text-white"
          style={{ background: "linear-gradient(180deg,#A90432,#7C0319)", borderBottom: "1px solid #FDB912" }}
        >
          <div className="flex items-center justify-between px-6 pt-2 pb-1" style={{ height: 44, color: "white" }}>
            <span className="text-[15px] font-semibold">21:47</span>
            <span className="text-[11px] font-semibold">5G</span>
          </div>
          <div className="flex items-center justify-between px-4" style={{ height: 44 }}>
            <Link to="/mac" className="text-white"><ChevronLeft size={24} /></Link>
            <div className="t-caption text-white/70" style={{ letterSpacing: "0.15em" }}>RAMS PARK</div>
            <div className="flex items-center gap-1.5 rounded-full px-2.5 py-1" style={{ background: "#FDB912", color: "#7C0319" }}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full" style={{ background: "#A90432", opacity: 0.7 }} />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: "#A90432" }} />
              </span>
              <span className="font-sans font-semibold text-[12px]">CANLI 67'</span>
            </div>
          </div>
          <div className="grid grid-cols-3 items-center px-4 pb-3">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full" style={{ background: "linear-gradient(135deg,#FDB912,#A90432)" }} />
              <div className="font-display font-semibold text-[16px]">Galatasaray</div>
            </div>
            <div className="flex flex-col items-center">
              <div className={`font-display font-semibold text-[32px] ${shake ? "animate-[shake_0.5s_ease-in-out]" : ""}`} style={{ color: "#FDB912" }}>2 - 1</div>
              <div className="t-tiny mt-1 text-white/70">67' İLK YARI BİTTİ</div>
            </div>
            <div className="flex items-center justify-end gap-2">
              <div className="text-right font-display font-semibold text-[16px]">Fenerbahçe</div>
              <div className="h-10 w-10 rounded-full" style={{ background: "linear-gradient(135deg,#FFE600,#00296B)" }} />
            </div>
          </div>
        </header>

        {/* Tribün switcher */}
        <div className="grid grid-cols-2 gap-2 px-4 py-2" style={{ background: "#7C0319" }}>
          <div className="rounded-xl p-3" style={{ background: "#FDB912" }}>
            <div className="font-display font-semibold text-[12px]" style={{ color: "#7C0319", letterSpacing: "0.08em" }}>GS TRİBÜNÜ</div>
            <div className="mt-1 flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#3B6D11]"/><span className="t-caption" style={{ color: "#7C0319", opacity: 0.7 }}>12.4K aktif</span></div>
          </div>
          <button className="rounded-xl p-3 text-left" style={{ background: "rgba(255,255,255,0.10)" }}>
            <div className="font-display font-semibold text-[12px] text-white" style={{ letterSpacing: "0.08em" }}>FB TRİBÜNÜ</div>
            <div className="mt-1 flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#3B6D11]"/><span className="t-caption text-white/70">8.7K aktif</span></div>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex px-4" style={{ height: 44, borderBottom: "1px solid rgba(253,185,18,0.15)" }}>
          {(["sohbet", "stat", "olay"] as const).map((k) => {
            const labels = { sohbet: "Sohbet", stat: "İstatistik", olay: "Olay" };
            const a = tab === k;
            return (
              <button key={k} onClick={() => setTab(k)} className="relative flex-1 font-display font-semibold text-[14px]" style={{ color: "white", opacity: a ? 1 : 0.6 }}>
                {labels[k]}
                {a && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full" style={{ width: 32, height: 3, background: "#FDB912" }} />}
              </button>
            );
          })}
        </div>

        {/* Feed */}
        <div className="flex-1 space-y-3 py-4" style={{ background: "#7C0319" }}>
          <MessageBubble theme="team_home" username="emre_gs" text="Icardi bu maçta yine kralımız 👑" timestamp="67'" />
          <MessageBubble theme="team_home" status="sportwriter" username="Hıncal Uluç" text="Mertens'in pas yüzdesi %94. Beyni hâlâ Napoli'deki gibi keskin." timestamp="66'" />
          <MessageBubble theme="team_home" username="cimbom_1905" text="HAKEM NEYE BAKIYOR YA, FAUL APAÇIK!" timestamp="65'" />
          <div className="px-4">
            <PollCard
              theme="team_home"
              question="Yarın Mertens ilk 11'de mi başlasın?"
              options={[
                { id: "yes", label: "Evet, formda", votes: 6420 },
                { id: "no", label: "Hayır, Icardi devam etsin", votes: 3580 },
              ]}
            />
          </div>
          <MessageBubble theme="team_home" status="fenomen" username="ultrAslan_Cem" text="Tribün ayakta. Buradan selamlar 🟡🔴" timestamp="64'" />
          {/* Goal banner */}
          <div className="mx-4 overflow-hidden rounded-2xl p-4" style={{ background: "linear-gradient(110deg,#FDB912,#E8A100,#A90432)" }}>
            <div className="font-display font-semibold text-[24px] text-white" style={{ textShadow: "0 1px 2px rgba(124,3,25,0.5)" }}>
              GOOOL! Icardi 67'
            </div>
            <div className="mt-1 font-sans text-[12px] text-white/90">Galatasaray 2 — 1 Fenerbahçe</div>
          </div>
          <MessageBubble theme="team_home" status="eski_futbolcu" username="Hagi" text="Bu takım kalbiyle oynuyor. Devre arasında baskıyı sürdürmeleri lazım." timestamp="63'" />
          <MessageBubble theme="team_home" username="aslan_yürekli" text="Mauro nereye atarsa atsın gol oluyor be 🔥" timestamp="62'" />
          <div className="h-2" />
        </div>

        {/* Input bar */}
        <div className="sticky bottom-0 flex items-center gap-2 px-4 py-3" style={{ background: "linear-gradient(180deg,#F5E6CC,#F0E0BD)", height: 64, borderTop: "1px solid #D4C4A8" }}>
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-[#7C0319]" style={{ background: "rgba(255,255,255,0.7)", border: "1px solid #D4C4A8" }}>😊</button>
          <input className="h-10 flex-1 rounded-full bg-white px-4 font-sans text-[14px] outline-none placeholder:text-[#999]" placeholder="Tribünden seslen..." />
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-white" style={{ background: "linear-gradient(135deg,#C73838,#A32D2D)" }}>↑</button>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%,100% { transform: translateX(0) scale(1); }
          25% { transform: translateX(-3px) scale(1.05); }
          50% { transform: translateX(3px) scale(1.05); }
          75% { transform: translateX(-2px) scale(1.03); }
        }
      `}</style>
    </div>
  );
}
