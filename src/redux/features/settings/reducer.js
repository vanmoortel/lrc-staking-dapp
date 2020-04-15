import LANGUAGES from '../../../constants/language';
import {
  SETTINGS_SET_LANGUAGE,
  SETTINGS_SET_WALLET_ID,
  SETTINGS_SET_WALLET_ADDRESS, SETTINGS_LOGOUT
} from './action';
import {onError, onSuccess} from "../../../utils/createAsyncAction";

const initialState = {
  language: LANGUAGES.english,
  walletID: 0,
  walletAddress: {
    value: '',
    isLoading: false,
    error: null
  },
  logout: {
    isLoading: false,
    error: null
  }
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
          value: '',
          isLoading: true,
          error: null
        }
      };
    case onSuccess(SETTINGS_SET_WALLET_ADDRESS):
      return {
        ...state,
        walletAddress: {
          ...state.walletAddress,
          value: action.data,
          isLoading: false,
          error: null
        }
      };
    case onError(SETTINGS_SET_WALLET_ADDRESS):
      return {
        ...state,
        walletAddress: {
          ...state.walletAddress,
          value: '',
          isLoading: false,
          error: action.data
        }
      };
    case SETTINGS_LOGOUT:
      return {
        ...state,
        logout: {
          ...state.logout,
          isLoading: true,
          error: null
        }
      };
    case onSuccess(SETTINGS_LOGOUT):
      return {
        ...state,
        logout: {
          ...state.logout,
          isLoading: false,
          error: null
        },
        walletID: action.data,
        walletAddress: {
          ...state.walletAddress,
          value: '',
          isLoading: false,
          error: null
        }
      };
    case onError(SETTINGS_LOGOUT):
      return {
        ...state,
        logout: {
          ...state.logout,
          isLoading: false,
          error: action.data
        },
        walletID: 0,
        walletAddress: {
          ...state.walletAddress,
          value: '',
          isLoading: false,
          error: null
        }
      };
    default:
      return state;
  }
};

export default reducer;
