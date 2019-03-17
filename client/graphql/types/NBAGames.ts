export interface Data {
  games: Game[];
}

export interface Game {
  gameId: string;
  isGameActivated: boolean;
  statusNum: number;
  startTimeEastern: string;
  period: { current: number; isHalftime: boolean };
  vTeam: { triCode: string; win: string; loss: string; score: string };
  hTeam: { triCode: string; win: string; loss: string; score: string };
}
