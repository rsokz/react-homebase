import * as Type from '../../../graphql/types';

type TeamType =
  | 'ATL'
  | 'BOS'
  | 'BKN'
  | 'CHA'
  | 'CHI'
  | 'CLE'
  | 'DAL'
  | 'DEN'
  | 'DET'
  | 'GSW'
  | 'HOU'
  | 'IND'
  | 'LAC'
  | 'LAL'
  | 'MEM'
  | 'MIA'
  | 'MIL'
  | 'MIN'
  | 'NOP'
  | 'NYK'
  | 'OKC'
  | 'ORL'
  | 'PHI'
  | 'PHX'
  | 'POR'
  | 'SAC'
  | 'SAS'
  | 'TOR'
  | 'UTA'
  | 'WAS';

export const teamMap: { [key in TeamType]: { name: string; icon: string } } = {
  ATL: {
    name: 'Hawks',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/atl.png'
  },
  BOS: {
    name: 'Celtics',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/bos.png'
  },
  BKN: {
    name: 'Nets',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/bkn.png'
  },
  CHA: {
    name: 'Hornets',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/cha.png'
  },
  CHI: {
    name: 'Bulls',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/chi.png'
  },
  CLE: {
    name: 'Cavaliers',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/cle.png'
  },
  DAL: {
    name: 'Mavericks',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/dal.png'
  },
  DEN: {
    name: 'Nuggets',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/den.png'
  },
  DET: {
    name: 'Pistons',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/det.png'
  },
  GSW: {
    name: 'Warriors',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png'
  },
  HOU: {
    name: 'Rockets',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/hou.png'
  },
  IND: {
    name: 'Pacers',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/ind.png'
  },
  LAC: {
    name: 'Clippers',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/lac.png'
  },
  LAL: {
    name: 'Lakers',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/lal.png'
  },
  MEM: {
    name: 'Grizzlies',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/mem.png'
  },
  MIA: {
    name: 'Heat',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/mia.png'
  },
  MIL: {
    name: 'Bucks',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/mil.png'
  },
  MIN: {
    name: 'Timberwolves',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/min.png'
  },
  NOP: {
    name: 'Pelicans',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/nop.png'
  },
  NYK: {
    name: 'Knicks',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/nyk.png'
  },
  OKC: {
    name: 'Thunder',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/okc.png'
  },
  ORL: {
    name: 'Magic',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/orl.png'
  },
  PHI: {
    name: '76ers',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/phi.png'
  },
  PHX: {
    name: 'Suns',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/phx.png'
  },
  POR: {
    name: 'Trail Blazers',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/por.png'
  },
  SAC: {
    name: 'Kings',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/sac.png'
  },
  SAS: {
    name: 'Spurs',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png'
  },
  TOR: {
    name: 'Raptors',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/tor.png'
  },
  UTA: {
    name: 'Jazz',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/uta.png'
  },
  WAS: {
    name: 'Wizards',
    icon: 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/was.png'
  }
};

export const extractGameInfo = (
  game: Type.NBAGames.Game,
  team: Type.NBAGames.Game['hTeam'] | Type.NBAGames.Game['vTeam']
) => {
  let info: string = '';

  if (game.statusNum === 1) {
    info = game.startTimeEastern;
  } else if (game.statusNum === 2) {
    info = game.period.isHalftime ? 'Halftime' : `${game.clock} - ${game.period.current}`;
  } else {
    info = 'Final';
  }

  return info;
};

export const extractGameScore = (
  game: Type.NBAGames.Game,
  team: Type.NBAGames.Game['hTeam'] | Type.NBAGames.Game['vTeam']
) => {
  let score: string = '';

  if (game.statusNum === 1) {
    score = `${team.win}-${team.loss}`;
  } else if (game.statusNum === 2) {
    score = team.score;
  } else {
    score = team.score;
  }

  return score;
};
