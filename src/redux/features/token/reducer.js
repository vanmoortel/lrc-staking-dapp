import {
  TOKEN_GET_BALANCE,
  TOKEN_GET_ALLOWANCE,
  TOKEN_SET_CONTRACT,
  TOKEN_DO_APPROVE,
} from './action';
import { onError, onSuccess } from '../../../utils/createAsyncAction';
import { SETTINGS_LOGOUT } from '../settings/action';
import { fetchInitial, sendInitial } from '../../../utils/initialStateHelper';

const initialState = {
  allowance: fetchInitial(0),
  approve: sendInitial(),
  balance: fetchInitial(0),
  contract: null,
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
          error: null,
          isLoading: true,
          value: 0,
        },
      };
    case onSuccess(TOKEN_GET_ALLOWANCE):
      return {
        ...state,
        allowance: {
          ...state.allowance,
          error: null,
          isLoaded: true,
          isLoading: false,
          value: action.data,
        },
      };
    case onError(TOKEN_GET_ALLOWANCE):
      return {
        ...state,
        allowance: {
          ...state.allowance,
          error: action.data,
          isLoaded: false,
          isLoading: false,
          value: 0,
        },
      };
    case TOKEN_GET_BALANCE:
      return {
        ...state,
        balance: {
          ...state.balance,
          error: null,
          isLoading: true,
          value: 0,
        },
      };
    case onSuccess(TOKEN_GET_BALANCE):
      return {
        ...state,
        balance: {
          ...state.balance,
          error: null,
          isLoaded: true,
          isLoading: false,
          value: action.data,
        },
      };
    case onError(TOKEN_GET_BALANCE):
      return {
        ...state,
        balance: {
          ...state.balance,
          error: action.data,
          isLoaded: false,
          isLoading: false,
          value: 0,
        },
      };
    case TOKEN_DO_APPROVE:
      return {
        ...state,
        approve: {
          ...state.approve,
          error: null,
          isLoading: true,
          receipt: null,
        },
      };
    case onSuccess(TOKEN_DO_APPROVE):
      return {
        ...state,
        approve: {
          ...state.approve,
          error: null,
          isLoading: false,
          receipt: action.data,
        },
      };
    case onError(TOKEN_DO_APPROVE):
      return {
        ...state,
        approve: {
          ...state.approve,
          error: action.data,
          isLoading: false,
          receipt: null,
        },
      };
    default:
      return state;
  }
};

export default reducer;
