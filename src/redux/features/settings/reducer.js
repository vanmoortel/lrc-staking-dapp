import LANGUAGES from '../../../constants/language';
import {
  SETTINGS_SET_LANGUAGE,
  SETTINGS_SET_WALLET_ID,
  SETTINGS_SET_WALLET_ADDRESS, SETTINGS_LOGOUT, SETTINGS_SHOW_DOLLAR,
} from './action';
import { onError, onSuccess } from '../../../utils/createAsyncAction';

const initialState = {
  isShowDollar: {
    error: null,
    isLoading: false,
    price: 0,
    value: false,
  },
  language: LANGUAGES.english,
  logout: {
    error: null,
    isLoading: false,
  },
  walletAddress: {
    error: null,
    isLoading: false,
    value: '',
  },
  walletID: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SETTINGS_SET_LANGUAGE:
      return {
        ...state,
        language: action.data.language,
      };
    case SETTINGS_SET_WALLET_ID:
      return {
        ...state,
        walletID: action.data.walletID,
      };
    case SETTINGS_SET_WALLET_ADDRESS:
      return {
        ...state,
        walletAddress: {
          ...state.walletAddress,
          error: null,
          isLoading: true,
          value: '',
        },
      };
    case onSuccess(SETTINGS_SET_WALLET_ADDRESS):
      return {
        ...state,
        walletAddress: {
          ...state.walletAddress,
          error: null,
          isLoading: false,
          value: action.data,
        },
      };
    case onError(SETTINGS_SET_WALLET_ADDRESS):
      return {
        ...state,
        walletAddress: {
          ...state.walletAddress,
          error: action.data,
          isLoading: false,
          value: '',
        },
      };
    case SETTINGS_LOGOUT:
      return {
        ...state,
        logout: {
          ...state.logout,
          error: null,
          isLoading: true,
        },
      };
    case onSuccess(SETTINGS_LOGOUT):
      return {
        ...state,
        logout: {
          ...state.logout,
          error: null,
          isLoading: false,
        },
        walletAddress: {
          ...state.walletAddress,
          error: null,
          isLoading: false,
          value: '',
        },
        walletID: action.data,
      };
    case onError(SETTINGS_LOGOUT):
      return {
        ...state,
        logout: {
          ...state.logout,
          error: action.data,
          isLoading: false,
        },
        walletAddress: {
          ...state.walletAddress,
          error: null,
          isLoading: false,
          value: '',
        },
        walletID: 0,
      };
    case SETTINGS_SHOW_DOLLAR:
      return {
        ...state,
        isShowDollar: {
          ...state.isShowDollar,
          error: null,
          isLoading: true,
          price: 0,
          value: action.data.isShowDollar,
        },
      };
    case onSuccess(SETTINGS_SHOW_DOLLAR):
      return {
        ...state,
        isShowDollar: {
          ...state.isShowDollar,
          error: null,
          isLoading: false,
          price: action.data,
        },
      };
    case onError(SETTINGS_SHOW_DOLLAR):
      return {
        ...state,
        isShowDollar: {
          ...state.isShowDollar,
          error: action.data,
          isLoading: false,
          price: 0,
          value: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
