import {
  STAKING_GET_YOUR_STAKE,
  STAKING_GET_TOTAL_STAKE,
  STAKING_GET_STAKE_LIST,
  STAKING_SET_CONTRACT, STAKING_DO_STAKE, STAKING_DO_CLAIM, STAKING_DO_WITHDRAW
} from './action';
import {onError, onSuccess} from "../../../utils/createAsyncAction";
import {SETTINGS_LOGOUT} from "../settings/action";
import {fetchInitial, sendInitial} from "../../../utils/initialStateHelper";
import {TOKEN_DO_APPROVE} from "../token/action";

const initialState = {
  contract: null,
  totalStake: fetchInitial({}),
  stakeList: fetchInitial([]),
  yourStake: fetchInitial({}),
  stake: sendInitial(),
  claim: sendInitial(),
  withdraw: sendInitial(),
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
          value: 0,
          isLoading: true,
          error: null,
        }
      };
    case onSuccess(STAKING_GET_TOTAL_STAKE):
      return {
        ...state,
        totalStake: {
          ...state.totalStake,
          value: action.data,
          isLoading: false,
          isLoaded: true,
          error: null,
        }
      };
    case onError(STAKING_GET_TOTAL_STAKE):
      return {
        ...state,
        totalStake: {
          ...state.totalStake,
          value: 0,
          isLoading: false,
          isLoaded: false,
          error: action.data,
        }
      };
    case STAKING_GET_YOUR_STAKE:
      return {
        ...state,
        yourStake: {
          ...state.yourStake,
          value: {},
          isLoading: true,
          error: null,
        }
      };
    case onSuccess(STAKING_GET_YOUR_STAKE):
      return {
        ...state,
        yourStake: {
          ...state.yourStake,
          value: action.data,
          isLoading: false,
          isLoaded: true,
          error: null,
        }
      };
    case onError(STAKING_GET_YOUR_STAKE):
      return {
        ...state,
        yourStake: {
          ...state.yourStake,
          value: {},
          isLoading: false,
          isLoaded: false,
          error: action.data,
        }
      };
    case STAKING_GET_STAKE_LIST:
      return {
        ...state,
        stakeList: {
          ...state.stakeList,
          value: [],
          isLoading: true,
          error: null,
        }
      };
    case onSuccess(STAKING_GET_STAKE_LIST):
      return {
        ...state,
        stakeList: {
          ...state.stakeList,
          value: action.data,
          isLoading: false,
          isLoaded: true,
          error: null,
        }
      };
    case onError(STAKING_GET_STAKE_LIST):
      return {
        ...state,
        stakeList: {
          ...state.stakeList,
          value: [],
          isLoading: false,
          isLoaded: false,
          error: action.data,
        }
      };
    case STAKING_DO_STAKE:
      return {
        ...state,
        stake: {
          ...state.stake,
          isLoading: true,
          receipt: null,
          error: null,
        }
      };
    case onSuccess(STAKING_DO_STAKE):
      return {
        ...state,
        stake: {
          ...state.stake,
          isLoading: false,
          receipt: action.data,
          error: null,
        }
      };
    case onError(STAKING_DO_STAKE):
      return {
        ...state,
        stake: {
          ...state.stake,
          isLoading: false,
          receipt: null,
          error: action.data,
        }
      };
    case STAKING_DO_CLAIM:
      return {
        ...state,
        claim: {
          ...state.claim,
          isLoading: true,
          receipt: null,
          error: null,
        }
      };
    case onSuccess(STAKING_DO_CLAIM):
      return {
        ...state,
        claim: {
          ...state.claim,
          isLoading: false,
          receipt: action.data,
          error: null,
        }
      };
    case onError(STAKING_DO_CLAIM):
      return {
        ...state,
        claim: {
          ...state.claim,
          isLoading: false,
          receipt: null,
          error: action.data,
        }
      };
    case STAKING_DO_WITHDRAW:
      return {
        ...state,
        withdraw: {
          ...state.withdraw,
          isLoading: true,
          receipt: null,
          error: null,
        }
      };
    case onSuccess(STAKING_DO_WITHDRAW):
      return {
        ...state,
        withdraw: {
          ...state.withdraw,
          isLoading: false,
          receipt: action.data,
          error: null,
        }
      };
    case onError(STAKING_DO_WITHDRAW):
      return {
        ...state,
        withdraw: {
          ...state.withdraw,
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
