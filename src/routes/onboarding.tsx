import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [{ title: "TRİBÜN — Kayıt" }] }),
  component: OnboardingScreen,
});

function OnboardingScreen() {
  const [phone, setPhone] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");

  const teams = [
    { code: "GS", name: "Galatasaray", bg: "linear-gradient(135deg,#FDB912,#A90432)" },
    { code: "FB", name: "Fenerbahçe", bg: "linear-gradient(135deg,#FFE600,#00296B)" },
    { code: "BJK", name: "Beşiktaş", bg: "linear-gradient(135deg,#FFFFFF,#1A1A1A)" },
    { code: "TS", name: "Trabzonspor", bg: "linear-gradient(135deg,#8B0000,#003F87)" },
  ];

  const canContinue = selectedTeam !== "";

  return (
    <div className="min-h-screen w-full" style={{ background: "var(--color-bg-primary)" }}>
      <div
        className="mx-auto flex flex-col"
        style={{ width: 393, minHeight: 852, background: "var(--color-bg-primary)" }}
      >
        {/* Top 1/3 */}
        <div className="flex flex-col items-center px-6 pt-24 pb-8 text-center">
          <h1
            className="font-display font-semibold"
            style={{ fontSize: 48, color: "#A32D2D", letterSpacing: "-0.02em" }}
          >
            TRİBÜN
          </h1>
          <p className="mt-3 font-sans text-[16px] text-text-secondary">Takımının tribününe katıl</p>
        </div>

        {/* Form */}
        <div className="flex-1 space-y-3 px-6">
          <div
            className="flex h-14 items-center gap-3 rounded-full bg-surface px-4"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <span className="text-[20px]">🇹🇷</span>
            <span className="font-sans font-medium text-[16px] text-text-primary">+90</span>
            <input
              inputMode="numeric"
              placeholder="555 123 45 67"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 bg-transparent font-sans text-[16px] outline-none placeholder:text-text-tertiary"
            />
          </div>

          <div
            className="space-y-3 rounded-2xl bg-surface p-4"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <div className="font-display font-semibold text-[16px]">Takımını seç</div>
            <div className="grid grid-cols-4 gap-2">
              {teams.map((t) => {
                const isSelected = selectedTeam === t.code;
                return (
                  <button
                    key={t.code}
                    type="button"
                    onClick={() => setSelectedTeam(t.code)}
                    className="flex flex-col items-center gap-1 rounded-xl p-2 transition-all"
                    style={{
                      background: isSelected ? "var(--color-bg-secondary)" : "transparent",
                      border: isSelected ? "2px solid #A32D2D" : "2px solid transparent",
                      transform: isSelected ? "scale(1.05)" : "scale(1)",
                    }}
                  >
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-full text-white font-display font-semibold text-[14px]"
                      style={{ background: t.bg }}
                    >
                      {t.code}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="text-[11px] italic text-text-tertiary">Takım seçimin kalıcıdır.</p>
          </div>

          <Link to="/topluluk" className="block text-center font-sans text-[14px] text-text-secondary underline">
            Diğer takımlar
          </Link>
        </div>

        {/* Bottom CTA */}
        <div className="px-6 pb-8 pt-4">
          {canContinue ? (
            <Link
              to="/kyc"
              className="flex h-14 w-full items-center justify-center rounded-full font-sans font-medium text-[16px] text-white transition-opacity"
              style={{ background: "#A32D2D", opacity: 1 }}
            >
              Devam et
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="flex h-14 w-full items-center justify-center rounded-full font-sans font-medium text-[16px] text-white transition-opacity"
              style={{ background: "#A32D2D", opacity: 0.5, cursor: "not-allowed" }}
            >
              Devam et
            </button>
          )}
          <p className="mt-3 text-center font-sans text-[12px] text-text-tertiary">
            {selectedTeam
              ? "Devam ederek Kullanım Koşulları'nı kabul ediyorsun"
              : "Devam etmek için takımını seç"}
          </p>
        </div>
      </div>
    </div>
  );
}
