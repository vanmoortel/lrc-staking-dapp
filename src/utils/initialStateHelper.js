// Helper to make Initial state of read call smart contract
export const fetchInitial = (defaultValue) => ({
  error: null, isLoaded: false, isLoading: false, value: defaultValue,
});
// Helper to make Initial state of write call smart contract
export const sendInitial = () => ({ error: null, isLoading: false, receipt: null });
