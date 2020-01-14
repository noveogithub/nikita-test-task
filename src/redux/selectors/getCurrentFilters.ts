import { IStore } from "@app/types/IStore";

// Helper selector to get current filters
export const getCurrentFilters = (state: IStore) => state.ui.filters;