export type Fixture = {
  date: string;
  time: string;
  venue: "home" | "away";
  homeTeam: string;
  homeTeamCode: string;
  awayTeam: string;
  awayTeamCode: string;
  stadium: string;
  league: string;
};

const today = () => new Date().toISOString().slice(0, 10);

const FIXTURES: Fixture[] = [
  {
    date: today(),
    time: "21:00",
    venue: "home",
    homeTeam: "Galatasaray",
    homeTeamCode: "GS",
    awayTeam: "Fenerbahçe",
    awayTeamCode: "FB",
    stadium: "RAMS PARK",
    league: "Süper Lig",
  },
];

export function getTodayFixture(): Fixture | null {
  const t = today();
  return FIXTURES.find((f) => f.date === t) ?? null;
}

export function isMatchDay(): boolean {
  return getTodayFixture() !== null;
}
