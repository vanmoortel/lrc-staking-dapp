import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import extProps from './propTypes';
import languageProvider from '../../../../translations';
import { Action } from '../../../../components';
import { tokenDoApprove, tokenGetAllowance, tokenGetBalance } from '../../../../redux/features/token/action';
import { stakingDoStake, stakingDoClaim, stakingDoWithdraw } from '../../../../redux/features/staking/action';

/*
 *
 * Display all action to interact with staking pool
 * Stake(deposit), claim, withdraw
 *
 */

const ActionContainer = () => {
  const language = useSelector((state) => state.settings.language);
  const walletID = useSelector((state) => state.settings.walletID);
  const stakingContract = useSelector((state) => state.staking.contract);
  const tokenContract = useSelector((state) => state.token.contract);
  const walletAddress = useSelector((state) => state.settings.walletAddress);
  const yourStake = useSelector((state) => state.staking.yourStake);
  const allowance = useSelector((state) => state.token.allowance);
  const balance = useSelector((state) => state.token.balance);
  const approve = useSelector((state) => state.token.approve);
  const stake = useSelector((state) => state.staking.stake);
  const claim = useSelector((state) => state.staking.claim);
  const withdraw = useSelector((state) => state.staking.withdraw);
  const dispatch = useDispatch();
  const getAllowance = useCallback(() => dispatch(
    tokenGetAllowance(tokenContract, walletAddress.value),
  ), [dispatch, walletAddress, tokenContract]);
  const getBalance = useCallback(() => dispatch(
    tokenGetBalance(tokenContract, walletAddress.value),
  ), [dispatch, walletAddress, tokenContract]);
  const doApprove = useCallback((amount) => dispatch(
    tokenDoApprove(tokenContract, walletAddress.value, amount),
  ),
  [dispatch, walletAddress, tokenContract]);
  const doStake = useCallback((amount) => dispatch(
    stakingDoStake(stakingContract, walletAddress.value, amount),
  ),
  [dispatch, walletAddress, stakingContract]);
  const doClaim = useCallback(() => dispatch(
    stakingDoClaim(stakingContract, walletAddress.value),
  ),
  [dispatch, walletAddress, stakingContract]);
  const doWithdraw = useCallback((amount) => dispatch(
    stakingDoWithdraw(stakingContract, walletAddress.value, amount),
  ),
  [dispatch, walletAddress, stakingContract]);

  // Fetch the allowance(how much can be transferred to staking pool) only one time
  useEffect(() => {
    if (!!tokenContract && walletAddress.value
      && !allowance.isLoading && !allowance.isLoaded) getAllowance();
  }, [tokenContract, walletAddress, allowance, getAllowance]);

  // Fetch the amount of LRC in wallet only one time
  useEffect(() => {
    if (!!tokenContract && walletAddress.value
      && !balance.isLoading && !balance.isLoaded) getBalance();
  }, [tokenContract, walletAddress, balance, getBalance]);

  const messages = languageProvider[language];

  return (
    <Action
      messages={messages}
      allowance={allowance}
      balance={balance}
      onApprove={doApprove}
      approve={approve}
      stake={stake}
      onStake={doStake}
      isLocked={walletID === 1}
      claim={claim}
      withdraw={withdraw}
      onClaim={doClaim}
      onWithdraw={doWithdraw}
      pendingReward={(yourStake.value.pendingReward || '0')}
      yourStake={(yourStake.value.balance || '0')}
      withdrawTime={(yourStake.value.withdrawalWaitTime || 90 * 24 * 60 * 60) * 1}
      claimTime={(yourStake.value.rewardWaitTime || 90 * 24 * 60 * 60) * 1}
    />
  );
};

ActionContainer.propTypes = extProps;

export default ActionContainer;
