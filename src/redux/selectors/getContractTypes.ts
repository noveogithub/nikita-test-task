import { createSelector } from "@reduxjs/toolkit";
import { map, uniq } from 'lodash';

import { getJobOffers } from "./getJobOffers";
import { IJob } from "../../types/IJob";
import { NONE } from "./getGroupedJobOffers";

/**
 * Helper selector to collect all
 * Possible contract types from fetched job offers
 */
export const getContractTypes = createSelector(
  getJobOffers,
  offers => {
    if (offers.length > 0) {
      return [NONE, ...uniq(map(offers, (job: IJob) => {
        return job.contract_type.en;
      }))];
    } else {
      return [NONE];
    }
  }
);