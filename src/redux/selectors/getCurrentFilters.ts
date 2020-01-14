import { IStore } from "../../types/IStore";

// Helper selector to get current filters
export const getCurrentFilters = (state: IStore) => state.ui.filters;