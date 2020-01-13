import { createSelector } from "@reduxjs/toolkit";
import { IStore } from "../store/types";

export const getPreview = createSelector(
  (state: IStore) => state.ui.preview,
  data => data
);