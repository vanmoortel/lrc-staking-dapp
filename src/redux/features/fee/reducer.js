import {
  FEE_SET_CONTRACT,
  FEE_GET_FEE_STATS
} from './action';
import {onError, onSuccess} from "../../../utils/createAsyncAction";
import {fetchInitial} from "../../../utils/initialStateHelper";

const initialState = {
  contract: null,
  feeStats: fetchInitial({}),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FEE_SET_CONTRACT:
      return {
        ...state,
        contract: action.data.contract,
      };
    case FEE_GET_FEE_STATS:
      return {
        ...state,
        feeStats: {
          ...state.feeStats,
          value: {},
          isLoading: true,
          error: null,
        }
      };
    case onSuccess(FEE_GET_FEE_STATS):
      return {
        ...state,
        feeStats: {
          ...state.feeStats,
          value: action.data,
          isLoading: false,
          isLoaded: true,
          error: null,
        }
      };
    case onError(FEE_GET_FEE_STATS):
      return {
        ...state,
        feeStats: {
          ...state.feeStats,
          value: {},
          isLoading: false,
          isLoaded: false,
          error: action.data,
        }
      };
    default:
      return state;
  }
};

export default reducer;
