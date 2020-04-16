export const fetchInitial = (defaultValue) => ({
  error: null, isLoaded: false, isLoading: false, value: defaultValue,
});
export const sendInitial = () => ({ error: null, isLoading: false, receipt: null });
