export const TOKEN_SET_CONTRACT = 'TOKEN_SET_CONTRACT';
export const TOKEN_GET_ALLOWANCE = 'TOKEN_GET_ALLOWANCE';
export const TOKEN_GET_BALANCE = 'TOKEN_GET_BALANCE';
export const TOKEN_DO_APPROVE = 'TOKEN_DO_APPROVE';

export const tokenSetContract = (contract) => ({
  data: { contract },
  type: TOKEN_SET_CONTRACT,
});

export const tokenGetAllowance = (contract, address) => ({
  data: { address, contract },
  type: TOKEN_GET_ALLOWANCE,
});

export const tokenGetBalance = (contract, address) => ({
  data: { address, contract },
  type: TOKEN_GET_BALANCE,
});


export const tokenDoApprove = (contract, address, amount) => ({
  data: { address, amount, contract },
  type: TOKEN_DO_APPROVE,
});
