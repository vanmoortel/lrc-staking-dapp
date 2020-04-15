import React, {useEffect, useState} from 'react';

import extProps from './propTypes';
import {TextField, Button, Stepper, Step, StepLabel,
  StepContent, Typography, Slider, CircularProgress} from "@material-ui/core";
import numeral from "numeral";
import BigNumber from "bignumber.js";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import {checkAsyncStakeIsDone, checkEnoughAllowanceRedirectToStakeStep, timeoutConfetti} from "./logic";


const DepositStepper = ({ classes, messages, maxAmount, onApprove, onStake, allowance, stake, approve, onDone }) => {
  const [step, setStep] = useState(0);
  const [amount, setAmount] = useState(0);
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
                  className={classes.button}>
                  {messages['Back']}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setStep(1)}
                  className={classes.button}>
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
              type="text"
              placeholder={maxAmount}
              className={classes.inputLRC}
              onChange={(e) => setAmount(e.target.value <= maxAmount ? e.target.value : maxAmount)}
            />
            <Slider
              value={!maxAmount ? 0 : Math.round((amount / maxAmount) * 100)}
              defaultValue={0}
              valueLabelFormat={(value) => `${value}%`}
              getAriaValueText={() => '%'}
              aria-labelledby="discrete-slider-restrict"
              step={null}
              valueLabelDisplay="auto"
              marks={[{value: 0, label: '0%'}, {value: 25, label: '25%'}, {value: 50, label: '50%'}, {value: 75, label: '75%'}, {value: 100, label: '100%'}]}
              className={classes.sliderAmount}
              onChange={(_, value) => setAmount(maxAmount * (value / 100))}
            />
            <div className={classes.actionsContainer}>
              <div>
                <Button
                  onClick={() => setStep(0)}
                  className={classes.button}>
                  {messages['Back']}
                </Button>
                <Button
                  disabled={!amount}
                  variant="contained"
                  color="primary"
                  onClick={() => setStep(2)}
                  className={classes.button}>
                  {messages['Next']}
                </Button>
              </div>
            </div>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>{messages['Approve']}</StepLabel>
          <StepContent>
            <Typography>
              {messages['You need to allow the staking pool to take $LRC_AMOUNT from your wallet.'].split('$LRC_AMOUNT')[0]}
              <span className={`font-weight-bold ${classes.spanAmount}`}>{numeral(amount).format('(0.00a)')} LRC</span>
              {messages['You need to allow the staking pool to take $LRC_AMOUNT from your wallet.'].split('$LRC_AMOUNT')[1]}
            </Typography>
            <div className={classes.actionsContainer}>
              <div className={classes.divBackAndConfirm}>
                <Button
                  onClick={() => setStep(1)}
                  className={classes.button}>
                  {messages['Back']}
                </Button>
                <div className={classes.wrapper}>
                  <Button
                    disabled={approve.isLoading}
                    variant="contained"
                    color="primary"
                    onClick={() => onApprove(new BigNumber(amount * (10**18)).toFixed(0))}
                    className={ classes.button}>
                    { approve.isLoading && messages['Approving'] }
                    { !approve.isLoading && messages['Approve'] }
                  </Button>
                  { approve.isLoading && (<CircularProgress size={24} className={classes.buttonProgress} />)}
                </div>
              </div>
            </div>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>{messages['Stake']}</StepLabel>
          <StepContent>
            <Typography>{messages['You can now deposit your LRC to the staking pool.']}</Typography>
            <div className={classes.actionsContainer}>
              <div className={classes.divBackAndConfirm}>
                <Button
                  onClick={() => setStep(allowance.value / (10**18) >= amount ? 1 : 2)}
                  className={classes.button}>
                  {messages['Back']}
                </Button>
                <div className={classes.wrapper}>
                  <Button
                    disabled={stake.isLoading}
                    variant="contained"
                    color="primary"
                    onClick={() => onStake(new BigNumber(amount * (10**18)).toFixed(0))}
                    className={ classes.button}>
                    { stake.isLoading && messages['Staking'] }
                    { !stake.isLoading && messages['Stake'] }
                  </Button>
                  { stake.isLoading && (<CircularProgress size={24} className={classes.buttonProgress} />)}
                </div>
              </div>
            </div>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>{messages['Done']}</StepLabel>
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
};

DepositStepper.propTypes = extProps;

export default DepositStepper;