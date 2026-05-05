import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ChevronLeft, Check } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/kyc")({
  head: () => ({ meta: [{ title: "TRİBÜN — Kimlik Doğrulama" }] }),
  component: KycScreen,
});

function KycScreen() {
  const navigate = useNavigate();
  const [state, setState] = useState<"idle" | "verifying" | "done">("idle");

  useEffect(() => {
    if (state === "verifying") {
      const t = setTimeout(() => setState("done"), 3000);
      return () => clearTimeout(t);
    }
  }, [state]);

  return (
    <div className="min-h-screen w-full" style={{ background: "var(--color-bg-primary)" }}>
      <div
        className="mx-auto flex flex-col"
        style={{ width: 393, minHeight: 852, background: "var(--color-bg-primary)" }}
      >
        {/* Top bar */}
        <header className="grid grid-cols-3 items-center px-4 pt-12 pb-2">
          <Link to="/onboarding" className="text-text-primary"><ChevronLeft size={24} /></Link>
          <h1 className="text-center font-display font-semibold text-[20px]">Kimlik Doğrulama</h1>
          <span />
        </header>

        {/* Hero illustration */}
        <div className="flex flex-col items-center px-6 pt-6">
          <div
            className="flex h-32 w-48 items-center justify-center rounded-2xl"
            style={{ background: "linear-gradient(135deg,#F0E4D0,#E8DBC4)", border: "1px solid var(--color-border)" }}
          >
            <div className="h-16 w-16 rounded-full" style={{ background: "linear-gradient(135deg,#D4C4A8,#C9B998)" }} />
          </div>
          <p className="mt-6 max-w-[280px] text-center font-sans text-[14px] text-text-secondary">
            Tribün'e güvenli bir alan olması için bir kerelik kimlik doğrulaması yapıyoruz.
          </p>
        </div>

        {/* Steps */}
        <main className="flex-1 space-y-3 px-4 py-6">
          {[
            { label: "TC Kimlik No", value: "•••••••••12", done: true },
            { label: "Ön yüz fotoğrafı", value: "Yüklendi", done: true },
            { label: "Selfie", value: "Selfie hazır", done: true },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3 rounded-2xl bg-surface px-4 py-3" style={{ border: "1px solid var(--color-border-tertiary)" }}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "var(--color-success-bg)", color: "var(--color-success)" }}>
                <Check size={20} />
              </div>
              <div className="flex-1">
                <div className="font-sans font-medium text-[14px]">{s.label}</div>
                <div className="font-sans text-[12px] text-text-secondary">{s.value}</div>
              </div>
            </div>
          ))}
        </main>

        {/* CTA */}
        <div className="px-6 pb-8">
          <button
            onClick={() => state === "idle" && setState("verifying")}
            disabled={state !== "idle"}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-full font-sans font-medium text-[16px] text-white disabled:opacity-90"
            style={{ background: "#A32D2D" }}
          >
            {state === "verifying" ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Doğrulanıyor…
              </>
            ) : (
              "Doğrula"
            )}
          </button>
        </div>

        {/* Success modal */}
        {state === "done" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6">
            <div className="w-full max-w-sm rounded-3xl bg-surface p-8 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full" style={{ background: "var(--color-success-bg)", color: "var(--color-success)" }}>
                <Check size={48} strokeWidth={2.4} />
              </div>
              <div className="mt-4 font-display font-semibold text-[24px]">Hoş geldin Tribüne</div>
              <button
                onClick={() => navigate({ to: "/" })}
                className="mt-6 flex h-12 w-full items-center justify-center rounded-full font-sans font-medium text-white"
                style={{ background: "#A32D2D" }}
              >
                Devam et
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
