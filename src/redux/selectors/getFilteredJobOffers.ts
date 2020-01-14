import { createSelector } from "@reduxjs/toolkit";
import { isAfter } from 'date-fns';

import { getCurrentFilters } from "./getCurrentFilters";
import { IJob } from "@app/types/IJob";
import { getJobOffers } from "./getJobOffers";
import { NONE } from "@app/constants/None";

/**
 * Helper selector to get all jobs that match
 * Currently applied filters
 */
export const getFilteredJobOffers = createSelector(
  getJobOffers,
  getCurrentFilters,
  (offers, filters) => {
    const iteratee = (job: IJob) => {
      const matchesSearch = !filters.search || [job.name, job.description, job.profile, job.contract_type.en].map(v => v.toLowerCase()).some(v => v.includes(filters.search));
      const matchesContract = filters.contractType === NONE || job.contract_type.en.toLowerCase().includes(filters.contractType.toLowerCase());
      const matchesDate = !filters.publishedAt || isAfter(new Date(job.published_at), new Date(filters.publishedAt));

      return matchesSearch && matchesContract && matchesDate;
    };

    return offers.filter(iteratee)
  }
);