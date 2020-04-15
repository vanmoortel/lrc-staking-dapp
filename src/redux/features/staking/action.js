export const STAKING_SET_CONTRACT = 'STAKING_SET_CONTRACT';
export const STAKING_GET_TOTAL_STAKE = 'STAKING_GET_TOTAL_STAKE';
export const STAKING_GET_STAKE_LIST = 'STAKING_GET_STAKE_LIST';
export const STAKING_GET_YOUR_STAKE = 'STAKING_GET_YOUR_STAKE';
export const STAKING_DO_STAKE = 'STAKING_DO_STAKE';
export const STAKING_DO_CLAIM = 'STAKING_DO_CLAIM';
export const STAKING_DO_WITHDRAW = 'STAKING_DO_WITHDRAW';

export const stakingSetContract = (contract) => ({
  data: { contract },
  type: STAKING_SET_CONTRACT,
});

export const stakingGetTotalStake = (contract) => ({
  data: { contract },
  type: STAKING_GET_TOTAL_STAKE,
});

export const stakingGetStakeList = (contract, library) => ({
  data: { contract, library },
  type: STAKING_GET_STAKE_LIST,
});

export const stakingGetYourStake = (contract, address) => ({
  data: { contract, address },
  type: STAKING_GET_YOUR_STAKE,
});

export const stakingDoStake = (contract, address, amount) => ({
  data: { contract, address, amount },
  type: STAKING_DO_STAKE,
});

export const stakingDoClaim = (contract, address ) => ({
  data: { contract, address },
  type: STAKING_DO_CLAIM,
});

export const stakingDoWithdraw = (contract, address, amount ) => ({
  data: { contract, address, amount },
  type: STAKING_DO_WITHDRAW,
});