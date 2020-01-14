import { createReducer } from '@reduxjs/toolkit';

import { initialState } from '@app/redux/store/initialState';
import { filtersChange } from '@app/redux/actions/jobs';
import { previewJob } from '@app/redux/actions/preview';


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