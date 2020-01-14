import { addMonths } from 'date-fns';

import { IStore } from "../../types/IStore";
import { NONE } from '../../constants/None';

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
      // By default set publishedAt to current date minus one month
      publishedAt: addMonths(new Date(), -1),
      groupBy: NONE,
    },
    preview: {
      jobId: null,
      isOpen: false,
    }
  },
}