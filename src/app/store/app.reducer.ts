import { ActionReducerMap } from "@ngrx/store";
import * as fromSearch from '../search-results/store/search.reducer';

export interface AppState{
  search: fromSearch.State;
}

export const appReducer:ActionReducerMap<AppState> = {
  search:fromSearch.searchReducer
}
