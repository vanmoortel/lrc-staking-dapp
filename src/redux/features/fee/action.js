export const FEE_SET_CONTRACT = 'FEE_SET_CONTRACT';
export const FEE_GET_FEE_STATS = 'FEE_GET_FEE_STATS';

export const feeSetContract = (contract) => ({
  data: { contract },
  type: FEE_SET_CONTRACT,
});

export const feeGetFeeStats = (contract) => ({
  data: { contract },
  type: FEE_GET_FEE_STATS,
});
