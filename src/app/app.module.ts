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
import { EarningsComponent } from './components/earnings/earnings.component';
import { SavingsComponent } from './components/savings/savings.component';
import { FreeGiftsComponent } from './components/free-gifts/free-gifts.component';
import { SocialSharesComponent } from './components/social-shares/social-shares.component';
import { ProductsViewedComponent } from './components/products-viewed/products-viewed.component';
import { UniqueProductsComponent } from './components/unique-products/unique-products.component';
import { GlammCircleComponent } from './components/glamm-circle/glamm-circle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThankYouComponent,
    LandingPageComponent,
    EarningsComponent,
    SavingsComponent,
    FreeGiftsComponent,
    SocialSharesComponent,
    ProductsViewedComponent,
    UniqueProductsComponent,
    GlammCircleComponent
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
