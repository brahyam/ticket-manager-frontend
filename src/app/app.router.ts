import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {OurServicesComponent} from './components/our-services/our-services.component';
import {LandingComponent} from './components/landing/landing.component';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AuthGuard} from './guards/auth.guard';
import {TicketsComponent} from './components/tickets/tickets.component';
import {ProductsComponent} from './components/products/products.component';

export const router: Routes = [
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {path: 'landing', component: LandingComponent},
  {path: 'services', component: OurServicesComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'tickets', component: TicketsComponent, canActivate: [AuthGuard]},
  {path: 'products', component: ProductsComponent, canActivate: [AuthGuard]}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
