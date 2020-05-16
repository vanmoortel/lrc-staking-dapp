import BigNumber from 'bignumber.js';

export const safeAmount = (amount) => new BigNumber(amount);
// Amount used to interact with smart contract
export const safeAmountFixed = (amount) => new BigNumber(amount).multipliedBy(10 ** 18).toFixed();
// Amount used to convert amount from smart contract to number with decimal
export const safeAmountDecimal = (amount) => new BigNumber(amount).div(10 ** 18).toString();
// Amount used to print more readable number only 8 decimal (42.9999 9999 9 => 42.9999 9999)
export const safeAmountToPrint = (amount) => new BigNumber(amount)
  .multipliedBy(10 ** 8)
  .integerValue(BigNumber.ROUND_FLOOR)
  .div(10 ** 8)
  .toString();
