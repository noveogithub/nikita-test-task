import { IStore } from "../../types/IStore";

// Helper selector to get job offer data
export const getJobOffers = (state: IStore) => state.jobs.data;