import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/dogrulama")({
  component: DogrulamaScreen,
});

type Status = "idle" | "verifying" | "done";

function HeroIllustration() {
  // Hand-drawn feel: rough strokes, slight rotation, no perfect geometry
  return (
    <svg
      viewBox="0 0 320 200"
      width="280"
      height="175"
      fill="none"
      stroke="var(--primary)"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* ID Card — slightly rotated */}
      <g transform="rotate(-6 90 110)">
        <path d="M28 64 C28 60 31 57 36 57 L150 56 C155 56 158 60 158 64 L159 152 C159 156 156 159 151 159 L37 160 C32 160 29 157 29 153 Z" />
        {/* Photo box */}
        <path d="M44 78 C44 76 46 74 49 74 L82 74 C85 74 87 76 87 78 L87 116 C87 118 85 120 82 120 L49 121 C46 121 44 118 44 116 Z" />
        {/* Face inside photo */}
        <circle cx="65.5" cy="92" r="7.5" />
        <path d="M52 116 C56 107 64 104 66 104 C69 104 76 107 80 116" />
        {/* Lines for name / number */}
        <path d="M98 84 L148 83" />
        <path d="M98 96 L140 95" />
        <path d="M98 108 L146 107" />
        {/* Bottom long lines */}
        <path d="M44 134 L150 133" />
        <path d="M44 144 L130 143" opacity="0.7" />
      </g>

      {/* Selfie phone frame — slightly rotated other way */}
      <g transform="rotate(7 230 100)">
        <path d="M196 38 C196 33 200 29 205 29 L268 30 C273 30 277 34 277 39 L276 168 C276 173 272 177 267 177 L204 176 C199 176 195 172 195 167 Z" />
        {/* Notch */}
        <path d="M225 35 L248 35" />
        {/* Screen oval/face */}
        <circle cx="236.5" cy="92" r="22" />
        {/* Eyes */}
        <path d="M229 88 L229 89" strokeWidth="3" />
        <path d="M244 88 L244 89" strokeWidth="3" />
        {/* Smile */}
        <path d="M229 99 C232 103 240 103 244 99" />
        {/* Shoulders */}
        <path d="M214 138 C220 124 232 122 236 122 C240 122 252 124 258 138 L258 154" />
        {/* Home indicator */}
        <path d="M225 166 L246 166" />
      </g>

      {/* Connecting dotted arc */}
      <path
        d="M150 78 C170 60 190 60 205 78"
        strokeDasharray="2 6"
        opacity="0.55"
      />

      {/* Tiny sparkles */}
      <path d="M170 42 L170 48 M167 45 L173 45" opacity="0.7" />
      <path d="M186 158 L186 164 M183 161 L189 161" opacity="0.6" />
    </svg>
  );
}

function CameraGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 8 C4 7 5 6 6 6 H8.5 L10 4 H14 L15.5 6 H18 C19 6 20 7 20 8 V17 C20 18 19 19 18 19 H6 C5 19 4 18 4 17 Z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="animate-spin"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2.5" />
      <path
        d="M21 12 A9 9 0 0 0 12 3"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckGlyph({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12.5 L10 17.5 L19 7.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DogrulamaScreen() {
  const [tc, setTc] = useState("");
  const [year, setYear] = useState("");
  const [selfieReady, setSelfieReady] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const canSubmit = tc.length === 11 && year.length === 4 && selfieReady && status === "idle";

  const handleVerify = () => {
    if (!canSubmit) return;
    setStatus("verifying");
    timer.current = setTimeout(() => setStatus("done"), 3000);
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary relative">
      <div className="mx-auto w-full max-w-[393px] min-h-screen flex flex-col px-6 pt-14 pb-8">
        {/* Top bar */}
        <header className="relative h-10 flex items-center justify-center">
          <button
            type="button"
            aria-label="Geri"
            className="absolute left-0 size-10 -ml-2 flex items-center justify-center text-text-primary"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15 5 L8 12 L15 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h1
            className="font-display text-text-primary"
            style={{ fontWeight: 600, fontSize: 20, lineHeight: "28px" }}
          >
            Kimlik Doğrulama
          </h1>
        </header>

        {/* Hero illustration */}
        <div className="mt-4 flex items-center justify-center" style={{ height: 200 }}>
          <HeroIllustration />
        </div>

        {/* Heading + body */}
        <section className="mt-2">
          <h2
            className="font-display text-text-primary"
            style={{ fontWeight: 600, fontSize: 24, lineHeight: "32px", letterSpacing: "-0.01em" }}
          >
            Tribüne girmek için kimliğini doğrula
          </h2>
          <p
            className="mt-3 text-text-secondary"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: 14, lineHeight: "20px" }}
          >
            TRİBÜN gerçek taraftarların alanı. Botları ve sahte hesapları engellemek için TC kimlik
            numarası ve selfie istiyoruz. Bilgilerin şifrelenir, hiçbir yerde paylaşılmaz.
          </p>
        </section>

        {/* Form card */}
        <section
          className="mt-5 bg-surface rounded-xl border flex flex-col gap-4"
          style={{ borderColor: "var(--border-tertiary)", padding: 20 }}
        >
          {/* TC */}
          <label className="flex flex-col gap-1.5">
            <span
              className="text-text-secondary"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 12, lineHeight: "16px" }}
            >
              TC Kimlik No
            </span>
            <input
              inputMode="numeric"
              maxLength={11}
              value={tc}
              onChange={(e) => setTc(e.target.value.replace(/\D/g, "").slice(0, 11))}
              placeholder="12345678901"
              className="bg-transparent outline-none text-text-primary placeholder:text-text-tertiary border-b transition-colors focus:border-primary"
              style={{
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: 18,
                letterSpacing: "0.18em",
                paddingBottom: 6,
                borderColor: "var(--border)",
              }}
            />
          </label>

          {/* Year */}
          <label className="flex flex-col gap-1.5">
            <span
              className="text-text-secondary"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 12, lineHeight: "16px" }}
            >
              Doğum yılı
            </span>
            <input
              inputMode="numeric"
              maxLength={4}
              value={year}
              onChange={(e) => setYear(e.target.value.replace(/\D/g, "").slice(0, 4))}
              placeholder="1987"
              className="bg-transparent outline-none text-text-primary placeholder:text-text-tertiary border-b transition-colors focus:border-primary"
              style={{
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: 18,
                letterSpacing: "0.18em",
                paddingBottom: 6,
                borderColor: "var(--border)",
              }}
            />
          </label>

          {/* Selfie */}
          {!selfieReady ? (
            <button
              type="button"
              onClick={() => setSelfieReady(true)}
              className="w-full rounded-pill bg-surface border flex items-center justify-center gap-2 text-text-primary hover:border-primary transition-colors"
              style={{
                borderColor: "var(--border)",
                height: 52,
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 15,
              }}
            >
              <CameraGlyph />
              <span>Selfie çek</span>
            </button>
          ) : (
            <div
              className="w-full rounded-pill flex items-center gap-3 px-2"
              style={{
                backgroundColor: "var(--success-bg)",
                height: 52,
              }}
            >
              <div
                className="size-10 rounded-pill overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: "var(--bg-tertiary)" }}
                aria-hidden="true"
              >
                {/* Tiny placeholder face */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="9.5" r="3.5" stroke="var(--text-secondary)" strokeWidth="1.6" />
                  <path
                    d="M5 20 C7 16 10 14.5 12 14.5 C14 14.5 17 16 19 20"
                    stroke="var(--text-secondary)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span
                className="flex-1"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  fontSize: 14,
                  color: "var(--success)",
                }}
              >
                Selfie hazır
              </span>
              <span
                className="size-7 rounded-pill flex items-center justify-center mr-1"
                style={{ backgroundColor: "var(--success)", color: "white" }}
              >
                <CheckGlyph size={16} />
              </span>
            </div>
          )}
        </section>

        {/* Bottom CTA */}
        <div className="mt-auto pt-6">
          <button
            type="button"
            onClick={handleVerify}
            disabled={!canSubmit && status === "idle"}
            className="w-full rounded-pill bg-primary text-text-on-primary hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              height: 56,
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 16,
              letterSpacing: "0.01em",
            }}
          >
            {status === "verifying" ? (
              <>
                <Spinner />
                <span>Doğrulanıyor...</span>
              </>
            ) : (
              <span>Doğrula</span>
            )}
          </button>
        </div>
      </div>

      {/* Success modal */}
      {status === "done" && <SuccessOverlay onContinue={() => setStatus("idle")} />}
    </div>
  );
}

function SuccessOverlay({ onContinue }: { onContinue: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      style={{ backgroundColor: "color-mix(in oklab, var(--bg-primary) 92%, black 8%)" }}
    >
      <div
        className="w-full max-w-[345px] bg-surface rounded-2xl flex flex-col items-center text-center px-6 pt-8 pb-6 border"
        style={{ borderColor: "var(--border-tertiary)" }}
      >
        {/* Big check */}
        <div
          className="size-20 rounded-pill flex items-center justify-center"
          style={{ backgroundColor: "var(--success-bg)", color: "var(--success)" }}
        >
          <CheckGlyph size={44} />
        </div>

        <h2
          className="mt-5 font-display text-text-primary"
          style={{ fontWeight: 600, fontSize: 24, lineHeight: "32px", letterSpacing: "-0.01em" }}
        >
          Hoş geldin Tribüne
        </h2>
        <p
          className="mt-2 text-text-secondary"
          style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: "20px" }}
        >
          Kimliğin doğrulandı. Artık takımının tribünündesin.
        </p>

        <button
          type="button"
          onClick={onContinue}
          className="mt-6 w-full rounded-pill bg-primary text-text-on-primary hover:bg-primary-hover transition-colors"
          style={{
            height: 52,
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
          }}
        >
          Devam et
        </button>
      </div>
    </div>
  );
}
