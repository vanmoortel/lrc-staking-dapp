export const STEP = {
  CLAIM: 1,
  DISCLAIMER: 0,
  DONE: 2,
};

// Wait claim is done and go to next step if no error
export const checkAsyncClaimIsDone = (step, isClaiming, claim,
  onSetIsClaiming, onSetIsDone, onSetStep) => {
  if (step === STEP.CLAIM && !isClaiming && claim.isLoading) onSetIsClaiming(true);
  if (step === STEP.CLAIM && !claim.isLoading && isClaiming) {
    onSetIsClaiming(false);
    if (!claim.error) {
      onSetIsDone(true);
      onSetStep(STEP.DONE);
    }
  }
};

// Automatically close the action after 10 sec when claim is done
export const autoRedirect = (isDone, onDone) => {
  const timer = setTimeout(() => { if (isDone) onDone(); }, 10000);
  return () => {
    clearTimeout(timer);
  };
};
