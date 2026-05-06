import { createFileRoute, Link } from "@tanstack/react-router";
import { Settings, Bell, MessageCircle, Trophy, Shirt, ChevronRight, CalendarCheck, ClipboardList, Plus, Palette, Crown, HelpCircle, Check } from "lucide-react";
import { PhoneFrame } from "@/components/tribun/Layout";
import { Avatar } from "@/components/tribun/Avatar";
import { useTheme, PREFERENCE_LABELS, type ThemePreference } from "@/lib/tribun/theme";

export const Route = createFileRoute("/profil")({
  head: () => ({ meta: [{ title: "TRİBÜN — Profil" }] }),
  component: ProfilScreen,
});

function ProfilScreen() {
  const { preference, setPreference, resolved, isMatchDay } = useTheme();
  const resolvedLabel =
    resolved === "gs-home" ? "GS Ev Sahibi" : resolved === "gs-away" ? "GS Deplasman" : "Standart";
  const themeOptions: { value: ThemePreference; hint: string }[] = [
    { value: "auto", hint: isMatchDay ? "Bugün maç günü — tema açık" : "Maç günleri otomatik" },
    { value: "standard", hint: "Sade bej tema" },
    { value: "force-home", hint: "Kırmızı tribün" },
    { value: "force-away", hint: "Lacivert deplasman" },
  ];
  return (
    <PhoneFrame withStatusBar={false}>
      <header className="relative px-6 pb-8 pt-2 text-center" style={{ background: "linear-gradient(180deg,#A90432 0%,#7C0319 35%, rgba(250,238,218,0) 100%)" }}>
        <div className="flex items-center justify-between pt-2 text-white" style={{ height: 44 }}>
          <span className="text-[15px] font-semibold">21:47</span>
          <span className="text-[11px] font-semibold">5G</span>
        </div>
        <div className="-mx-2 mb-4 flex items-center justify-between">
          <span className="w-9" />
          <h1 className="font-display font-semibold text-[20px] text-white">Profil</h1>
          <button className="flex h-9 w-9 items-center justify-center rounded-full text-white"><Settings size={22}/></button>
        </div>
        <div className="mx-auto"><Avatar name="Ali Salihoğlu" size="xl" status="fenomen" /></div>
        <div className="mt-3 font-display font-semibold text-[24px] text-white">Ali Salihoğlu</div>
        <div className="mt-0.5 text-[14px] text-white/80">@alisa</div>
        <div className="mt-3 inline-flex items-center gap-1.5 text-white/90">
          <span className="flex h-5 w-5 items-center justify-center rounded-full font-display font-semibold text-[10px] text-white" style={{ background: "linear-gradient(135deg,#FDB912,#A90432)" }}>GS</span>
          <span className="text-[12px]">Galatasaray</span>
          <span className="text-[12px] opacity-60">·</span>
          <span className="text-[12px]">12 yıllık taraftar</span>
        </div>
      </header>

      <main className="-mt-4 flex-1 space-y-5 px-4 pb-8">
        {/* Score */}
        <section className="rounded-2xl bg-surface p-6" style={{ border: "1px solid var(--color-border-tertiary)" }}>
          <div className="font-display font-semibold text-[11px] text-text-secondary" style={{ letterSpacing: "0.12em" }}>AKTİF TARAFTAR SKORU</div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="font-display font-semibold leading-none" style={{ fontSize: 64, color: "#A32D2D" }}>87</span>
            <span className="font-display font-semibold text-[24px] text-text-tertiary">/100</span>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full" style={{ background: "var(--color-bg-secondary)" }}>
            <div className="h-full rounded-full" style={{ width: "87%", background: "linear-gradient(90deg,#A32D2D,#C73838)" }} />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { Icon: CalendarCheck, v: "23/30", l: "Maç günü" },
              { Icon: MessageCircle, v: "142", l: "Yorum" },
              { Icon: ClipboardList, v: "89", l: "Anket" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl px-3 py-2.5" style={{ background: "var(--color-bg-secondary)" }}>
                <s.Icon size={18} className="text-text-secondary" />
                <div className="mt-1 font-display font-semibold text-[16px]">{s.v}</div>
                <div className="font-sans text-[11px] text-text-secondary">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Forma */}
        <section className="relative overflow-hidden rounded-2xl p-5" style={{ background: "linear-gradient(135deg,#FFB700,#FFA500)" }}>
          <span className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.45), transparent 70%)" }} />
          <div className="relative flex items-center gap-4">
            <div className="flex h-22 w-22 items-center justify-center rounded-2xl" style={{ width: 88, height: 88, background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.4)" }}>
              <Shirt size={56} strokeWidth={1.4} color="#1A1A1A" />
            </div>
            <div className="flex-1 text-[#1A1A1A]">
              <div className="font-display font-semibold text-[11px]" style={{ letterSpacing: "0.12em" }}>AYIN FORMASI</div>
              <div className="mt-1 font-display font-semibold text-[22px]">13 puan kaldı</div>
              <div className="mt-1 font-sans text-[12px] opacity-80">GS 25-26 sezon dış saha</div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full" style={{ background: "rgba(26,26,26,0.18)" }}>
                <div className="h-full rounded-full bg-white" style={{ width: "87%" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Friends */}
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display font-semibold text-[18px]">Arkadaşlar <span className="text-text-tertiary">(24)</span></h2>
            <button className="inline-flex items-center text-[13px] text-text-secondary">Tümü <ChevronRight size={16}/></button>
          </div>
          <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-4 pb-1">
              <button className="flex w-16 shrink-0 flex-col items-center gap-1.5">
                <div className="flex items-center justify-center rounded-full" style={{ width: 60, height: 60, border: "2px dashed var(--color-border)", color: "var(--color-text-secondary)" }}><Plus size={22}/></div>
                <span className="text-[12px] text-text-secondary">Davet Et</span>
              </button>
              {["Mert", "Selin", "Burak", "Ayşe", "Cem", "Defne"].map((n) => (
                <div key={n} className="flex w-16 shrink-0 flex-col items-center gap-1.5">
                  <Avatar name={n} size="lg" ring="team" teamColor="#A90432" />
                  <span className="text-[12px]">{n}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Activity */}
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display font-semibold text-[18px]">Etkinlik</h2>
            <button className="inline-flex items-center text-[13px] text-text-secondary">Tümü <ChevronRight size={16}/></button>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface" style={{ border: "1px solid var(--color-border-tertiary)" }}>
            {[
              { Icon: Bell, t: "Mert K. seni tribüne çağırdı", time: "2s" },
              { Icon: MessageCircle, t: "Hıncal Uluç yorumunu beğendi", time: "1sa" },
              { Icon: Trophy, t: "#icardiKalsın hedefe ulaştı", time: "3sa" },
              { Icon: Shirt, t: "Eylül forma ödülünü kazandın", time: "Dün" },
            ].map((it, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3" style={{ borderTop: i === 0 ? "none" : "1px solid var(--color-border-tertiary)" }}>
                <div className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: "var(--color-bg-secondary)" }}><it.Icon size={18}/></div>
                <span className="flex-1 text-[14px]">{it.t}</span>
                <span className="text-[12px] text-text-tertiary">{it.time}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tema */}
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display font-semibold text-[18px]">Tema</h2>
            <div className="inline-flex items-center gap-1.5 text-text-secondary">
              <Palette size={14} />
              <span className="text-[12px]">{resolvedLabel}</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface" style={{ border: "1px solid var(--color-border-tertiary)" }}>
            {themeOptions.map((opt, i) => {
              const active = preference === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => setPreference(opt.value)}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left"
                  style={{
                    borderTop: i === 0 ? "none" : "1px solid var(--color-border-tertiary)",
                    background: active ? "var(--color-bg-secondary)" : "transparent",
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: 36,
                      height: 36,
                      background: active ? "#A32D2D" : "var(--color-bg-secondary)",
                      color: active ? "#FFFFFF" : "#A32D2D",
                    }}
                  >
                    {active ? <Check size={18} /> : <Palette size={18} />}
                  </div>
                  <div className="flex-1">
                    <div className="font-sans font-medium text-[14px]">{PREFERENCE_LABELS[opt.value]}</div>
                    <div className="font-sans text-[12px] text-text-secondary">{opt.hint}</div>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="mt-2 px-1 text-[11px] italic text-text-tertiary">
            Tema, maç ekranındaki paleti belirler. Otomatik modda fixture'a göre açılır.
          </div>
        </section>

        {/* Settings grid */}
        <section className="grid grid-cols-2 gap-3">
          {[
            { Icon: Bell, l: "Bildirimler" },
            { Icon: Palette, l: "Tema" },
            { Icon: Crown, l: "Premium" },
            { Icon: HelpCircle, l: "Yardım" },
          ].map((s) => (
            <button key={s.l} className="flex items-center gap-3 rounded-xl bg-surface p-4 text-left" style={{ border: "1px solid var(--color-border-tertiary)" }}>
              <div className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: "var(--color-bg-secondary)", color: "#A32D2D" }}><s.Icon size={18}/></div>
              <span className="font-sans font-medium text-[14px]">{s.l}</span>
            </button>
          ))}
        </section>

        <div className="pt-4 text-center">
          <Link to="/onboarding" className="font-sans font-medium text-[14px]" style={{ color: "#A32D2D" }}>Çıkış yap</Link>
          <div className="mt-3 text-[10px] text-text-tertiary">TRİBÜN v1.0.0 · Made with ❤️ in Türkiye</div>
        </div>
      </main>
    </PhoneFrame>
  );
}
