import { createContext } from "react";

import { initialState } from "../redux/store/initialState";

export const SearchContext = createContext(initialState.ui.filters.search);