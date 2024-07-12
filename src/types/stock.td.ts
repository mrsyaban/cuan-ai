export type MacroCondition = {
  name: string;
  sentiment: number;
};

export type Fundamental = {
  net_profit: number;
  eps: number;
  pbv: number;
  roe: number;
  der: number;
};

export type Stock = {
  _id: string;
  name: string;
  type: string;
  health: number;
  fundamental: Fundamental;
  makro: MacroCondition[];
  code: string;
};

export const stockBca: Stock[] = [
  {
    _id: "66909ed15cac900aef843a9c",
    name: "Bank Central Asia",
    type: "BANK",
    health: 7.5,
    fundamental: {
      net_profit: 48000,
      eps: 398.68,
      pbv: 4.73,
      roe: 20.05,
      der: 4.81,
    },
    makro: [
      { name: "interest rate", sentiment: 1 },
      { name: "inflation", sentiment: -1 },
    ],
    code: "BBCA",
  },
  {
    _id: "66909ed15cac900aef843a9c",
    name: "Bank Central Asia",
    type: "BANK",
    health: 7.5,
    fundamental: {
      net_profit: 48000,
      eps: 398.68,
      pbv: 4.73,
      roe: 20.05,
      der: 4.81,
    },
    makro: [
      { name: "interest rate", sentiment: 1 },
      { name: "inflation", sentiment: -1 },
    ],
    code: "BBCA",
  },
  {
    _id: "66909ed15cac900aef843a9c",
    name: "Bank Central Asia",
    type: "BANK",
    health: 7.5,
    fundamental: {
      net_profit: 48000,
      eps: 398.68,
      pbv: 4.73,
      roe: 20.05,
      der: 4.81,
    },
    makro: [
      { name: "interest rate", sentiment: 1 },
      { name: "inflation", sentiment: -1 },
    ],
    code: "BBCA",
  },
  {
    _id: "66909ed15cac900aef843a9c",
    name: "Bank Central Asia",
    type: "BANK",
    health: 7.5,
    fundamental: {
      net_profit: 48000,
      eps: 398.68,
      pbv: 4.73,
      roe: 20.05,
      der: 4.81,
    },
    makro: [
      { name: "interest rate", sentiment: 1 },
      { name: "inflation", sentiment: -1 },
    ],
    code: "BBCA",
  },
];
