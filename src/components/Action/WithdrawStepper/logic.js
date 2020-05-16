export const STEP = {
  AMOUNT: 1,
  DISCLAIMER: 0,
  DONE: 3,
  WITHDRAW: 2,
};

// Wait withdraw is done and go to next step if no error
export const checkAsyncWithdrawIsDone = (step, isWithdrawing, withdraw,
  onSetIsWithdrawing, onSetIsDone, onSetStep) => {
  if (step === STEP.WITHDRAW && !isWithdrawing && withdraw.isLoading) onSetIsWithdrawing(true);
  if (step === STEP.WITHDRAW && !withdraw.isLoading && isWithdrawing) {
    onSetIsWithdrawing(false);
    if (!withdraw.error) {
      onSetIsDone(true);
      onSetStep(STEP.DONE);
    }
  }
};

// Automatically close the action after 10 sec when withdraw is done
export const timeoutRedirect = (isDone, onDone) => {
  const timer = setTimeout(() => { if (isDone) onDone(); }, 10000);
  return () => {
    clearTimeout(timer);
  };
};
