/* eslint-disable camelcase */
import type { AxiosError } from 'axios';
import axios from 'axios';
import Big from 'big.js';
import useSWR from 'swr';

import type { ChainGeckoId } from '~/constants/chain';
import { chains } from '~/constants/chain';
import { useCurrentChain } from '~/hooks/useCurrentChain';
import { useCurrentLanguage } from '~/hooks/useCurrentLanguage';
import { useCurrentWallet } from '~/hooks/useCurrentWallet';
import type {
  BalancePayload,
  DelegationsPayload,
  RewardPayload,
  UnbondingPayload,
  ValidatorPayload,
} from '~/models/common';
import LcdURL from '~/utils/lcdURL';

async function get<T>(path: string): Promise<T> {
  const { data } = await axios.get<T>(path);
  return data;
}

export function useBalanceSWR() {
  const currentChain = useCurrentChain();
  const currentWallet = useCurrentWallet();

  const lcdURL = LcdURL(currentChain.path);

  const requestURL = lcdURL.getBalance(currentWallet.address!);

  const fetcher = (fetchUrl: string) => get<BalancePayload>(fetchUrl);

  const { data, error, mutate } = useSWR<BalancePayload, AxiosError>(requestURL, fetcher, {
    refreshInterval: 0,
    revalidateOnFocus: false,
    isPaused: () => !currentWallet.address?.startsWith(currentChain.wallet.prefix),
  });

  const returnData = data
    ? { balance: data.result ? data.result : data.balances, pagination: data.pagination }
    : undefined;

  return {
    data: returnData,
    error,
    mutate,
  };
}

export function useDelegationsSWR() {
  const currentChain = useCurrentChain();
  const currentWallet = useCurrentWallet();

  const lcdURL = LcdURL(currentChain.path);

  const requestURL = lcdURL.getDelegations(currentWallet.address!);

  const fetcher = (fetchUrl: string) => get<DelegationsPayload>(fetchUrl);

  const { data, error, mutate } = useSWR<DelegationsPayload, AxiosError>(requestURL, fetcher, {
    refreshInterval: 0,
    revalidateOnFocus: false,
    isPaused: () => !currentWallet.address?.startsWith(currentChain.wallet.prefix),
  });

  return {
    data,
    error,
    mutate,
  };
}

export function useRewardsSWR() {
  const currentChain = useCurrentChain();
  const currentWallet = useCurrentWallet();

  const lcdURL = LcdURL(currentChain.path);

  const requestURL = lcdURL.getRewards(currentWallet.address!);

  const fetcher = (fetchUrl: string) => get<RewardPayload>(fetchUrl);

  const { data, error, mutate } = useSWR<RewardPayload, AxiosError>(requestURL, fetcher, {
    refreshInterval: 0,
    revalidateOnFocus: false,
    isPaused: () => !currentWallet.address?.startsWith(currentChain.wallet.prefix),
  });

  return {
    data,
    error,
    mutate,
  };
}

export function useUnbondingDelegationsSWR() {
  const currentChain = useCurrentChain();
  const currentWallet = useCurrentWallet();

  const lcdURL = LcdURL(currentChain.path);

  const requestURL = lcdURL.getUnbondingDelegations(currentWallet.address!);

  const fetcher = (fetchUrl: string) => get<UnbondingPayload>(fetchUrl);

  const { data, error, mutate } = useSWR<UnbondingPayload, AxiosError>(requestURL, fetcher, {
    refreshInterval: 0,
    revalidateOnFocus: false,
    isPaused: () => !currentWallet.address?.startsWith(currentChain.wallet.prefix),
  });

  return {
    data,
    error,
    mutate,
  };
}

export function useValidatorsSWR() {
  const currentChain = useCurrentChain();

  const lcdURL = LcdURL(currentChain.path);

  const requestURL = lcdURL.getValidators();

  const fetcher = (fetchUrl: string) => get<ValidatorPayload>(fetchUrl);

  const { data, error, mutate } = useSWR<ValidatorPayload, AxiosError>(requestURL, fetcher, {
    refreshInterval: 0,
    revalidateOnFocus: false,
    isPaused: () => !currentChain,
  });

  const returnData = data
    ? { validators: data.result ? data.result : data.validators, pagination: data.pagination }
    : undefined;

  return {
    data: returnData,
    error,
    mutate,
  };
}

type ChainPricePayload = Record<ChainGeckoId, { usd: number; krw: number }>;

export function useChainPriceSWR() {
  const geckoIds = Object.values(chains)
    .map((chain) => chain.coingeckoId)
    .join(',');

  const requestURL = `https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd,krw&ids=${geckoIds}`;

  const fetcher = (fetchUrl: string) => get<ChainPricePayload>(fetchUrl);

  const { data, error, mutate } = useSWR<ChainPricePayload, AxiosError>(requestURL, fetcher, {
    refreshInterval: 60000,
    revalidateOnFocus: false,
  });

  return {
    data,
    error,
    mutate,
  };
}

export function useChainSWR() {
  const currentChain = useCurrentChain();
  const currentLanguage = useCurrentLanguage();
  const balance = useBalanceSWR();
  const delegations = useDelegationsSWR();
  const unbondingDelegation = useUnbondingDelegationsSWR();
  const chainPrice = useChainPriceSWR();
  const rewards = useRewardsSWR();
  const validator = useValidatorsSWR();

  const isLoading =
    (balance.data || balance.error) &&
    (delegations.data || delegations.error) &&
    (unbondingDelegation.data || unbondingDelegation.error) &&
    (chainPrice.data || chainPrice.error) &&
    (rewards.data || rewards.error) &&
    (validator.data || validator.error);

  const availableAmount = new Big(
    balance.data?.balance?.find((item) => item.denom === currentChain.denom)?.amount || '0',
  )
    .times(currentChain.decimal)
    .toFixed(currentChain.decimalLength);

  const price = (chainPrice.data?.[currentChain.coingeckoId] || { usd: 0, krw: 0 })[
    currentLanguage === 'ko' ? 'krw' : 'usd'
  ].toFixed(currentLanguage === 'ko' ? 0 : 4);

  const delegationAmount = new Big(
    delegations.data?.result
      ?.filter((item) => item.balance?.denom === currentChain.denom)
      ?.reduce((ac, cu) => ac.plus(cu.balance.amount), new Big('0'))
      .toString() || '0',
  )
    .times(currentChain.decimal)
    .toFixed(currentChain.decimalLength);

  const unbondingAmount = new Big(
    unbondingDelegation.data?.result
      ?.map((item) => item.entries.reduce((ac, cu) => ac.plus(cu.balance), new Big('0')))
      ?.reduce((ac, cu) => ac.plus(cu), new Big('0'))
      .toString() || '0',
  )
    .times(currentChain.decimal)
    .toFixed(currentChain.decimalLength);

  const rewardAmount = new Big(
    rewards.data?.result?.total?.find((item) => item.denom === currentChain.denom)?.amount || '0',
  )
    .times(currentChain.decimal)
    .toFixed(currentChain.decimalLength);

  const totalAmount = new Big(availableAmount)
    .plus(delegationAmount)
    .plus(unbondingAmount)
    .plus(rewardAmount)
    .toString();

  const totalPrice = new Big(totalAmount).times(price).toFixed(currentLanguage === 'ko' ? 0 : 4);

  return {
    isLoading,
    swr: {
      balance,
      delegations,
      unbondingDelegation,
      chainPrice,
      rewards,
      validator,
    },
    data: {
      availableAmount,
      delegationAmount,
      unbondingAmount,
      rewardAmount,
      totalAmount,
      price,
      totalPrice,
    },
  };
}