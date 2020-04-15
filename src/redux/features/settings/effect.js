import { all, takeLatest } from 'redux-saga/effects';
import {
  SETTINGS_LOGOUT,
  SETTINGS_SET_WALLET_ADDRESS
} from './action';
import {put} from "@redux-saga/core/effects";
import {onError, onSuccess} from '../../../utils/createAsyncAction';

const fetchENS = function* (action) {
  try {
    if (!action.data.walletAddress.startsWith('0x')) {
      const _walletAddress = yield action.data.library.eth.ens.getAddress(action.data.walletAddress);
      yield put({ data: `${_walletAddress}`, type: onSuccess(action.type) })
    } else {
      yield put({ data: action.data.walletAddress, type: onSuccess(action.type) })
    }
  } catch (error) {
    yield put({ data: error, type: onError(action.type)})
  }
};

const deactivate = function* (action) {
  try {
    if (!!action.data.deactivate) action.data.deactivate();
    yield put({ data: action.data.walletID, type: onSuccess(action.type) })
  } catch (error) {
    yield put({ data: error, type: onError(action.type)})
  }
}


export default function* () {
  yield all([
    takeLatest(SETTINGS_SET_WALLET_ADDRESS, fetchENS),
    takeLatest(SETTINGS_LOGOUT, deactivate),
  ]);
}
