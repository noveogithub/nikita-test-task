import { createAction } from "@reduxjs/toolkit";

import { IJob } from "@app/types/IJob";
import { IFilters } from "@app/types/IFilters";

export const jobRequest = createAction('@@JOBS/REQUEST')
export const jobRequestSuccess = createAction<IJob[]>('@@JOBS/REQUEST_SUCCESS')
export const jobRequestError = createAction<string>('@@JOBS/REQUEST_ERROR');
export const filtersChange = createAction<IFilters>('@@JOBS/CHANGE_FILTERS')