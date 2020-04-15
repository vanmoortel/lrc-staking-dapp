import {
  TOKEN_GET_BALANCE,
  TOKEN_GET_ALLOWANCE,
  TOKEN_SET_CONTRACT,
  TOKEN_DO_APPROVE
} from './action';
import {onError, onHashed, onSuccess} from "../../../utils/createAsyncAction";
import {SETTINGS_LOGOUT} from "../settings/action";
import {fetchInitial, sendInitial} from "../../../utils/initialStateHelper";

const initialState = {
  contract: null,
  allowance: fetchInitial(0),
  balance: fetchInitial(0),
  approve: sendInitial()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN_SET_CONTRACT:
      return {
        ...state,
        contract: action.data.contract,
      };
    case onSuccess(SETTINGS_LOGOUT):
    case onError(SETTINGS_LOGOUT):
      return {
        ...state,
        allowance: fetchInitial(0),
        balance: fetchInitial(0),
      };
    case TOKEN_GET_ALLOWANCE:
      return {
        ...state,
        allowance: {
          ...state.allowance,
          value: 0,
          isLoading: true,
          error: null,
        }
      };
    case onSuccess(TOKEN_GET_ALLOWANCE):
      return {
        ...state,
        allowance: {
          ...state.allowance,
          value: action.data,
          isLoading: false,
          isLoaded: true,
          error: null,
        }
      };
    case onError(TOKEN_GET_ALLOWANCE):
      return {
        ...state,
        allowance: {
          ...state.allowance,
          value: 0,
          isLoading: false,
          isLoaded: false,
          error: action.data,
        }
      };
    case TOKEN_GET_BALANCE:
      return {
        ...state,
        balance: {
          ...state.balance,
          value: 0,
          isLoading: true,
          error: null,
        }
      };
    case onSuccess(TOKEN_GET_BALANCE):
      return {
        ...state,
        balance: {
          ...state.balance,
          value: action.data,
          isLoading: false,
          isLoaded: true,
          error: null,
        }
      };
    case onError(TOKEN_GET_BALANCE):
      return {
        ...state,
        balance: {
          ...state.balance,
          value: 0,
          isLoading: false,
          isLoaded: false,
          error: action.data,
        }
      };
    case TOKEN_DO_APPROVE:
      return {
        ...state,
        approve: {
          ...state.approve,
          isLoading: true,
          receipt: null,
          error: null,
        }
      };
    case onSuccess(TOKEN_DO_APPROVE):
      return {
        ...state,
        approve: {
          ...state.approve,
          isLoading: false,
          receipt: action.data,
          error: null,
        }
      };
    case onError(TOKEN_DO_APPROVE):
      return {
        ...state,
        approve: {
          ...state.approve,
          isLoading: false,
          receipt: null,
          error: action.data,
        }
      };
    default:
      return state;
  }
};

export default reducer;
