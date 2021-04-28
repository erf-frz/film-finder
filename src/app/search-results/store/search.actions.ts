import { Action } from "@ngrx/store";


export const FETCH_FILMS = '[search] Fentch Film';






export class FetchFilms implements Action{
  readonly type = FETCH_FILMS;
 // constructor(public payload:)

}

export type SearchActions =
  FetchFilms;


