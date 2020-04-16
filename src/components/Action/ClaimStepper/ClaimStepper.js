import React, { useEffect, useState } from 'react';
import {
  Button, Stepper, Step, StepLabel,
  StepContent, Typography, CircularProgress,
} from '@material-ui/core';
import numeral from 'numeral';

import extProps from './propTypes';
import { checkAsyncClaimIsDone, autoRedirect } from './logic';

/*
 *
 * Claim step: 0: information, 1: claim, 2: done
 *
 */

const ClaimStepper = React.memo(({
  classes, messages, pendingReward, onClaim, onDone, claim,
}) => {
  const [step, setStep] = useState(0);
  const [isClaiming, setIsClaiming] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    checkAsyncClaimIsDone(step, isClaiming, claim, setIsClaiming, setIsDone, setStep);
  }, [step, isClaiming, claim, setIsClaiming, setIsDone, setStep]);

  useEffect(() => {
    autoRedirect(isDone, onDone);
  }, [isDone, onDone]);

  return (
    <div className={classes.root}>
      <Stepper activeStep={step} orientation="vertical">
        <Step>
          <StepLabel>{messages['Are you sure?']}</StepLabel>
          <StepContent>
            <Typography>{messages['All your pending reward will be transferred to your stake and your stake age will be reset to today (this does not affect the age to withdraw).']}</Typography>
            <div className={classes.actionsContainer}>
              <div>
                <Button
                  disabled
                  className={classes.button}
                >
                  {messages.Back}
                </Button>
                <Button
                  disabled={!pendingReward}
                  variant="contained"
                  color="primary"
                  onClick={() => setStep(1)}
                  className={classes.button}
                >
                  {messages['I understand']}
                </Button>
              </div>
            </div>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>{messages.Claim}</StepLabel>
          <StepContent>
            <Typography>
              <span className={`font-weight-bold ${classes.spanAmount}`}>
                {numeral(pendingReward).format('(0.00a)')}
                {' '}
                LRC
              </span>
              {messages['$LRC_AMOUNT will be transferred from your pending reward to your current stake.'].split('$LRC_AMOUNT')[1]}
            </Typography>
            <div className={classes.actionsContainer}>
              <div className={classes.divBackAndConfirm}>
                <Button
                  onClick={() => setStep(0)}
                  className={classes.button}
                >
                  {messages.Back}
                </Button>
                <div className={classes.wrapper}>
                  <Button
                    disabled={claim.isLoading}
                    variant="contained"
                    color="primary"
                    onClick={onClaim}
                    className={classes.button}
                  >
                    { claim.isLoading && messages.Claiming }
                    { !claim.isLoading && messages.Claim }
                  </Button>
                  { claim.isLoading
                  && (<CircularProgress size={24} className={classes.buttonProgress} />)}
                </div>
              </div>
            </div>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>{messages.Done}</StepLabel>
          <StepContent>
            <Typography color="primary">
              {messages['Your pending rewards are now staked.']}
            </Typography>
          </StepContent>
        </Step>
      </Stepper>
    </div>
  );
});

ClaimStepper.propTypes = extProps;

export default ClaimStepper;
