export const checkAsyncWithdrawIsDone = (step, isWithdrawing, withdraw, onSetIsWithdrawing, onSetIsDone, onSetStep) => {
  if (step === 3 && !isWithdrawing && withdraw.isLoading) onSetIsWithdrawing(true);
  if (step === 3 && !withdraw.isLoading && isWithdrawing) {
    onSetIsWithdrawing(false);
    if (!withdraw.error) {
      onSetIsDone(true);
      onSetStep(3);
    }
  }
}

export const timeoutRedirect = (isDone, onDone) => {
  let timer = setTimeout(() => { if (isDone) onDone() }, 10000)
  return () => {
    clearTimeout(timer)
  }
}