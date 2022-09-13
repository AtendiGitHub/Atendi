import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ServicesPageComponent } from './web-pages/services-page/services-page.component';
import { MainPageComponent } from './web-pages/main-page/main-page.component';
import { CardComponent } from './generic-elements/card/card.component';
import { ButtonComponent } from './generic-elements/button/button.component';
import { BenefitsPageComponent } from './web-pages/benefits-page/benefits-page.component';
import { StartPageComponent } from './web-pages/start-page/start-page.component';
import { PaymentSectionComponent } from './web-pages/payment-section/payment-section.component';
import { ContactPageComponent } from './web-pages/contact-page/contact-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SolarSystemOverlayComponent } from './styling-components/solar-system-overlay/solar-system-overlay.component';
import { StarGroupOverlayComponent } from './styling-components/star-group-overlay/star-group-overlay.component';


const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'service', component: ServicesPageComponent },
  { path: 'benefits', component: BenefitsPageComponent },
  { path: 'start', component: StartPageComponent },
  { path: 'contact', component: ContactPageComponent },

];
// const routerOptions: ExtraOptions = {
//   anchorScrolling: "enabled"
//   //scrollPositionRestoration: "enabled"
// };

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ServicesPageComponent,
    MainPageComponent,
    CardComponent,   
    ButtonComponent, 
    BenefitsPageComponent, 
    StartPageComponent, 
    PaymentSectionComponent, 
    ContactPageComponent, SolarSystemOverlayComponent, StarGroupOverlayComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
