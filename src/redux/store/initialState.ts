import { addMonths } from 'date-fns';

import { IStore } from "./types";
import { NONE } from '../selectors/getGroupedJobOffers';

export const initialState: IStore = {
  jobs: {
    data: [],
    error: '',
    loading: false,
  },
  ui: {
    filters: {
      search: '',
      contractType: NONE,
      publishedAt: addMonths(new Date(), -1),
      groupBy: NONE,
    },
    preview: {
      jobId: null,
      isOpen: false,
    }
  },
}