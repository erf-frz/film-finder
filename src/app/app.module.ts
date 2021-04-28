import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchItemComponent } from './search-results/search-item/search-item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { LikePageComponent } from './like-page/like-page.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SearchResultsComponent,
    SearchItemComponent,
    ItemDetailsComponent,
    LikePageComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot(fromApp.appReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
