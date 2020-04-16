import Moment from 'moment';
import BigNumber from 'bignumber.js';

export const oneTimeFetchTotalStake = (stakingContract, totalStake, onGetTotalStake) => {
  if (!!stakingContract && !totalStake.isLoaded && !totalStake.isLoading) onGetTotalStake();
};

export const oneTimeFetchAllStake = (stakingContract, library, stakeList, onGetStakeList) => {
  if (!!stakingContract && !!library
    && !stakeList.isLoaded && !stakeList.isLoading) onGetStakeList();
};

export const oneTimeComputeTokenAgeDistribution = (stakeList, tokenAgeList, onSetTokenAgeList) => {
  if (!stakeList.isLoaded || !!tokenAgeList) return;
  const tokenAgeMap = new Map();

  // eslint-disable-next-line no-restricted-syntax
  for (const stake of stakeList.value) {
    // eslint-disable-next-line no-continue
    if (stake.balance === '0') continue;
    const today = Moment();
    const day = today.diff(Moment.unix(stake.claimedAt), 'day');
    tokenAgeMap.set(day, (tokenAgeMap.get(day) || 0) + Math.round(stake.balance / (10 ** 18)));
  }

  const updatedTokenAgeList = [];
  const oldestDay = Math.max(...Array.from(tokenAgeMap.keys()));
  for (let i = oldestDay; i >= 0; i -= 1) {
    if (!updatedTokenAgeList.length) {
      updatedTokenAgeList.push((tokenAgeMap.get(i) || 0));
      // eslint-disable-next-line no-continue
      continue;
    }
    updatedTokenAgeList.push((tokenAgeMap.get(i) || 0)
      + updatedTokenAgeList[updatedTokenAgeList.length - 1]);
  }
  onSetTokenAgeList(updatedTokenAgeList);
};

export const fetchYourStake = (stakingContract, yourStake, walletAddress, onGetYourStake) => {
  if (!!stakingContract && !yourStake.isLoaded
    && !yourStake.isLoading && !!walletAddress.value) onGetYourStake();
};

export const computeYourShareAndYourTokenAge = (stakeList, yourStake, yourShare, yourTokenAge,
  onSetYourShare, onSetYourTokenAge) => {
  if (!stakeList.isLoaded || !yourStake.isLoaded) return;

  let totalPoint = 0;
  const today = Moment();
  const updatedYourTokenAge = today.diff(Moment.unix(yourStake.value.claimedAt), 'hour') / 24;
  const yourPoint = (yourStake.value.balance / (10 ** 18)) * updatedYourTokenAge;
  if (yourPoint > 0) {
    stakeList.value.forEach((_stake) => {
      totalPoint += (_stake.balance / (10 ** 18)) * (today.diff(Moment.unix(_stake.claimedAt), 'hour') / 24);
    });
  }
  const updatedYourShare = new BigNumber(!yourPoint ? 0
    : (yourPoint / totalPoint) * 100).toFixed(4);
  onSetYourShare(updatedYourShare || 0);
  onSetYourTokenAge(!yourPoint ? 0 : updatedYourTokenAge);
};

export const oneTimeFetchTotalReward = (feeContract, feeStats, onGetFeeStats) => {
  if (!!feeContract && !feeStats.isLoaded && !feeStats.isLoading) onGetFeeStats();
};
