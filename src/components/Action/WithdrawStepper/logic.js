// Wait withdraw is done and go to next step if no error
export const checkAsyncWithdrawIsDone = (step, isWithdrawing, withdraw,
  onSetIsWithdrawing, onSetIsDone, onSetStep) => {
  if (step === 3 && !isWithdrawing && withdraw.isLoading) onSetIsWithdrawing(true);
  if (step === 3 && !withdraw.isLoading && isWithdrawing) {
    onSetIsWithdrawing(false);
    if (!withdraw.error) {
      onSetIsDone(true);
      onSetStep(3);
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
