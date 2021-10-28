const baseURL = '/images/symbol';

// chain info key
export const CHAIN = {
  COSMOS: 'cosmos',
  IRIS: 'iris',
  BAND: 'band',
  KAVA: 'kava',
  AKASH: 'akash',
  CERTIK: 'certik',
  SENTINEL: 'sentinel',
  PERSISTENCE: 'persistence',
  FETCH_AI: 'fetch-ai',
  SIFCHAIN: 'sifchain',
  CRYPTO_ORG: 'crypto-org',
  KICHAIN: 'kichain',
  STARNAME: 'starname',
  MEDIBLOC: 'medibloc',
  EMONEY: 'emoney',
  RIZON: 'rizon',
  JUNO: 'juno',
} as const;

// chain info key === path
export const chains = {
  [CHAIN.COSMOS]: {
    chainId: 'cosmoshub-4',
    name: 'cosmos',
    path: CHAIN.COSMOS,
    imgURL: `${baseURL}/cosmos.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'cosmos',
    },
    lcdURL: 'https://lcd-cosmos.cosmostation.io',
    symbolName: 'ATOM',
    denom: 'uatom',
    decimal: 6,
    coingeckoId: 'cosmos',
    fee: {
      default: '0.005',
      delegate: '0.005',
      unbond: '0.005',
      redelegate: '0.005',
      withdraw: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      unbond: '200000',
      redelegate: '300000',
      withdraw: '200000',
    },
  },
  [CHAIN.IRIS]: {
    chainId: 'irishub-1',
    name: 'iris',
    path: CHAIN.IRIS,
    imgURL: `${baseURL}/iris.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'iaa',
    },
    lcdURL: 'https://lcd-iris.cosmostation.io',
    symbolName: 'IRIS',
    denom: 'uiris',
    decimal: 6,
    coingeckoId: 'iris-network',
    fee: {
      default: '0.2',
      delegate: '0.6',
      unbond: '0.6',
      redelegate: '0.6',
      withdraw: '0.6',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      unbond: '200000',
      redelegate: '300000',
      withdraw: '200000',
    },
  },
  [CHAIN.KAVA]: {
    chainId: 'kava-8',
    name: 'kava',
    path: CHAIN.KAVA,
    imgURL: `${baseURL}/kava.png`,
    hdPath: '44/118/0/0/0',
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'kava',
    },
    lcdURL: 'https://lcd-kava.cosmostation.io',
    symbolName: 'KAVA',
    denom: 'ukava',
    decimal: 6,
    coingeckoId: 'kava',
    fee: {
      default: '0.005',
      delegate: '0.005',
      unbond: '0.005',
      redelegate: '0.005',
      withdraw: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '500000',
      unbond: '500000',
      redelegate: '500000',
      withdraw: '400000',
      withdrawReward: '500000',
      withdrawTotalReward: '1000000',
      changeRewardAddress: '500000',
    },
  },
  [CHAIN.BAND]: {
    chainId: 'laozi-mainnet',
    name: 'band',
    path: CHAIN.BAND,
    imgURL: `${baseURL}/band.png`,
    hdPath: '44/494/0/0/0',
    wallet: {
      hdPath: '44/494/0/0/0',
      prefix: 'band',
    },
    lcdURL: 'https://lcd-band.cosmostation.io',
    symbolName: 'BAND',
    denom: 'uband',
    decimal: 6,
    coingeckoId: 'band-protocol',
    fee: {
      default: '0.005',
      delegate: '0.005',
      unbond: '0.005',
      redelegate: '0.005',
      withdraw: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      unbond: '200000',
      redelegate: '200000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawTotalReward: '800000',
      changeRewardAddress: '200000',
    },
  },
  [CHAIN.AKASH]: {
    chainId: 'akashnet-2',
    name: 'akash',
    path: CHAIN.AKASH,
    imgURL: `${baseURL}/akash.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'akash',
    },
    lcdURL: 'https://lcd-akash.cosmostation.io',
    symbolName: 'AKT',
    denom: 'uakt',
    decimal: 6,
    coingeckoId: 'akash-network',
    fee: {
      default: '0.005',
      delegate: '0.005',
      unbond: '0.005',
      redelegate: '0.005',
      withdraw: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      unbond: '400000',
      redelegate: '400000',
      withdraw: '900000',
      withdrawReward: '200000',
      withdrawTotalReward: '800000',
      changeRewardAddress: '200000',
    },
  },
  [CHAIN.CERTIK]: {
    chainId: 'shentu-2.2',
    name: 'certik',
    path: CHAIN.CERTIK,
    imgURL: `${baseURL}/certik.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'certik',
    },
    lcdURL: 'https://lcd-certik.cosmostation.io',
    symbolName: 'CTK',
    denom: 'uctk',
    decimal: 6,
    coingeckoId: 'certik',
    fee: {
      default: '0.005',
      delegate: '0.005',
      unbond: '0.005',
      redelegate: '0.0075',
      withdraw: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      unbond: '200000',
      redelegate: '200000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawTotalReward: '800000',
      changeRewardAddress: '200000',
    },
  },
  [CHAIN.SENTINEL]: {
    chainId: 'sentinelhub-2',
    name: 'sentinel',
    path: CHAIN.SENTINEL,
    imgURL: `${baseURL}/sentinel.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'sent',
    },
    lcdURL: 'https://lcd-sentinel.cosmostation.io',
    symbolName: 'DVPN',
    denom: 'udvpn',
    decimal: 6,
    coingeckoId: 'sentinel-group',
    fee: {
      default: '0.02',
      delegate: '0.02',
      unbond: '0.02',
      redelegate: '0.03',
      withdraw: '0.03',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      unbond: '200000',
      redelegate: '200000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawTotalReward: '800000',
      changeRewardAddress: '200000',
    },
  },
  [CHAIN.PERSISTENCE]: {
    chainId: 'core-1',
    name: 'persistence',
    path: CHAIN.PERSISTENCE,
    imgURL: `${baseURL}/persistence.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'persistence',
    },
    lcdURL: 'https://lcd-persistence.cosmostation.io',
    symbolName: 'XPRT',
    denom: 'uxprt',
    decimal: 6,
    coingeckoId: 'persistence',
    fee: {
      default: '0.005',
      delegate: '0.005',
      unbond: '0.005',
      redelegate: '0.005',
      withdraw: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      unbond: '200000',
      redelegate: '200000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawTotalReward: '800000',
      changeRewardAddress: '200000',
    },
  },
  [CHAIN.FETCH_AI]: {
    chainId: 'fetchhub-2',
    name: 'fetch.ai',
    path: CHAIN.FETCH_AI,
    imgURL: `${baseURL}/fetch-ai.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'fetch',
    },
    lcdURL: 'https://lcd-fetchai.cosmostation.io',
    symbolName: 'FET',
    denom: 'afet',
    decimal: 18,
    coingeckoId: 'fetch-ai',
    fee: {
      default: '0.005',
      delegate: '0.005',
      unbond: '0.005',
      redelegate: '0.005',
      withdraw: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      unbond: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawTotalReward: '800000',
      changeRewardAddress: '200000',
    },
  },
  [CHAIN.SIFCHAIN]: {
    chainId: 'sifchain-1',
    name: 'sifchain',
    path: CHAIN.SIFCHAIN,
    imgURL: `${baseURL}/sifchain.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'sif',
    },
    lcdURL: 'https://lcd-sifchain.cosmostation.io',
    symbolName: 'ROWAN',
    denom: 'rowan',
    decimal: 18,
    coingeckoId: 'sifchain',
    fee: {
      default: '0.000005',
      delegate: '0.000005',
      unbond: '0.000005',
      redelegate: '0.000005',
      withdraw: '0.000005',
      withdrawReward: '200000',
      withdrawTotalReward: '800000',
      changeRewardAddress: '200000',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      unbond: '400000',
      redelegate: '400000',
      withdraw: '200000',
      withdrawReward: '300000',
      withdrawTotalReward: '900000',
      changeRewardAddress: '200000',
    },
  },
  [CHAIN.CRYPTO_ORG]: {
    chainId: 'crypto-org-chain-mainnet-1',
    name: 'crypto.org',
    path: CHAIN.CRYPTO_ORG,
    imgURL: `${baseURL}/crypto-org.png`,
    wallet: {
      hdPath: '44/394/0/0/0',
      prefix: 'cro',
    },
    lcdURL: 'https://lcd-cryptocom.cosmostation.io',
    symbolName: 'CRO',
    denom: 'basecro',
    decimal: 8,
    coingeckoId: 'crypto-com-chain',
    fee: {
      default: '0.00005',
      delegate: '0.00005',
      unbond: '0.000075',
      redelegate: '0.000075',
      withdraw: '0.000075',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      unbond: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawTotalReward: '800000',
      changeRewardAddress: '200000',
    },
  },
  [CHAIN.KICHAIN]: {
    chainId: 'kichain-1',
    name: 'kichain',
    path: CHAIN.KICHAIN,
    imgURL: `${baseURL}/kichain.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'ki',
    },
    lcdURL: 'https://lcd-kichain.cosmostation.io',
    symbolName: 'XKI',
    denom: 'uxki',
    decimal: 6,
    coingeckoId: 'ki',
    fee: {
      default: '0.005',
      delegate: '0.005',
      unbond: '0.005',
      redelegate: '0.0075',
      withdraw: '0.0075',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      unbond: '200000',
      redelegate: '200000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawTotalReward: '800000',
      changeRewardAddress: '200000',
    },
  },
  [CHAIN.STARNAME]: {
    chainId: 'iov-mainnet-ibc',
    name: 'starname',
    path: CHAIN.STARNAME,
    imgURL: `${baseURL}/starname.png`,
    wallet: {
      hdPath: '44/234/0/0/0',
      prefix: 'star',
    },
    lcdURL: 'https://lcd-iov.cosmostation.io',
    symbolName: 'IOV',
    denom: 'uiov',
    decimal: 6,
    coingeckoId: 'starname',
    fee: {
      default: '0.2',
      delegate: '0.2',
      unbond: '0.2',
      redelegate: '0.2',
      withdraw: '0.2',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      unbond: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '300000',
      withdrawTotalReward: '800000',
      changeRewardAddress: '200000',
    },
  },
  [CHAIN.MEDIBLOC]: {
    chainId: 'panacea-3',
    name: 'medibloc',
    path: CHAIN.MEDIBLOC,
    imgURL: `${baseURL}/medibloc.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'panacea',
    },
    lcdURL: 'https://lcd-medibloc.cosmostation.io',
    symbolName: 'MED',
    denom: 'umed',
    decimal: 6,
    coingeckoId: 'medibloc',
    fee: {
      default: '1',
      delegate: '1',
      unbond: '1',
      redelegate: '1',
      withdraw: '1',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      unbond: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawTotalReward: '800000',
      changeRewardAddress: '200000',
    },
  },
  [CHAIN.EMONEY]: {
    chainId: 'emoney-3',
    name: 'emoney',
    path: CHAIN.EMONEY,
    imgURL: `${baseURL}/emoney.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'emoney',
    },
    lcdURL: 'https://lcd-emoney.cosmostation.io',
    symbolName: 'NGM',
    denom: 'ungm',
    decimal: 6,
    coingeckoId: 'e-money',
    fee: {
      default: '0.25',
      delegate: '0.25',
      unbond: '0.25',
      redelegate: '0.3',
      withdraw: '0.25',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      unbond: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawTotalReward: '800000',
      changeRewardAddress: '200000',
    },
  },
  [CHAIN.RIZON]: {
    chainId: 'titan-1',
    name: 'rizon',
    path: CHAIN.RIZON,
    imgURL: `${baseURL}/rizon.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'rizon',
    },
    lcdURL: 'https://lcd-rizon.cosmostation.io',
    symbolName: 'ATOLO',
    denom: 'uatolo',
    decimal: 6,
    coingeckoId: 'hdac',
    fee: {
      default: '0.005',
      delegate: '0.005',
      unbond: '0.005',
      redelegate: '0.005',
      withdraw: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      unbond: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawTotalReward: '800000',
      changeRewardAddress: '200000',
    },
  },
  [CHAIN.JUNO]: {
    chainId: 'juno-1',
    name: 'juno',
    path: CHAIN.JUNO,
    imgURL: `${baseURL}/juno.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'juno',
    },
    lcdURL: 'https://lcd-juno.cosmostation.io',
    symbolName: 'JUNO',
    denom: 'ujuno',
    decimal: 6,
    coingeckoId: 'juno-network',
    fee: {
      default: '0.005',
      delegate: '0.005',
      unbond: '0.005',
      redelegate: '0.005',
      withdraw: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      unbond: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawTotalReward: '800000',
      changeRewardAddress: '200000',
    },
  },
} as const;

export const chainValues = Object.values(chains);

export const chainNames = chainValues.map((chain) => chain.name);
export const chainGeckoIds = chainValues.map((chain) => chain.coingeckoId);

export const chainPaths = Object.values(CHAIN);

export type ChainPath = typeof chainPaths[number];
export type ChainGeckoId = typeof chainGeckoIds[number];
export type ChainValue = typeof chainValues[number];
