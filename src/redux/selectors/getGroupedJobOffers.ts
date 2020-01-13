import { createSelector } from "@reduxjs/toolkit";
import { groupBy } from 'lodash';

import { getCurrentFilters } from "./getCurrentFilters";
import { getFilteredJobOffers } from "./getFilteredJobOffers";

export const getGroupedJobOffers = createSelector(
  getFilteredJobOffers,
  getCurrentFilters,
  (offers, filters) => {
    if (filters.groupBy && filters.groupBy !== 'none') {
      return groupBy(offers, filters.groupBy);
    } else {
      return {
        'All Groups': offers,
      }
    }
  }
);