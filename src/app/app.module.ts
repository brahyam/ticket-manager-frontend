import {routes} from "./app.router";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {AppComponent} from "./app.component";
import {NavComponent} from "./nav/nav.component";
import {FooterComponent} from "./footer/footer.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {OurServicesComponent} from "./our-services/our-services.component";
import {LandingComponent} from "./landing/landing.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ContactUsComponent,
    OurServicesComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
