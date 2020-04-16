import { all, takeLatest } from 'redux-saga/effects';
import { put } from '@redux-saga/core/effects';
import axios from 'axios';

import { SETTINGS_LOGOUT, SETTINGS_SET_WALLET_ADDRESS, SETTINGS_SHOW_DOLLAR } from './action';
import { onError, onSuccess } from '../../../utils/createAsyncAction';
import { GECKO_LOOPRING_PRICE } from '../../../constants/endpoint';

// eslint-disable-next-line func-names
const fetchENS = function* (action) {
  try {
    if (!action.data.walletAddress.startsWith('0x')) {
      const walletAddress = yield action.data.library.eth.ens.getAddress(action.data.walletAddress);
      yield put({ data: `${walletAddress}`, type: onSuccess(action.type) });
    } else {
      yield put({ data: action.data.walletAddress, type: onSuccess(action.type) });
    }
  } catch (error) {
    yield put({ data: error, type: onError(action.type) });
  }
};

// eslint-disable-next-line func-names
const deactivate = function* (action) {
  try {
    if (action.data.deactivate) action.data.deactivate();
    yield put({ data: action.data.walletID, type: onSuccess(action.type) });
  } catch (error) {
    yield put({ data: error, type: onError(action.type) });
  }
};

// eslint-disable-next-line func-names
const fetchLoopringPrice = function* (action) {
  try {
    const { data } = yield axios.get(GECKO_LOOPRING_PRICE);
    yield put({ data: data.loopring.usd, type: onSuccess(action.type) });
  } catch (error) {
    yield put({ data: error, type: onError(action.type) });
  }
};


export default function* () {
  yield all([
    takeLatest(SETTINGS_SET_WALLET_ADDRESS, fetchENS),
    takeLatest(SETTINGS_LOGOUT, deactivate),
    takeLatest(SETTINGS_SHOW_DOLLAR, fetchLoopringPrice),
  ]);
}
