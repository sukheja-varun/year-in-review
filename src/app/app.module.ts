import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { AngularFullpageModule } from "@fullpage/angular-fullpage";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ThankYouComponent } from './components/thank-you/thank-you.component';


@NgModule({
  declarations: [AppComponent, ThankYouComponent],
  imports: [BrowserModule,
    AngularFullpageModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
