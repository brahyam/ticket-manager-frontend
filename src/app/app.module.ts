import {routes} from './app.router';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {OurServicesComponent} from './our-services/our-services.component';
import {LandingComponent} from './landing/landing.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TicketService} from './ticket.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth.service';
import {RestService} from './feathers.service';
import {AuthGuard} from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ContactUsComponent,
    OurServicesComponent,
    LandingComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routes
  ],
  providers: [TicketService, RestService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
