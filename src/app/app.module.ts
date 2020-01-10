import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { AngularFullpageModule } from "@fullpage/angular-fullpage";
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    AngularFullpageModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
