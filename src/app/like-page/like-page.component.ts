import { Component, OnInit } from '@angular/core';
import { FilmFullDetails } from '../models/filmsStructure.model';
import { SearchService } from '../search-results/search.service';

@Component({
  selector: 'app-like-page',
  templateUrl: './like-page.component.html',
  styleUrls: ['./like-page.component.css']
})
export class LikePageComponent implements OnInit {

  films: FilmFullDetails[] = [];

  constructor(
          private searchService:SearchService
  ) { }

  ngOnInit() {
    if(localStorage.getItem('favoriteFilms')){
      this.films = JSON.parse(localStorage.getItem('favoriteFilms'));
    }
    this.searchService.favoriteFilm.subscribe( film =>{
      if(this.films.indexOf(film) === -1){
        this.films.push(film);
      console.log(this.films);
      }
       localStorage.setItem('favoriteFilms', JSON.stringify(this.films));
    });
  }

  RemoveFilm(index:number){
    this.films.splice(index,1);
    localStorage.setItem('favoriteFilms', JSON.stringify(this.films));
    if(this.films.length ===0){
      localStorage.removeItem('favoriteFilms');
    }
  }

}
