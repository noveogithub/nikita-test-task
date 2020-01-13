import { all } from 'redux-saga/effects';

import { watchJobs } from './jobs';

export function* rootSaga() {
  yield all([
    watchJobs(),
  ]);
}
