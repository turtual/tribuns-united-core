import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: KayitScreen,
});

type Team = {
  id: string;
  name: string;
  base: string;
  stripe: string;
  text: string;
};

const TEAMS: Team[] = [
  { id: "gs", name: "Galatasaray", base: "#A90432", stripe: "#FDB912", text: "GS" },
  { id: "fb", name: "Fenerbahçe", base: "#0A2240", stripe: "#FFED00", text: "FB" },
  { id: "bjk", name: "Beşiktaş", base: "#1A1A1A", stripe: "#FFFFFF", text: "BJK" },
  { id: "ts", name: "Trabzonspor", base: "#7A0E1F", stripe: "#0A2240", text: "TS" },
];

function TeamCrest({ team }: { team: Team }) {
  return (
    <div
      className="size-12 rounded-pill flex items-center justify-center overflow-hidden relative"
      style={{ backgroundColor: team.base }}
    >
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-2.5"
        style={{ backgroundColor: team.stripe, opacity: 0.85 }}
      />
      <span
        className="relative font-display"
        style={{ color: team.stripe, fontWeight: 600, fontSize: 11, letterSpacing: 0.4 }}
      >
        {team.text}
      </span>
    </div>
  );
}

function KayitScreen() {
  const [phone, setPhone] = useState("");
  const [teamId, setTeamId] = useState<string | null>("gs");

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <div className="mx-auto w-full max-w-[393px] min-h-screen flex flex-col px-6 pt-16 pb-10">
        <header className="flex flex-col items-center text-center">
          <h1
            className="font-display text-primary"
            style={{ fontWeight: 600, fontSize: 48, lineHeight: "56px", letterSpacing: "-0.02em" }}
          >
            TRİBÜN
          </h1>
          <p
            className="mt-3 text-text-secondary"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: 16, lineHeight: "24px" }}
          >
            Takımının tribününe katıl
          </p>
        </header>

        <section className="mt-10 flex-1">
          <div
            className="flex items-center gap-3 bg-surface rounded-pill border"
            style={{ borderColor: "var(--border)", height: 56, paddingLeft: 16, paddingRight: 16 }}
          >
            <span className="flex items-center gap-1.5 text-text-primary" style={{ fontSize: 16 }}>
              <span style={{ fontSize: 20, lineHeight: 1 }}>🇹🇷</span>
              <span style={{ fontWeight: 500 }}>+90</span>
            </span>
            <span className="h-6 w-px bg-border" />
            <input
              inputMode="numeric"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="5XX XXX XX XX"
              className="flex-1 bg-transparent outline-none text-text-primary placeholder:text-text-tertiary"
              style={{ fontFamily: "var(--font-sans)", fontSize: 16, letterSpacing: "0.02em" }}
            />
          </div>

          <div className="mt-7">
            <label
              className="block text-text-primary"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 14, lineHeight: "20px" }}
            >
              Takımını seç
            </label>

            <div className="mt-3 grid grid-cols-2 gap-3">
              {TEAMS.map((team) => {
                const selected = teamId === team.id;
                return (
                  <button
                    key={team.id}
                    type="button"
                    onClick={() => setTeamId(team.id)}
                    className="bg-surface rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-200"
                    style={{
                      width: "100%",
                      height: 100,
                      borderWidth: selected ? 2 : 1,
                      borderStyle: "solid",
                      borderColor: selected ? "var(--primary)" : "var(--border)",
                      transform: selected ? "scale(1.02)" : "scale(1)",
                      boxShadow: selected
                        ? "0 4px 16px -8px color-mix(in oklab, var(--primary) 40%, transparent)"
                        : "none",
                    }}
                  >
                    <TeamCrest team={team} />
                    <span
                      className="font-display text-text-primary"
                      style={{ fontWeight: 600, fontSize: 16, lineHeight: "20px" }}
                    >
                      {team.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex justify-center">
              <button
                type="button"
                className="text-text-secondary underline underline-offset-4 decoration-border hover:decoration-text-secondary"
                style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: "18px" }}
              >
                Diğer takımlar
              </button>
            </div>
          </div>
        </section>

        <footer className="mt-8">
          <button
            type="button"
            className="w-full rounded-pill bg-primary text-text-on-primary hover:bg-primary-hover transition-colors"
            style={{
              height: 56,
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 16,
              letterSpacing: "0.01em",
            }}
          >
            Devam et
          </button>
          <p
            className="mt-4 text-center text-text-tertiary"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: 12, lineHeight: "16px" }}
          >
            Devam ederek{" "}
            <span className="underline underline-offset-2 decoration-text-tertiary">
              Kullanım Koşulları
            </span>
            ’nı kabul ediyorsun
          </p>
        </footer>
      </div>
    </div>
  );
}
