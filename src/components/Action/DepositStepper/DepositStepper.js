import React, { useEffect, useState } from 'react';
import {
  TextField, Button, Stepper, Step, StepLabel,
  StepContent, Typography, Slider, CircularProgress,
} from '@material-ui/core';
import numeral from 'numeral';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

import extProps from './propTypes';
import {
  checkAsyncStakeIsDone, checkEnoughAllowanceRedirectToStakeStep, timeoutConfetti, STEP,
} from './logic';
import { safeAmount, safeAmountFixed, safeAmountToPrint } from '../../../utils/BigAmountHelper';

/*
 *
 * Stake(Deposit) step: 0: information, 1: enter amount, 2: approve(skip if already approved),
 * 3: stake, 4: done with confetti
 *
 */

const DepositStepper = React.memo(({
  classes, messages, maxAmount, onApprove, onStake, allowance, stake, approve, onDone,
}) => {
  const [step, setStep] = useState(0);
  const [amount, setAmount] = useState('0');
  const [isStaking, setIsStaking] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    checkEnoughAllowanceRedirectToStakeStep(amount, allowance, step, setStep);
  }, [amount, allowance, step, setStep]);

  useEffect(() => {
    checkAsyncStakeIsDone(step, isStaking, stake, setIsStaking, setIsDone, setStep);
  }, [step, isStaking, stake, setIsStaking, setIsDone, setStep]);

  useEffect(() => {
    timeoutConfetti(isDone, onDone);
  }, [isDone, onDone]);

  return (
    <div className={classes.root}>
      <Stepper activeStep={step} orientation="vertical">
        <Step>
          <StepLabel>{messages['Are you sure?']}</StepLabel>
          <StepContent>
            <Typography>{messages['Your tokens will be locked until your stake age is older than 90 day. If you add new tokens into your stake, your age will be weighted by the amount of tokens.']}</Typography>
            <div className={classes.actionsContainer}>
              <div>
                <Button
                  disabled
                  className={classes.button}
                >
                  {messages.Back}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setStep(STEP.AMOUNT)}
                  className={classes.button}
                >
                  {messages['I understand']}
                </Button>
              </div>
            </div>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>{messages['Select amount']}</StepLabel>
          <StepContent>
            <Typography>{messages['Please fill in the amount of LRC you want to stake.']}</Typography>
            <TextField
              value={amount}
              variant="outlined"
              label="Amount"
              fullWidth
              type="number"
              placeholder={safeAmountToPrint(maxAmount)}
              className={classes.inputLRC}
              onChange={(e) => setAmount(safeAmount(e.target.value || 0)
                .isLessThanOrEqualTo(maxAmount)
                ? e.target.value : safeAmountToPrint(maxAmount))}
            />
            <Slider
              value={safeAmount(maxAmount).isZero()
                ? 0 : safeAmount(amount).div(maxAmount).multipliedBy(100).toFixed(0) * 1}
              defaultValue={0}
              valueLabelFormat={(value) => `${value}%`}
              getAriaValueText={() => '%'}
              aria-labelledby="discrete-slider-restrict"
              step={null}
              valueLabelDisplay="auto"
              marks={[{ label: '0%', value: 0 }, { label: '25%', value: 25 }, { label: '50%', value: 50 }, { label: '75%', value: 75 }, { label: '100%', value: 100 }]}
              className={classes.sliderAmount}
              onChange={(_, value) => setAmount(safeAmountToPrint(safeAmount(maxAmount)
                .multipliedBy(value / 100)))}
            />
            <div className={classes.actionsContainer}>
              <div>
                <Button
                  onClick={() => setStep(STEP.DISCLAIMER)}
                  className={classes.button}
                >
                  {messages.Back}
                </Button>
                <Button
                  disabled={safeAmount(amount).isLessThanOrEqualTo(0)}
                  variant="contained"
                  color="primary"
                  onClick={() => setStep(STEP.APPROVAL)}
                  className={classes.button}
                >
                  {messages.Next}
                </Button>
              </div>
            </div>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>{messages.Approve}</StepLabel>
          <StepContent>
            <Typography>
              {messages['You need to allow the staking pool to take $LRC_AMOUNT from your wallet.'].split('$LRC_AMOUNT')[0]}
              <span className={`font-weight-bold ${classes.spanAmount}`}>
                {numeral(amount).format('(0.00a)')}
                {' '}
                LRC
              </span>
              {messages['You need to allow the staking pool to take $LRC_AMOUNT from your wallet.'].split('$LRC_AMOUNT')[1]}
            </Typography>
            <div className={classes.actionsContainer}>
              <div className={classes.divBackAndConfirm}>
                <Button
                  onClick={() => setStep(STEP.AMOUNT)}
                  className={classes.button}
                >
                  {messages.Back}
                </Button>
                <div className={classes.wrapper}>
                  <Button
                    disabled={approve.isLoading}
                    variant="contained"
                    color="primary"
                    onClick={() => onApprove(safeAmountFixed(amount))}
                    className={classes.button}
                  >
                    { approve.isLoading && messages.Approving }
                    { !approve.isLoading && messages.Approve }
                  </Button>
                  { approve.isLoading
                  && (<CircularProgress size={24} className={classes.buttonProgress} />)}
                </div>
              </div>
            </div>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>{messages.Stake}</StepLabel>
          <StepContent>
            <Typography>{messages['You can now deposit your LRC to the staking pool.']}</Typography>
            <div className={classes.actionsContainer}>
              <div className={classes.divBackAndConfirm}>
                <Button
                  onClick={() => setStep(STEP.AMOUNT)}
                  className={classes.button}
                >
                  {messages.Back}
                </Button>
                <div className={classes.wrapper}>
                  <Button
                    disabled={stake.isLoading}
                    variant="contained"
                    color="primary"
                    onClick={() => onStake(safeAmountFixed(amount))}
                    className={classes.button}
                  >
                    { stake.isLoading && messages.Staking }
                    { !stake.isLoading && messages.Stake }
                  </Button>
                  { stake.isLoading
                  && (<CircularProgress size={24} className={classes.buttonProgress} />)}
                </div>
              </div>
            </div>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>{messages.Done}</StepLabel>
          <StepContent>
            <Typography color="primary" className="animated infinite heartBeat delay-1s">
              {messages['Your Loopring token are now staked and you will start collecting fees on all trades !']}
            </Typography>
            <div className={classes.divConfetti}>
              <Confetti
                width={width}
                height={height}
              />
            </div>
          </StepContent>
        </Step>
      </Stepper>
    </div>
  );
});

DepositStepper.propTypes = extProps;

export default DepositStepper;
