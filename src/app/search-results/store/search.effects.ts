import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { createEffect, ofType } from "@ngrx/effects";
import { switchMap } from 'rxjs/operators';
import { Actions } from '@ngrx/effects';
import * as SearchActions from './search.actions';
import { environment } from '../../../environments/environment';
import { MoviesObj } from 'src/app/models/filmsStructure.model';

@Injectable()
export class SearchEffects{

  // fetchFilms = createEffect(() => this.actions$.pipe(
  //   ofType(SearchActions.FETCH_FILMS),
  //   switchMap(() =>{
  //   return this.http.get<MoviesObj>('http://www.omdbapi.com/?' + environment.apiKey +'&s='+ film + '&page=1')
  // }),
  // ));


  constructor(
    private actions$:Actions,
    private http:HttpClient,
    ){}
}
