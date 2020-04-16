import { all, takeLatest } from 'redux-saga/effects';
import { put } from '@redux-saga/core/effects';

import { TOKEN_GET_ALLOWANCE, TOKEN_GET_BALANCE, TOKEN_DO_APPROVE } from './action';
import { STAKING } from '../../../constants/contract';
import { fetchContract, sendContract } from '../../../utils/simpleContractFetching';

// eslint-disable-next-line func-names
const fetchAllowance = function* (action) {
  yield fetchContract(action, 'allowance', [action.data.address, STAKING.address], [{ from: 0x0 }]);
};

// eslint-disable-next-line func-names
const fetchBalance = function* (action) {
  yield fetchContract(action, 'balanceOf', [action.data.address], [{ from: 0x0 }]);
};

// eslint-disable-next-line func-names
const doApprove = function* (action) {
  yield sendContract(action, 'approve', [STAKING.address, action.data.amount],
    [{ from: action.data.address }]);
  yield put({ data: action.data, type: TOKEN_GET_ALLOWANCE });
};

export default function* () {
  yield all([
    takeLatest(TOKEN_GET_ALLOWANCE, fetchAllowance),
    takeLatest(TOKEN_GET_BALANCE, fetchBalance),
    takeLatest(TOKEN_DO_APPROVE, doApprove),
  ]);
}
