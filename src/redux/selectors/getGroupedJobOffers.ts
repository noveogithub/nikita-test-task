import { createSelector } from "@reduxjs/toolkit";
import { groupBy } from 'lodash';

import { getCurrentFilters } from "./getCurrentFilters";
import { getFilteredJobOffers } from "./getFilteredJobOffers";
import { NONE } from "@app/constants/None";

/**
 * Helper selector to group job offers by
 * Currently selected groupBy filter
 */
export const getGroupedJobOffers = createSelector(
  getFilteredJobOffers,
  getCurrentFilters,
  (offers, filters) => {
    if (filters.groupBy && filters.groupBy !== NONE) {
      return groupBy(offers, filters.groupBy);
    } else {
      return {
        'All Groups': offers,
      }
    }
  }
);