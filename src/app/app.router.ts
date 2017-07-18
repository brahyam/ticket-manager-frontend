import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {OurServicesComponent} from "./our-services/our-services.component";
import {LandingComponent} from "./landing/landing.component";

export const router: Routes = [
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {path: 'landing', component: LandingComponent},
  {path: 'services', component: OurServicesComponent},
  {path: 'contact', component: ContactUsComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
