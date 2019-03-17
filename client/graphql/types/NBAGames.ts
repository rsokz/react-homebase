export interface Data {
  nba: {
    games: Game[];
  };
}

export interface Game {
  gameId: string;
  isGameActivated: boolean;
  statusNum: number;
  startTimeEastern: string;
  clock: string;
  period: { current: number; isHalftime: boolean; isEndOfPeriod: boolean };
  vTeam: {
    teamId: string;
    triCode: string;
    win: string;
    loss: string;
    score: string;
  };
  hTeam: {
    teamId: string;
    triCode: string;
    win: string;
    loss: string;
    score: string;
  };
}
