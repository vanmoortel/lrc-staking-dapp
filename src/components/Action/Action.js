import React, { useState } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import extProps from './propTypes';
import depositImg from '../../assets/images/action/deposit.png';
import claimImg from '../../assets/images/action/claim.png';
import withdrawImg from '../../assets/images/action/withdraw.png';
import ActionButton from './ActionButton';
import DepositStepper from './DepositStepper';
import ClaimStepper from './ClaimStepper';
import WithdrawStepper from './WithdrawStepper';

/*
 *
 * Display all interaction with smart contract
 * stake(deposit), claim, withdraw
 * Action can be locked if watch-only or if stake younger than 90 days
 *
 */

const Action = React.memo(({
  classes, messages, onApprove, onStake, onClaim, onWithdraw,
  allowance, stake, claim, withdraw, balance, approve, isLocked,
  pendingReward, yourStake, withdrawTime, claimTime,
}) => {
  const [isShowDeposit, setIsShowDeposit] = useState(false);
  const [isShowClaim, setIsShowClaim] = useState(false);
  const [isShowWithdraw, setIsShowWithdraw] = useState(false);

  if (isShowDeposit || isShowClaim || isShowWithdraw) {
    return (
      <>
        <IconButton
          variant="outlined"
          color="primary"
          className={classes.btnBack}
          onClick={() => {
            setIsShowDeposit(false);
            setIsShowClaim(false);
            setIsShowWithdraw(false);
          }}
        >
          <FontAwesomeIcon icon={['fas', 'arrow-left']} />
        </IconButton>
        {
        isShowDeposit && (
          <DepositStepper
            messages={messages}
            maxAmount={balance.value / (10 ** 18)}
            allowance={allowance}
            onApprove={onApprove}
            onStake={onStake}
            stake={stake}
            approve={approve}
            onDone={() => setIsShowDeposit(false)}
          />

        )
      }
        {
        isShowClaim && (
          <ClaimStepper
            messages={messages}
            pendingReward={pendingReward}
            onClaim={onClaim}
            claim={claim}
            onDone={() => setIsShowClaim(false)}
          />

        )
      }
        {
        isShowWithdraw && (
          <WithdrawStepper
            messages={messages}
            maxAmount={yourStake}
            onWithdraw={onWithdraw}
            withdraw={withdraw}
            onDone={() => setIsShowWithdraw(false)}
          />

        )
      }
      </>
    );
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3} />
      <Grid item xs={12} md={6}>
        <ActionButton
          messages={messages}
          isLocked={isLocked}
          onClick={() => setIsShowDeposit(true)}
          title={messages.Stake}
          image={depositImg}
          description={messages['Deposit new token in the staking pool and start earning collected fees !']}
          waitingTime={0}
        />
      </Grid>
      <Grid item xs={12} md={3} />
      <Grid item xs={12} md={6}>
        <ActionButton
          messages={messages}
          isLocked={isLocked}
          onClick={() => setIsShowClaim(true)}
          title={messages.Claim}
          image={claimImg}
          description={messages['Claim your rewards and add them to your personal stake.']}
          waitingTime={claimTime}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <ActionButton
          messages={messages}
          isLocked={isLocked}
          onClick={() => setIsShowWithdraw(true)}
          title={messages.Withdraw}
          image={withdrawImg}
          description={messages['Withdraw your stake and miss the best opportunity of this century...']}
          waitingTime={withdrawTime}
        />
      </Grid>
    </Grid>
  );
});

Action.propTypes = extProps;

export default Action;
