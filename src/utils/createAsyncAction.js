// Helper to make action constant
// (eg: FETCH_SOMETHING => FETCH_SOMETHING_SUCCESS + FETCH_SOMETHING_ERROR)

export const onSuccess = (action) => `${action}_SUCCESS`;
export const onError = (action) => `${action}_ERROR`;
