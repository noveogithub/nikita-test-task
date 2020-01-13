import { createReducer } from '@reduxjs/toolkit';
import { initialState } from '../store/initialState';
import { filtersChange } from '../actions/jobs';


export const uiReducer = createReducer(initialState.ui, {
  [filtersChange.type]: (_, action) => action.payload,
})