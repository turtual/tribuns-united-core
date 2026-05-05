import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

type ThemeKey = "default" | "gs-home" | "gs-away";

function Index() {
  const [theme, setTheme] = useState<ThemeKey>("default");
  const themeClass =
    theme === "gs-home" ? "theme-gs-home" : theme === "gs-away" ? "theme-gs-away" : "";

  return (
    <div className={`${themeClass} min-h-screen bg-bg-primary text-text-primary`}>
      <div className="mx-auto w-full max-w-[393px] px-5 pt-12 pb-16">
        {/* Wordmark */}
        <div className="flex items-center justify-between">
          <span className="t-h1 text-primary tracking-tight">TRİBÜN</span>
          <span className="t-tiny uppercase text-text-tertiary">Design system</span>
        </div>

        <p className="t-body-sm mt-3 text-text-secondary">
          Tek takım. Tek tribün. Editoryal ses.
        </p>

        {/* Theme switcher */}
        <div className="mt-6 flex gap-2">
          {(
            [
              { k: "default", l: "Varsayılan" },
              { k: "gs-home", l: "GS İç Saha" },
              { k: "gs-away", l: "GS Deplasman" },
            ] as { k: ThemeKey; l: string }[]
          ).map((t) => {
            const active = theme === t.k;
            return (
              <button
                key={t.k}
                onClick={() => setTheme(t.k)}
                className={`t-caption rounded-pill px-3 py-1.5 border transition-colors ${
                  active
                    ? "bg-primary text-text-on-primary border-primary"
                    : "bg-surface text-text-secondary border-border hover:border-primary"
                }`}
              >
                {t.l}
              </button>
            );
          })}
        </div>

        {/* Color swatches */}
        <section className="mt-8">
          <h2 className="t-h2">Renkler</h2>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {[
              { c: "bg-primary", l: "Primary" },
              { c: "bg-accent", l: "Accent" },
              { c: "bg-bg-secondary", l: "BG 2" },
              { c: "bg-bg-tertiary", l: "BG 3" },
              { c: "bg-success", l: "Success" },
              { c: "bg-info", l: "Info" },
              { c: "bg-warning", l: "Warning" },
              { c: "bg-surface border border-border", l: "Surface" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col items-center gap-1.5">
                <div className={`h-12 w-full rounded-lg ${s.c}`} />
                <span className="t-tiny text-text-secondary uppercase">{s.l}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mt-8 rounded-xl bg-surface p-5 border border-border-tertiary">
          <span className="t-tiny uppercase text-text-tertiary">Tipografi</span>
          <div className="mt-2 space-y-2">
            <p className="t-display text-primary">TRİBÜN</p>
            <p className="t-h1">Derbi haftası geldi</p>
            <p className="t-h2">Maç önü analiz</p>
            <p className="t-h3">Kadro tahmini</p>
            <p className="t-body-lg text-text-primary">
              Tek takım odaklı, sakin ve editoryal bir ses.
            </p>
            <p className="t-body text-text-secondary">
              Inter Regular ile gövde metni — okunabilir ve nötr.
            </p>
            <p className="t-caption uppercase text-text-tertiary">Caption · 12 / 500</p>
          </div>
        </section>

        {/* Status badges */}
        <section className="mt-8">
          <h2 className="t-h2">Statü rozetleri</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              { l: "Spor Yazarı", v: "var(--badge-yazar)" },
              { l: "Fenomen", v: "var(--badge-fenomen)" },
              { l: "Eski Futbolcu", v: "var(--badge-futbolcu)" },
              { l: "Kongre", v: "var(--badge-kongre)" },
              { l: "Kombine", v: "var(--badge-kombine)" },
            ].map((b) => (
              <span
                key={b.l}
                className="t-caption rounded-pill px-2.5 py-1 text-white"
                style={{ backgroundColor: b.v }}
              >
                {b.l}
              </span>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <section className="mt-8">
          <h2 className="t-h2">Butonlar</h2>
          <div className="mt-3 flex flex-col gap-2.5">
            <button className="t-h3 rounded-pill bg-primary text-text-on-primary py-3 hover:bg-primary-hover transition-colors">
              Destekle
            </button>
            <button className="t-h3 rounded-pill bg-accent text-accent-foreground py-3 hover:bg-accent-hover transition-colors">
              Oy ver
            </button>
            <button className="t-h3 rounded-pill bg-surface text-text-primary border border-border py-3 hover:border-primary transition-colors">
              Takip et
            </button>
          </div>
        </section>

        {/* Sample card */}
        <section className="mt-8">
          <h2 className="t-h2">Kart örneği</h2>
          <article className="mt-3 rounded-xl bg-surface border border-border-tertiary overflow-hidden">
            <div className="px-4 pt-4 flex items-center gap-2">
              <div className="size-8 rounded-pill bg-bg-tertiary" />
              <div className="flex flex-col">
                <span className="t-caption text-text-primary">Tribün Editör</span>
                <span className="t-tiny uppercase text-text-tertiary">2 saat önce</span>
              </div>
              <span
                className="ml-auto t-tiny rounded-pill px-2 py-0.5 text-white"
                style={{ backgroundColor: "var(--badge-yazar)" }}
              >
                Spor Yazarı
              </span>
            </div>
            <div className="px-4 py-3">
              <h3 className="t-h3 text-text-primary">
                Antrenmanda taktik provası: sol kanatta yeni varyasyon
              </h3>
              <p className="t-body mt-1.5 text-text-secondary">
                Teknik ekibin denediği üçlü rotasyon, derbi öncesi ipucu olabilir.
              </p>
            </div>
            <div className="px-4 pb-4 flex items-center justify-between">
              <button className="t-caption rounded-pill bg-bg-secondary text-text-primary px-3 py-1.5 border border-border">
                ♥ Destekle · 1.2K
              </button>
              <span className="t-tiny uppercase text-text-tertiary">Gündem</span>
            </div>
          </article>
        </section>

        <p className="mt-10 t-tiny uppercase text-text-tertiary text-center">
          Hazır — ilk ekranı bekliyorum
        </p>
      </div>
    </div>
  );
}
