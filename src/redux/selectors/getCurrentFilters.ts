import { createSelector } from "@reduxjs/toolkit";

import { IStore } from "../store/types";

export const getCurrentFilters = createSelector(
  (state: IStore) => state.ui.filters,
  filters => filters,
);