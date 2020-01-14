import { createSelector } from "@reduxjs/toolkit";
import { isAfter } from "date-fns";
import { sortBy } from "lodash";

import { getCurrentFilters } from "./getCurrentFilters";
import { IJob } from "@app/types/IJob";
import { getJobOffers } from "./getJobOffers";
import { NONE } from "@app/constants/None";

const getJobContent = (job: IJob) =>
  [
    job.name,
    job.description,
    job.office.name,
    job.profile,
    job.contract_type.en,
  ]
    .map(v => v.toLowerCase())
    .join();

const countMatches = (content: string, words: string[]) => {
  return words.reduce((acc: number, word: string) => {
    return acc + content.split(word).length;
  }, 0);
};

/**
 * Helper selector to get all jobs that match
 * Currently applied filters
 */
export const getFilteredJobOffers = createSelector(
  getJobOffers,
  getCurrentFilters,
  (offers, filters) => {
    const searchWords = filters.search.split(" ").map(v => v.toLowerCase());

    const iteratee = (job: IJob) => {
      const matchesSearch =
        !filters.search ||
        searchWords.every(w => getJobContent(job).includes(w));
      const matchesContract =
        filters.contractType === NONE ||
        job.contract_type.en
          .toLowerCase()
          .includes(filters.contractType.toLowerCase());
      const matchesDate =
        !filters.publishedAt ||
        isAfter(new Date(job.published_at), new Date(filters.publishedAt));

      return matchesSearch && matchesContract && matchesDate;
    };

    return sortBy(offers.filter(iteratee), job => {
      const content = getJobContent(job);

      const count = countMatches(content, searchWords);
      return -count;
    });
  }
);
