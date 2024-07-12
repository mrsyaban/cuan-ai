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

export const stockData: Stock[] = [
  {
    _id: "1a2b3c4d5e6f7g8h9i0j1k2l",
    name: "Bank Negara Indonesia",
    type: "BANK",
    health: 7.2,
    fundamental: {
      net_profit: 15000,
      eps: 805.31,
      pbv: 1.35,
      roe: 13.95,
      der: 3.87,
    },
    makro: [
      { name: "interest rate", sentiment: 1 },
      { name: "inflation", sentiment: -1 },
    ],
    code: "BBNI",
  },
  {
    _id: "1m2n3o4p5q6r7s8t9u0v1w2x",
    name: "Telkom Indonesia",
    type: "TELECOM",
    health: 8.1,
    fundamental: {
      net_profit: 25000,
      eps: 253.37,
      pbv: 3.64,
      roe: 18.97,
      der: 1.21,
    },
    makro: [
      { name: "interest rate", sentiment: 1 },
      { name: "inflation", sentiment: -1 },
    ],
    code: "TLKM",
  },
  {
    _id: "1y2z3a4b5c6d7e8f9g0h1i2j",
    name: "Astra International",
    type: "AUTOMOTIVE",
    health: 7.8,
    fundamental: {
      net_profit: 18000,
      eps: 456.21,
      pbv: 2.57,
      roe: 14.85,
      der: 0.78,
    },
    makro: [
      { name: "interest rate", sentiment: 1 },
      { name: "inflation", sentiment: -1 },
    ],
    code: "ASII",
  },
  {
    _id: "1k2l3m4n5o6p7q8r9s0t1u2v",
    name: "Unilever Indonesia",
    type: "CONSUMER",
    health: 8.5,
    fundamental: {
      net_profit: 12000,
      eps: 317.89,
      pbv: 44.98,
      roe: 108.97,
      der: 0.45,
    },
    makro: [
      { name: "interest rate", sentiment: 1 },
      { name: "inflation", sentiment: -1 },
    ],
    code: "UNVR",
  },
  {
    _id: "1w2x3y4z5a6b7c8d9e0f1g2h",
    name: "Gudang Garam",
    type: "TOBACCO",
    health: 6.9,
    fundamental: {
      net_profit: 9000,
      eps: 467.11,
      pbv: 1.55,
      roe: 10.31,
      der: 0.89,
    },
    makro: [
      { name: "interest rate", sentiment: 1 },
      { name: "inflation", sentiment: -1 },
    ],
    code: "GGRM",
  },
  {
    _id: "1i2j3k4l5m6n7o8p9q0r1s2t",
    name: "Bank Mandiri",
    type: "BANK",
    health: 7.3,
    fundamental: {
      net_profit: 17000,
      eps: 903.52,
      pbv: 1.64,
      roe: 14.11,
      der: 3.25,
    },
    makro: [
      { name: "interest rate", sentiment: 1 },
      { name: "inflation", sentiment: -1 },
    ],
    code: "BMRI",
  },
  {
    _id: "1u2v3w4x5y6z7a8b9c0d1e2f",
    name: "Indofood CBP",
    type: "FOOD",
    health: 7.7,
    fundamental: {
      net_profit: 8000,
      eps: 684.47,
      pbv: 3.91,
      roe: 15.42,
      der: 1.47,
    },
    makro: [
      { name: "interest rate", sentiment: 1 },
      { name: "inflation", sentiment: -1 },
    ],
    code: "ICBP",
  },
  {
    _id: "1g2h3i4j5k6l7m8n9o0p1q2r",
    name: "Bumi Resources",
    type: "MINING",
    health: 6.4,
    fundamental: {
      net_profit: 6000,
      eps: 22.15,
      pbv: 0.89,
      roe: 4.73,
      der: 4.65,
    },
    makro: [
      { name: "interest rate", sentiment: 1 },
      { name: "inflation", sentiment: -1 },
    ],
    code: "BUMI",
  },
  {
    _id: "1s2t3u4v5w6x7y8z9a0b1c2d",
    name: "Semen Indonesia",
    type: "CEMENT",
    health: 6.8,
    fundamental: {
      net_profit: 4000,
      eps: 128.31,
      pbv: 1.05,
      roe: 7.53,
      der: 1.78,
    },
    makro: [
      { name: "interest rate", sentiment: 1 },
      { name: "inflation", sentiment: -1 },
    ],
    code: "SMGR",
  },
  {
    _id: "1e2f3g4h5i6j7k8l9m0n1o2p",
    name: "Perusahaan Gas Negara",
    type: "ENERGY",
    health: 7.1,
    fundamental: {
      net_profit: 5000,
      eps: 201.54,
      pbv: 1.23,
      roe: 11.34,
      der: 2.47,
    },
    makro: [
      { name: "interest rate", sentiment: 1 },
      { name: "inflation", sentiment: -1 },
    ],
    code: "PGAS",
  }
];
