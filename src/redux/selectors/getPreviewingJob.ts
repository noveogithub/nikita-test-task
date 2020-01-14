import { createSelector } from "@reduxjs/toolkit";

import { getJobOffers } from "./getJobOffers";
import { getPreview } from "./getPreview";

/**
 * Helper selector to get job offer for modal
 * If modal is currently opened
 */
export const getPreviewingJob = createSelector(
  getJobOffers,
  getPreview,
  (offers, preview) => {
    if (!preview.isOpen || preview.jobId === null) {
      return null;
    }
    return offers.find(job => job.id === preview.jobId) || null;
  }
);