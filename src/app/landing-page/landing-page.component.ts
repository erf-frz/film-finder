
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../search-results/search.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {


  constructor(
          private router:Router,
          private searchService:SearchService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){

    let film = form.value.name;
    this.searchService.searchFilms(film);

    form.reset();
    this.router.navigate(['/search-results']);
  }
}



