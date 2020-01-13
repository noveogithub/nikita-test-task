import { IJob } from "../../types/IJob";
import { IFilters } from "../../types/IFilters";
import { IPreview } from "../../types/IPreview";

export type IStore = {
  jobs: {
    data: IJob[],
    error: string;
    loading: boolean;
  },
  ui: {
    filters: IFilters;
    preview: IPreview,
  }
}