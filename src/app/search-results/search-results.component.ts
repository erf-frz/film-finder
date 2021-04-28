import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FilmInformation } from '../models/filmsStructure.model';
import { SearchService } from './search.service';
import { SubSink } from 'subsink';
import { MatDialog } from '@angular/material/dialog';
import { SearchItemComponent } from './search-item/search-item.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit,OnDestroy {
  subs = new SubSink();
  resultExists = false;
  resultsArray: FilmInformation[] = [];
  searchName:string;


  constructor(
            private router: Router,
            private route: ActivatedRoute,
            private searchService:SearchService,
            public dialog: MatDialog)
            { }

  ngOnInit() {
   this.subs.sink = this.searchService.filmName.subscribe(name => {
      this.searchName = name;
    });

    this.subs.sink = this.searchService.filmsArray.subscribe(response =>{
      this.resultExists = true;
      this.resultsArray = response;
      console.log(this.resultsArray);
    })
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  backToHomePage(){
    this.router.navigate(['/']);
  }

  showDetailsPage(title:string){
    this.subs.sink = this.searchService.fetchFilm(title)
    .subscribe(res=>{
        this.searchService.filmDetail.next(res);
        //console.log(res);
      });
      this.router.navigate(['details'],{relativeTo:this.route});
      this.dialog.open(SearchItemComponent,{
        width: '60vw'
      });
  }

}
