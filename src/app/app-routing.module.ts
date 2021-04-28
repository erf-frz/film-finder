
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard';
import { AuthComponent } from './auth/auth.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LikePageComponent } from './like-page/like-page.component';
import { SearchItemComponent } from './search-results/search-item/search-item.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'search-results', component:SearchResultsComponent, children:[
    {path: 'details', component:SearchItemComponent}
  ]
   },

  {path:'auth', component:AuthComponent},
  {path:'saved', component:LikePageComponent, canActivate:[AuthGuard]},
   {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
