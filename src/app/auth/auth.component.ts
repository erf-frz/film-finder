import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { SubSink } from 'subsink';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  //subs = new SubSink();
  hide = true;
  isLoginMode = false;
  isLoading = false;
  message:string = null;

  constructor(
          private authService:AuthService,
          private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form:NgForm){
    if(!form.valid){
      return;
    }

    this.isLoading = true;
    const email = form.value.email;
    const password =form.value.password;
    let authObs: Observable<AuthResponseData>;

    if(this.isLoginMode){
      authObs = this.authService.login(email,password);
    }
    else{
      authObs = this.authService.signup(email,password);
    }

     authObs.subscribe(responseData =>{
        console.log(responseData);
        // this.message = 'You have successfully logged in!';
        this.isLoading = false;
         this.router.navigate(['/saved']);
      }, errorRes =>{
        this.message = errorRes;
        this.isLoading = false;
      })

    form.reset();
  }

  ngOnDestroy(){
    //this.subs.unsubscribe();
  }




  // openSnackBar(message:string,action:string){
  //   this.message = message;
  //    this._snackBar.open(message, action);
  // }

}
