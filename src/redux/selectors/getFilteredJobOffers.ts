import { createSelector } from "@reduxjs/toolkit";
import { isAfter } from 'date-fns';

import { getCurrentFilters } from "./getCurrentFilters";
import { IJob } from "../../types/IJob";
import { getJobOffers } from "./getJobOffers";
import { NONE } from "./getGroupedJobOffers";

export const getFilteredJobOffers = createSelector(
  getJobOffers,
  getCurrentFilters,
  (offers, filters) => {
    const iteratee = (job: IJob) => {
      const matchesSearch = !filters.search || [job.name, job.description, job.profile].map(v => v.toLowerCase()).some(v => v.includes(filters.search));
      const matchesContract = filters.contractType === NONE || job.contract_type.en.toLowerCase().includes(filters.contractType.toLowerCase());
      const matchesDate = !filters.publishedAt || isAfter(new Date(job.published_at), new Date(filters.publishedAt));

      return matchesSearch && matchesContract && matchesDate;
    };

    return offers.filter(iteratee)
  }
);