import { createSelector } from "@reduxjs/toolkit";
import { map, uniq } from 'lodash';

import { getJobOffers } from "./getJobOffers";
import { IJob } from "../../types/IJob";

export const getContractTypes = createSelector(
  getJobOffers,
  offers => {
    if (offers.length > 0) {
      return uniq(map(offers, (job: IJob) => {
        return job.contract_type.en;
      }));
    } else {
      return [];
    }
  }
);