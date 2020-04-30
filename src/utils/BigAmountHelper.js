import BigNumber from 'bignumber.js';

export default (amount) => new BigNumber(amount.toFixed(4) * (10 ** 18));
