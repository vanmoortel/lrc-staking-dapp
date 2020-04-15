import {put} from "@redux-saga/core/effects";
import {onError, onSuccess} from "./createAsyncAction";

export const fetchContract = function* (action, method, methodParams, callParams) {
  try {
    const res = yield action.data.contract.methods[method](...methodParams).call(...callParams);
    yield put({ data: res, type: onSuccess(action.type) })
  } catch (error) {
    yield put({ data: error, type: onError(action.type)})
  }
};

export const sendContract = function* (action, method, methodParams, callParams) {
  try {
    const receipt = yield new Promise((res, rej) => {
      action.data.contract.methods[method](...methodParams).send(...callParams)
        .on('confirmation', (confirmationNumber, receipt) => {
          if (!!confirmationNumber) res({confirmationNumber, receipt});
        }).on('error', rej);
    });
    yield put({ data: receipt, type: onSuccess(action.type) })
  } catch (error) {
    yield put({ data: error, type: onError(action.type)})
  }
};