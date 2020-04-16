import React, { useEffect, useState } from 'react';
import {
  TextField, Button, Stepper, Step, StepLabel,
  StepContent, Typography, Slider, CircularProgress,
} from '@material-ui/core';
import numeral from 'numeral';
import BigNumber from 'bignumber.js';

import extProps from './propTypes';
import { checkAsyncWithdrawIsDone, timeoutRedirect } from './logic';


const WithdrawStepper = ({
  classes, messages, maxAmount, onWithdraw, withdraw, onDone,
}) => {
  const [step, setStep] = useState(0);
  const [amount, setAmount] = useState(0);
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    checkAsyncWithdrawIsDone(step, isWithdrawing, withdraw, setIsWithdrawing, setIsDone, setStep);
  }, [step, isWithdrawing, withdraw, setIsWithdrawing, setIsDone, setStep]);

  useEffect(() => {
    timeoutRedirect(isDone, onDone);
  }, [isDone, onDone]);

  return (
    <div className={classes.root}>
      <Stepper activeStep={step} orientation="vertical">
        <Step>
          <StepLabel>{messages['Are you sure?']}</StepLabel>
          <StepContent>
            <Typography>{messages['When you make a withdrawal, the pending rewards will automatically be added to your stake which will result in resetting the age of your stake to today (this does not impact the age to make a withdrawal).']}</Typography>
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
          <StepLabel>{messages['Select amount']}</StepLabel>
          <StepContent>
            <Typography>{messages['Please fill in the amount of LRC you want to withdraw.']}</Typography>
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
              marks={[{ label: '0%', value: 0 }, { label: '25%', value: 25 }, { label: '50%', value: 50 }, { label: '75%', value: 75 }, { label: '100%', value: 100 }]}
              className={classes.sliderAmount}
              onChange={(_, value) => setAmount(maxAmount * (value / 100))}
            />
            <div className={classes.actionsContainer}>
              <div>
                <Button
                  disabled
                  className={classes.button}
                >
                  {messages.Back}
                </Button>
                <Button
                  disabled={!amount}
                  variant="contained"
                  color="primary"
                  onClick={() => setStep(2)}
                  className={classes.button}
                >
                  {messages.Next}
                </Button>
              </div>
            </div>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>{messages.Withdraw}</StepLabel>
          <StepContent>
            <Typography>
              <span className={`font-weight-bold ${classes.spanAmount}`}>
                {numeral(amount).format('(0.00a)')}
                {' '}
                LRC
              </span>
              {messages['$LRC_AMOUNT will be transferred from your stake to your wallet.'].split('$LRC_AMOUNT')[1]}
            </Typography>
            <div className={classes.actionsContainer}>
              <div className={classes.divBackAndConfirm}>
                <Button
                  onClick={() => setStep(1)}
                  className={classes.button}
                >
                  {messages.Back}
                </Button>
                <div className={classes.wrapper}>
                  <Button
                    disabled={withdraw.isLoading}
                    variant="contained"
                    color="primary"
                    onClick={() => onWithdraw(new BigNumber(amount * (10 ** 18)).toFixed(0))}
                    className={classes.button}
                  >
                    { withdraw.isLoading && messages.Withdrawing }
                    { !withdraw.isLoading && messages.Withdraw }
                  </Button>
                  { withdraw.isLoading
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
              {messages['Your withdrawal has been processed, we hope to see you soon :(']}
            </Typography>
          </StepContent>
        </Step>
      </Stepper>
    </div>
  );
};

WithdrawStepper.propTypes = extProps;

export default WithdrawStepper;
