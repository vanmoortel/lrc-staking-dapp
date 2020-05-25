import { safeAmount, safeAmountFixed } from '../../../utils/BigAmountHelper';

export const STEP = {
  AMOUNT: 1,
  APPROVAL: 2,
  DISCLAIMER: 0,
  DONE: 4,
  STAKE: 3,
};

// Skip the step of approving if already approved
export const checkEnoughAllowanceRedirectToStakeStep = (amount, allowance, step, onSetStep) => {
  if (!!amount && safeAmount(allowance.value).isGreaterThanOrEqualTo(safeAmountFixed(amount))
    && step === STEP.APPROVAL) onSetStep(STEP.STAKE);
};

// Wait stake is done and go to next step if no error
export const checkAsyncStakeIsDone = (step, isStaking, stake,
  onSetIsStaking, onSetIsDone, onSetStep) => {
  if (step === STEP.STAKE && !isStaking && stake.isLoading) onSetIsStaking(true);
  if (step === STEP.STAKE && !stake.isLoading && isStaking) {
    onSetIsStaking(false);
    if (!stake.error) {
      onSetIsDone(true);
      onSetStep(STEP.DONE);
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
