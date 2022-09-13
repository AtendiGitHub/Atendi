//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

//web page components
import { ServicesPageComponent } from './web-pages/services-page/services-page.component';
import { MainPageComponent } from './web-pages/main-page/main-page.component';
import { BenefitsPageComponent } from './web-pages/benefits-page/benefits-page.component';
import { StartPageComponent } from './web-pages/start-page/start-page.component';
import { PaymentSectionComponent } from './web-pages/payment-section/payment-section.component';
import { ContactPageComponent } from './web-pages/contact-page/contact-page.component';


//generic components
import { CardComponent } from './generic-components/card/card.component';
import { ButtonComponent } from './generic-components/button/button.component';

//styling components
import { StarGroupOverlayComponent } from './styling-components/star-group-overlay/star-group-overlay.component';
import { SolarSystemOverlayComponent } from './styling-components/solar-system-overlay/solar-system-overlay.component';



const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'service', component: ServicesPageComponent },
  { path: 'benefits', component: BenefitsPageComponent },
  { path: 'start', component: StartPageComponent },
  { path: 'contact', component: ContactPageComponent },

];

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
    ContactPageComponent,
    StarGroupOverlayComponent,
    SolarSystemOverlayComponent
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
