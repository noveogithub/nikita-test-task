import { createReducer } from '@reduxjs/toolkit';

import { initialState } from '../store/initialState';
import { filtersChange } from '../actions/jobs';
import { previewJob } from '../actions/preview';


export const uiReducer = createReducer(initialState.ui, {
  [filtersChange.type]: (state, action) => ({
    ...state,
    filters: action.payload,
  }),

  [previewJob.type]: (state, action) => ({
    ...state,
    preview: action.payload,
  }),
})