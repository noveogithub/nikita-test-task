import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { jobRequestSuccess, jobRequestError, jobRequest } from '../actions/jobs';

const ENDPOINT = 'https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k';

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