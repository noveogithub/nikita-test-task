import { createContext } from "react";

import { initialState } from "../redux/store/initialState";

/**
 * Helper context to provider current search value deep down the component tree
 */
export const SearchContext = createContext(initialState.ui.filters.search);