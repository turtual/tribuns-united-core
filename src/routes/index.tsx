import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell, ChevronRight } from "lucide-react";
import { PhoneFrame } from "@/components/tribun/Layout";
import { Avatar } from "@/components/tribun/Avatar";
import { PollCard } from "@/components/tribun/PollCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TRİBÜN — Ana Sayfa" },
      { name: "description", content: "Takımının tribününe katıl. Maç günü canlı sohbet, gündem ve tribün anketleri." },
    ],
  }),
  component: HomeScreen,
});

function HomeScreen() {
  return (
    <PhoneFrame>
      {/* App bar */}
      <header
        className="sticky top-0 z-30 flex items-center justify-between px-4"
        style={{ height: 56, background: "var(--color-bg-primary)", borderBottom: "1px solid var(--color-border-tertiary)" }}
      >
        <div className="font-display font-semibold text-[18px]" style={{ color: "#A32D2D" }}>TRİBÜN</div>
        <div className="flex items-center gap-3">
          <button className="relative" aria-label="Bildirimler">
            <Bell size={22} className="text-text-primary" />
            <span className="absolute -right-1 -top-1 flex h-2 w-2 rounded-full" style={{ background: "#A32D2D" }} />
          </button>
          <Link to="/profil"><Avatar name="Ali Salihoğlu" size="sm" /></Link>
        </div>
      </header>

      <main className="flex-1 space-y-5 px-4 py-4">
        {/* Match day card */}
        <Link to="/mac/canli" className="block">
          <div
            className="relative overflow-hidden rounded-2xl p-5 text-white"
            style={{ background: "linear-gradient(135deg, #A90432 0%, #7C0319 100%)", minHeight: 160 }}
          >
            <span className="absolute left-0 right-0 top-0 h-1" style={{ background: "#FDB912" }} />
            <div className="t-tiny opacity-80">BUGÜN · 21:00 · RAMS PARK</div>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full" style={{ background: "linear-gradient(135deg, #FDB912, #A90432)" }} />
                <div className="mt-1 font-display font-semibold text-[14px]">GS</div>
              </div>
              <div className="font-display font-semibold text-[20px]">vs</div>
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full" style={{ background: "linear-gradient(135deg, #FFE600, #00296B)" }} />
                <div className="mt-1 font-display font-semibold text-[14px]">FB</div>
              </div>
            </div>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 font-sans font-medium text-[14px]" style={{ color: "#A32D2D" }}>
              Tribüne Gir <ChevronRight size={14} />
            </div>
          </div>
        </Link>

        {/* Gündem strip */}
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display font-semibold text-[20px]">Gündem</h2>
            <Link to="/gundem" className="inline-flex items-center text-[13px] text-text-secondary">Tümü <ChevronRight size={16}/></Link>
          </div>
          <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-3">
              {[
                { src: "Sabah Spor", title: "Icardi sözleşmesi yenileniyor", color: "#A90432" },
                { src: "Hıncal Uluç", title: "Mertens'in dehası rakamlarda", color: "#185FA5" },
                { src: "Fanatik", title: "Galatasaray Florya'ya 50M TL ayırdı", color: "#3B6D11" },
              ].map((c) => (
                <Link key={c.title} to="/gundem" className="block w-[240px] shrink-0 overflow-hidden rounded-2xl bg-surface" style={{ border: "1px solid var(--color-border-tertiary)" }}>
                  <div className="h-32" style={{ background: `linear-gradient(135deg, ${c.color}, color-mix(in oklab, ${c.color} 60%, black))` }} />
                  <div className="p-3">
                    <div className="t-tiny text-text-tertiary">{c.src}</div>
                    <div className="mt-1 font-display font-semibold text-[15px] leading-tight line-clamp-2">{c.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trending hashtags */}
        <section>
          <h2 className="mb-3 font-display font-semibold text-[20px]">Yükselen Hashtagler</h2>
          <div className="space-y-2">
            {[
              { tag: "icardiKalsın", votes: "12.4K" },
              { tag: "derbiyeHazırız", votes: "8.4K" },
              { tag: "altyapıyaYatırım", votes: "5.2K" },
            ].map((h) => (
              <Link key={h.tag} to="/topluluk" className="flex items-center justify-between rounded-2xl bg-surface px-4 py-3" style={{ border: "1px solid var(--color-border-tertiary)" }}>
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-semibold text-[20px]" style={{ color: "#A32D2D" }}>#</span>
                  <span className="font-sans font-medium text-[15px]">{h.tag}</span>
                </div>
                <span className="font-sans text-[12px] text-text-secondary">{h.votes} oy</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Embedded poll */}
        <PollCard
          question="Yarın Mertens ilk 11'de mi başlasın?"
          options={[
            { id: "yes", label: "Evet, formda", votes: 6420 },
            { id: "no", label: "Hayır, Icardi devam etsin", votes: 3580 },
          ]}
        />
      </main>
    </PhoneFrame>
  );
}
