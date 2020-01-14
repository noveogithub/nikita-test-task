import { IJob } from "./IJob";
import { IFilters } from "./IFilters";
import { IPreview } from "./IPreview";

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