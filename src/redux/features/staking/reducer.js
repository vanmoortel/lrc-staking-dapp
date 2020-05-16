import {
  STAKING_GET_YOUR_STAKE,
  STAKING_GET_TOTAL_STAKE,
  STAKING_GET_STAKE_LIST,
  STAKING_SET_CONTRACT, STAKING_DO_STAKE, STAKING_DO_CLAIM, STAKING_DO_WITHDRAW,
} from './action';
import { onError, onSuccess } from '../../../utils/createAsyncAction';
import { SETTINGS_LOGOUT } from '../settings/action';
import { fetchInitial, sendInitial } from '../../../utils/initialStateHelper';

const initialState = {
  claim: sendInitial(),
  contract: null,
  stake: sendInitial(),
  stakeList: fetchInitial([]),
  totalStake: fetchInitial({}),
  withdraw: sendInitial(),
  yourStake: fetchInitial({}),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STAKING_SET_CONTRACT:
      return {
        ...state,
        contract: action.data.contract,
      };
    case onSuccess(SETTINGS_LOGOUT):
    case onError(SETTINGS_LOGOUT):
      return {
        ...state,
        yourStake: fetchInitial({}),
      };
    case STAKING_GET_TOTAL_STAKE:
      return {
        ...state,
        totalStake: {
          ...state.totalStake,
          error: null,
          isLoading: true,
          value: {},
        },
      };
    case onSuccess(STAKING_GET_TOTAL_STAKE):
      return {
        ...state,
        totalStake: {
          ...state.totalStake,
          error: null,
          isLoaded: true,
          isLoading: false,
          value: action.data,
        },
      };
    case onError(STAKING_GET_TOTAL_STAKE):
      return {
        ...state,
        totalStake: {
          ...state.totalStake,
          error: action.data,
          isLoaded: false,
          isLoading: false,
          value: {},
        },
      };
    case STAKING_GET_YOUR_STAKE:
      return {
        ...state,
        yourStake: {
          ...state.yourStake,
          error: null,
          isLoading: true,
          value: {},
        },
      };
    case onSuccess(STAKING_GET_YOUR_STAKE):
      return {
        ...state,
        yourStake: {
          ...state.yourStake,
          error: null,
          isLoaded: true,
          isLoading: false,
          value: action.data,
        },
      };
    case onError(STAKING_GET_YOUR_STAKE):
      return {
        ...state,
        yourStake: {
          ...state.yourStake,
          error: action.data,
          isLoaded: false,
          isLoading: false,
          value: {},
        },
      };
    case STAKING_GET_STAKE_LIST:
      return {
        ...state,
        stakeList: {
          ...state.stakeList,
          error: null,
          isLoading: true,
          value: [],
        },
      };
    case onSuccess(STAKING_GET_STAKE_LIST):
      return {
        ...state,
        stakeList: {
          ...state.stakeList,
          error: null,
          isLoaded: true,
          isLoading: false,
          value: action.data,
        },
      };
    case onError(STAKING_GET_STAKE_LIST):
      return {
        ...state,
        stakeList: {
          ...state.stakeList,
          error: action.data,
          isLoaded: false,
          isLoading: false,
          value: [],
        },
      };
    case STAKING_DO_STAKE:
      return {
        ...state,
        stake: {
          ...state.stake,
          error: null,
          isLoading: true,
          receipt: null,
        },
      };
    case onSuccess(STAKING_DO_STAKE):
      return {
        ...state,
        stake: {
          ...state.stake,
          error: null,
          isLoading: false,
          receipt: action.data,
        },
      };
    case onError(STAKING_DO_STAKE):
      return {
        ...state,
        stake: {
          ...state.stake,
          error: action.data,
          isLoading: false,
          receipt: null,
        },
      };
    case STAKING_DO_CLAIM:
      return {
        ...state,
        claim: {
          ...state.claim,
          error: null,
          isLoading: true,
          receipt: null,
        },
      };
    case onSuccess(STAKING_DO_CLAIM):
      return {
        ...state,
        claim: {
          ...state.claim,
          error: null,
          isLoading: false,
          receipt: action.data,
        },
      };
    case onError(STAKING_DO_CLAIM):
      return {
        ...state,
        claim: {
          ...state.claim,
          error: action.data,
          isLoading: false,
          receipt: null,
        },
      };
    case STAKING_DO_WITHDRAW:
      return {
        ...state,
        withdraw: {
          ...state.withdraw,
          error: null,
          isLoading: true,
          receipt: null,
        },
      };
    case onSuccess(STAKING_DO_WITHDRAW):
      return {
        ...state,
        withdraw: {
          ...state.withdraw,
          error: null,
          isLoading: false,
          receipt: action.data,
        },
      };
    case onError(STAKING_DO_WITHDRAW):
      return {
        ...state,
        withdraw: {
          ...state.withdraw,
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
