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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ServicesPageComponent,
    MainPageComponent,
    CardComponent,   
    ButtonComponent, BenefitsPageComponent, StartPageComponent, PaymentSectionComponent, ContactPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
