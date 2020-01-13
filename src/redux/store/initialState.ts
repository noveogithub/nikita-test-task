import { IStore } from "./types";

export const initialState: IStore = {
  jobs: {
    data: [],
    error: '',
    loading: false,
  },
  ui: {
    search: '',
    contractType: null,
    publishedAt: null,
    groupBy: 'none',
  }
}