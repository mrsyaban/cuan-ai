import { Stock } from "./stock.td";

export const portoUser: Stock[] = [
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
      _id: "1a2b3c4d5e6f7g8h9i0j1k2z",
      name: "Adaro Energy",
      type: "ENERGY",
      health: 7.5,
      fundamental: {
        net_profit: 20000,
        eps: 500.34,
        pbv: 1.98,
        roe: 16.47,
        der: 1.87,
      },
      makro: [
        { name: "interest rate", sentiment: 1 },
        { name: "inflation", sentiment: -1 },
      ],
      code: "ADRO",
    }
  ];
