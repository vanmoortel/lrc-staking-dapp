import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import extProps from './propTypes';
import languageProvider from '../../../translations';
import { SnackbarAlert } from '../../../components';
import {useWeb3React} from "@web3-react/core";

const DisplayError = () => {
  const language = useSelector(state => state.settings.language);
  const approve = useSelector(state => state.token.approve);
  const stake = useSelector(state => state.staking.stake);
  const claim = useSelector(state => state.staking.claim);
  const withdraw = useSelector(state => state.staking.withdraw);
  const { error } = useWeb3React();
  const [web3Error, setWeb3Error] = useState('');
  const [approveError, setApproveError] = useState('');
  const [stakeError, setStakeError] = useState('');
  const [claimError, setClaimError] = useState('');
  const [withdrawError, setWithdrawError] = useState('');

  const messages = languageProvider[language];

  useEffect(() => {
    if (!!error) setWeb3Error(error.message || 'None');
  }, [error, setWeb3Error]);

  useEffect(() => {
    if (!!approve.error) setApproveError(approve.error.message || 'None');
  }, [approve, setApproveError]);

  useEffect(() => {
    if (!!stake.error) setApproveError(stake.error.message || 'None');
  }, [stake, setStakeError]);

  useEffect(() => {
    if (!!claim.error) setClaimError(claim.error.message || 'None');
  }, [claim, setClaimError]);

  useEffect(() => {
    if (!!withdraw.error) setWithdrawError(withdraw.error.message || 'None');
  }, [withdraw, setWithdrawError]);

  const AlertTwitter = ({onSetError, error, title}) => (
    <SnackbarAlert onClose={() =>onSetError('')} isOpen={!!error} severity="error">
      <>
        <strong className="d-block">{title}</strong>
        {messages['If you have any issues please contact'] + ' '}
        <a href="https://twitter.com/NolanVanmoortel" target="_blank" rel="noopener noreferrer">@NolanVanmoortel</a>
        ({error})
      </>
    </SnackbarAlert>
    );

  return (
    <>
      <AlertTwitter title={messages['Failed to open your wallet']} error={web3Error} onSetError={setWeb3Error} />
      <AlertTwitter title={messages['Failed to approve']} error={approveError} onSetError={setApproveError} />
      <AlertTwitter title={messages['Failed to stake']} error={stakeError} onSetError={setStakeError} />
      <AlertTwitter title={messages['Failed to claim']} error={claimError} onSetError={setClaimError} />
      <AlertTwitter title={messages['Failed to withdraw']} error={withdrawError} onSetError={setWithdrawError} />
    </>
  );
};

DisplayError.propTypes = extProps;

export default DisplayError;