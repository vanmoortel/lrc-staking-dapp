// Skip the step of approving if already approved
export const checkEnoughAllowanceRedirectToStakeStep = (amount, allowance, step, onSetStep) => {
  if (!!amount && allowance.value / (10 ** 18) >= amount && step === 2) onSetStep(3);
};

// Wait stake is done and go to next step if no error
export const checkAsyncStakeIsDone = (step, isStaking, stake,
  onSetIsStaking, onSetIsDone, onSetStep) => {
  if (step === 3 && !isStaking && stake.isLoading) onSetIsStaking(true);
  if (step === 3 && !stake.isLoading && isStaking) {
    onSetIsStaking(false);
    if (!stake.error) {
      onSetIsDone(true);
      onSetStep(4);
    }
  }
};

// Display some magic confetti
// and automatically close the action after 10 sec when deposit is done
export const timeoutConfetti = (isDone, onDone) => {
  const timer = setTimeout(() => { if (isDone) onDone(); }, 10000);
  return () => {
    clearTimeout(timer);
  };
};
