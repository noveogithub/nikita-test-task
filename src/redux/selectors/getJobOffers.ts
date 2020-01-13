import { createSelector } from "@reduxjs/toolkit";
import { IStore } from "../store/types";

export const getJobOffers = createSelector(
  (state: IStore) => state.jobs.data,
  data => data
);