// Wait claim is done and go to next step if no error
export const checkAsyncClaimIsDone = (step, isClaiming, claim,
  onSetIsClaiming, onSetIsDone, onSetStep) => {
  if (step === 1 && !isClaiming && claim.isLoading) onSetIsClaiming(true);
  if (step === 1 && !claim.isLoading && isClaiming) {
    onSetIsClaiming(false);
    if (!claim.error) {
      onSetIsDone(true);
      onSetStep(2);
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
