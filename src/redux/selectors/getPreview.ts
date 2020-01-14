import { IStore } from "../../types/IStore";

// Helper selector to get current preview settings
export const getPreview = (state: IStore) => state.ui.preview