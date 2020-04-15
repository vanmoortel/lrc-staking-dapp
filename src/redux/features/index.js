import { all, fork } from 'redux-saga/effects';
import settingsReducer from './settings/reducer';
import tokenReducer from './token/reducer';
import stakingReducer from './staking/reducer';
import feeReducer from './fee/reducer';

import settingsEffect from './settings/effect';
import tokenEffect from './token/effect';
import stakingEffect from './staking/effect';
import feeEffect from './fee/effect';

export const combinedReducer = {
  settings: settingsReducer,
  token: tokenReducer,
  staking: stakingReducer,
  fee: feeReducer,
};
// eslint-disable-next-line func-names
export const combinedEffect = function* () {
  yield all([
    fork(settingsEffect),
    fork(tokenEffect),
    fork(stakingEffect),
    fork(feeEffect)
  ]);
};
