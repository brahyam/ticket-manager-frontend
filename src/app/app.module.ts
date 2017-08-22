import {routes} from './app.router';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {NavComponent} from './components/nav/nav.component';
import {FooterComponent} from './components/footer/footer.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {OurServicesComponent} from './components/our-services/our-services.component';
import {LandingComponent} from './components/landing/landing.component';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {FeathersService} from './services/feathers.service';
import {AuthGuard} from './guards/auth.guard';
import {TicketsComponent} from './components/tickets/tickets.component';
import {ProductsComponent} from './components/products/products.component';
import {CreateTicketComponent} from './components/create-ticket/create-ticket.component';
import {DataService} from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ContactUsComponent,
    OurServicesComponent,
    LandingComponent,
    LoginComponent,
    DashboardComponent,
    TicketsComponent,
    ProductsComponent,
    CreateTicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routes
  ],
  providers: [FeathersService, AuthService, DataService, AuthGuard, NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule {
}
