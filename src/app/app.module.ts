import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './components/home/home.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThankYouComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AngularFullpageModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {
        path: ':id',
        component: LandingPageComponent
      }
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
