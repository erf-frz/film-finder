import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth/auth.service';
import { FilmFullDetails } from 'src/app/models/filmsStructure.model';
import { SubSink } from 'subsink';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit,OnDestroy {

  constructor(
    private searchService:SearchService,
    private authService:AuthService,
    private snackbar:MatSnackBar
  ) { }

  subs = new SubSink();
  film:FilmFullDetails;

  ngOnInit() {
    this.subs.sink = this.searchService.filmDetail.subscribe(result =>{
       this.film = result;
      //  console.log(this.film);
    });
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  saveToLikePage(){
    if(localStorage.getItem('userData')){
      //user is logged in
        this.searchService.favoriteFilm.next(this.film);
       return this.openSnackbar('This film is saved in the like page', 'close');
    }else{
      //user needs to be logged in in order to save the film
       return this.openSnackbar('You need to be logged in to be able to save the film.','close');
    }
  }

  private openSnackbar(message,action){
    this.snackbar.open(message,action);
  }

}
