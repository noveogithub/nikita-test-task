import { combineReducers } from '@reduxjs/toolkit';
import { jobReducer } from './jobs';
import { uiReducer } from './ui';

export const rootReducer = combineReducers({
  jobs: jobReducer,
  ui: uiReducer,
})