import { all, takeLatest } from 'redux-saga/effects';
import { FEE_GET_FEE_STATS } from './action';

import { fetchContract } from '../../../utils/simpleContractFetching';

// eslint-disable-next-line func-names
const fetchFeeStats = function* (action) {
  yield fetchContract(action, 'getProtocolFeeStats', [], [{ from: 0x0 }]);
};

export default function* () {
  yield all([
    takeLatest(FEE_GET_FEE_STATS, fetchFeeStats),
  ]);
}
