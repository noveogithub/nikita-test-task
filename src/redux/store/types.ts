import { IJob } from "../../types/IJob";
import { IFilters } from "../../types/IFilters";

export type IStore = {
  jobs: {
    data: IJob[],
    error: string;
    loading: boolean;
  },
  ui: IFilters
}