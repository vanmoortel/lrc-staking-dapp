/* eslint-disable func-names */
import { put } from '@redux-saga/core/effects';
import { onError, onSuccess } from './createAsyncAction';

// Helper to make read request to smart contract and dispatch success or error
export const fetchContract = function* (action, method, methodParams, callParams) {
  try {
    const res = yield action.data.contract.methods[method](...methodParams).call(...callParams);
    yield put({ data: res, type: onSuccess(action.type) });
  } catch (error) {
    yield put({ data: error, type: onError(action.type) });
  }
};

// Helper to make write request to smart contract
// and dispatch success(after 1 confirmation) or error
export const sendContract = function* (action, method, methodParams, callParams) {
  try {
    const receiptResult = yield new Promise((res, rej) => {
      action.data.contract.methods[method](...methodParams).send(...callParams)
        .on('confirmation', (confirmationNumber, receipt) => {
          if (confirmationNumber) res({ confirmationNumber, receipt });
        }).on('error', rej);
    });
    yield put({ data: receiptResult, type: onSuccess(action.type) });
  } catch (error) {
    yield put({ data: error, type: onError(action.type) });
  }
};
