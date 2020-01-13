import { createReducer } from '@reduxjs/toolkit';

import { jobRequestError, jobRequest, jobRequestSuccess } from '../actions/jobs';
import { initialState } from '../store/initialState';

export const jobReducer = createReducer(initialState.jobs, {
  [jobRequest.type]: state => ({
    ...state,
    loading: true,
  }),

  [jobRequestSuccess.type]: (state, action) => ({
    ...state,
    loading: false,
    data: action.payload,
  }),

  [jobRequestError.type]: (state, action) => ({
    ...state,
    loading: false,
    data: [],
    error: action.payload,
  })
})