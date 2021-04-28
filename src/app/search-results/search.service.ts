import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from '../../environments/environment';
import { FilmFullDetails, FilmInformation, MoviesObj } from "../models/filmsStructure.model";


@Injectable({providedIn:'root'})
export class SearchService{


  filmsArray = new Subject<FilmInformation[]>()
  filmName = new Subject<string>();
  filmDetail = new Subject<FilmFullDetails>();
  favoriteFilm = new Subject<FilmFullDetails>();

  constructor(
              private http:HttpClient,
  ){}

  searchFilms(filmName:string){
    this.http.get<MoviesObj>('http://www.omdbapi.com/?' + environment.apiKey +'&s='+ filmName + '&page=1')

      .subscribe(result=>{
        let resultArray = result.Search;
        this.filmsArray.next(resultArray);
        console.log(result);
        this.filmName.next(filmName);
      },
      error=>{
        console.log(error);
      });
  }

  fetchFilm(filmName:string){
    return this.http.get<FilmFullDetails>('http://www.omdbapi.com/?' + environment.apiKey + '&t='+ filmName);

  }


}
