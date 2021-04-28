import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {

  isAuthenticated = false;
  sub = new  SubSink();

  constructor(
            private authService:AuthService,
            private router:Router
  ){}

  ngOnInit(){
    this.authService.autoLogin();
    this.sub.sink = this.authService.user.subscribe((user) =>{
      this.isAuthenticated = user ? true : false;
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  toAuthPage(){
    if(!this.isAuthenticated){
      this.router.navigate(['/auth']);
    }else{
      this.authService.logout();
      this.router.navigate(['/']);
    }
  }

  toLikesPage(){
    if(this.isAuthenticated){
      this.router.navigate(['/saved']);
    }else{
      alert('You need to be logged in to see the like page.');
    }
  }
}
