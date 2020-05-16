import Moment from 'moment';
import { safeAmount } from '../../../../utils/BigAmountHelper';

// Fetch the total amount stake in staking pool only if not already done
export const oneTimeFetchTotalStake = (stakingContract, totalStake, onGetTotalStake) => {
  if (!!stakingContract && !totalStake.isLoaded && !totalStake.isLoading) onGetTotalStake();
};

// Fetch all user stake in staking pool only if not already done
// will be used to compute chart of token age distribution and your share of reward
export const oneTimeFetchAllStake = (stakingContract, library, stakeList, onGetStakeList) => {
  if (!!stakingContract && !!library
    && !stakeList.isLoaded && !stakeList.isLoading) onGetStakeList();
};

// Compute token age distribution
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

// Fetch your own stake every time you sign in
export const fetchYourStake = (stakingContract, yourStake, walletAddress, onGetYourStake) => {
  if (!!stakingContract && !yourStake.isLoaded
    && !yourStake.isLoading && !!walletAddress.value) onGetYourStake();
};

// Compute your share of reward and your token age based on your stake and the stake of everyone
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
  const updatedYourShare = !yourPoint ? 0 : safeAmount(yourPoint)
    .div(totalPoint).multipliedBy(100).toFixed(4);
  onSetYourShare(updatedYourShare || 0);
  onSetYourTokenAge(!yourPoint ? 0 : updatedYourTokenAge);
};

// Fetch the total reward in fees pool only if not already done
export const oneTimeFetchTotalReward = (feeContract, feeStats, onGetFeeStats) => {
  if (!!feeContract && !feeStats.isLoaded && !feeStats.isLoading) onGetFeeStats();
};
