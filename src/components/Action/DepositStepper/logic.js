export const checkEnoughAllowanceRedirectToStakeStep = (amount, allowance, step, onSetStep) => {
  if (!!amount && allowance.value >= amount && step === 2) onSetStep(3);
};

export const checkAsyncStakeIsDone = (step, isStaking, stake, onSetIsStaking, onSetIsDone, onSetStep) => {
  if (step === 3 && !isStaking && stake.isLoading) onSetIsStaking(true);
  if (step === 3 && !stake.isLoading && isStaking) {
    onSetIsStaking(false);
    if (!stake.error) {
      onSetIsDone(true);
      onSetStep(4);
    }
  }
}

export const timeoutConfetti = (isDone, onDone) => {
  let timer = setTimeout(() => { if (isDone) onDone() }, 10000)
  return () => {
    clearTimeout(timer)
  }
}