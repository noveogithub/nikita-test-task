import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { jobRequestSuccess, jobRequestError, jobRequest } from '@app/redux/actions/jobs';
import { ENDPOINT } from '@app/constants/Endpoint';

function* jobSaga() {
  try {
    const response = yield call(axios.get, ENDPOINT);
    yield put(jobRequestSuccess(response.data.jobs));
  } catch (error) {
    yield put(jobRequestError(error.message));
  }
}

export function* watchJobs() {
  yield all([
    takeLatest(jobRequest, jobSaga),
  ]);
}