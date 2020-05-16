import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useWeb3React } from '@web3-react/core';

import extProps from './propTypes';
import languageProvider from '../../../../translations';
import { Profile } from '../../../../components';
import { settingsLogout, settingsShowDollar } from '../../../../redux/features/settings/action';
import {
  computeYourShareAndYourTokenAge,
  fetchYourStake,
  oneTimeComputeTokenAgeDistribution,
  oneTimeFetchAllStake, oneTimeFetchTotalReward,
  oneTimeFetchTotalStake,
} from './logic';
import {
  stakingGetStakeList,
  stakingGetTotalStake,
  stakingGetYourStake,
} from '../../../../redux/features/staking/action';
import { feeGetFeeStats } from '../../../../redux/features/fee/action';

/*
 *
 * Display all the information about user stack
 *
 */

const ProfileContainer = () => {
  const { library, deactivate } = useWeb3React();
  const language = useSelector((state) => state.settings.language);
  const stakingContract = useSelector((state) => state.staking.contract);
  const feeContract = useSelector((state) => state.fee.contract);
  const totalStake = useSelector((state) => state.staking.totalStake);
  const stakeList = useSelector((state) => state.staking.stakeList);
  const yourStake = useSelector((state) => state.staking.yourStake);
  const feeStats = useSelector((state) => state.fee.feeStats);
  const isShowDollar = useSelector((state) => state.settings.isShowDollar);
  const walletAddress = useSelector((state) => state.settings.walletAddress);
  const dispatch = useDispatch();
  const getTotalStake = useCallback(() => dispatch(
    stakingGetTotalStake(stakingContract),
  ), [dispatch, stakingContract]);
  const getStakeList = useCallback(() => dispatch(
    stakingGetStakeList(stakingContract, library),
  ),
  [dispatch, stakingContract, library]);
  const getYourStake = useCallback(() => dispatch(
    stakingGetYourStake(stakingContract, walletAddress.value),
  ),
  [dispatch, stakingContract, walletAddress]);
  const getFeeStats = useCallback(() => dispatch(
    feeGetFeeStats(feeContract),
  ), [dispatch, feeContract]);
  const logout = useCallback((_walletID) => dispatch(
    settingsLogout(deactivate, _walletID),
  ), [dispatch, deactivate]);
  const setIsShowPrice = useCallback((_isShowPrice) => dispatch(
    settingsShowDollar(_isShowPrice),
  ), [dispatch]);
  const [tokenAgeList, setTokenAgeList] = useState(null);
  const [yourShare, setYourShare] = useState(null);
  const [yourTokenAge, setYourTokenAge] = useState(null);

  const messages = languageProvider[language];

  useEffect(() => {
    oneTimeFetchTotalStake(stakingContract, totalStake, getTotalStake);
  }, [stakingContract, totalStake, getTotalStake]);

  useEffect(() => {
    oneTimeFetchAllStake(stakingContract, library, stakeList, getStakeList);
  }, [stakingContract, library, stakeList, getStakeList]);

  useEffect(() => {
    oneTimeComputeTokenAgeDistribution(stakeList, tokenAgeList, setTokenAgeList);
  }, [stakeList, tokenAgeList, setTokenAgeList]);

  useEffect(() => {
    fetchYourStake(stakingContract, yourStake, walletAddress, getYourStake);
  }, [stakingContract, yourStake, walletAddress, getYourStake]);

  useEffect(() => {
    computeYourShareAndYourTokenAge(stakeList, yourStake, yourShare,
      yourTokenAge, setYourShare, setYourTokenAge);
  }, [stakeList, yourStake, yourShare, yourTokenAge, setYourShare, setYourTokenAge]);

  useEffect(() => {
    oneTimeFetchTotalReward(feeContract, feeStats, getFeeStats);
  }, [feeContract, feeStats, getFeeStats]);

  return (
    <Profile
      messages={messages}
      feesTotal={(feeStats.value.remainingReward || 0) / (10 ** 18)}
      stakeTotal={totalStake.value.balance / (10 ** 18)}
      stake={(yourStake.value.balance || 0) / (10 ** 18)}
      pendingReward={(yourStake.value.pendingReward) / (10 ** 18)}
      share={yourShare * 1 || 0}
      tokenAge={yourTokenAge || 0}
      walletAddress={walletAddress.value}
      tokenAgeList={tokenAgeList || []}
      onEditAddress={() => logout(1)}
      onLogout={() => logout(0)}
      isLoading={!feeStats.isLoaded || !totalStake.isLoaded || !yourStake.isLoaded}
      isChartLoading={!stakeList.isLoaded}
      isShowDollar={isShowDollar.value}
      loopringPrice={isShowDollar.price}
      onSetIsShowDollar={setIsShowPrice}
    />
  );
};

ProfileContainer.propTypes = extProps;

export default ProfileContainer;
