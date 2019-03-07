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

export const teams: { [key in TeamType]: { name: string; icon: string } } = {
  ATL: {
    name: 'Hawks',
    icon: ''
  },
  BOS: {
    name: 'Celtics',
    icon: ''
  },
  BKN: {
    name: 'Nets',
    icon: ''
  },
  CHA: {
    name: 'Hornets',
    icon: ''
  },
  CHI: {
    name: 'Bulls',
    icon: ''
  },
  CLE: {
    name: 'Cavaliers',
    icon: ''
  },
  DAL: {
    name: 'Mavericks',
    icon: ''
  },
  DEN: {
    name: 'Nuggets',
    icon: ''
  },
  DET: {
    name: 'Pistons',
    icon: ''
  },
  GSW: {
    name: 'Warriors',
    icon: ''
  },
  HOU: {
    name: 'Rockets',
    icon: ''
  },
  IND: {
    name: 'Pacers',
    icon: ''
  },
  LAC: {
    name: 'Clippers',
    icon: ''
  },
  LAL: {
    name: 'Lakers',
    icon: ''
  },
  MEM: {
    name: 'Grizzlies',
    icon: ''
  },
  MIA: {
    name: 'Heat',
    icon: ''
  },
  MIL: {
    name: 'Bucks',
    icon: ''
  },
  MIN: {
    name: 'Timberwolves',
    icon: ''
  },
  NOP: {
    name: 'Pelicans',
    icon: ''
  },
  NYK: {
    name: 'Knicks',
    icon: ''
  },
  OKC: {
    name: 'Thunder',
    icon: ''
  },
  ORL: {
    name: 'Magic',
    icon: ''
  },
  PHI: {
    name: '76ers',
    icon: ''
  },
  PHX: {
    name: 'Suns',
    icon: ''
  },
  POR: {
    name: 'Trail Blazers',
    icon: ''
  },
  SAC: {
    name: 'Kings',
    icon: ''
  },
  SAS: {
    name: 'Spurs',
    icon: ''
  },
  TOR: {
    name: 'Raptors',
    icon: ''
  },
  UTA: {
    name: 'Jazz',
    icon: ''
  },
  WAS: {
    name: 'Wizards',
    icon: ''
  }
};
