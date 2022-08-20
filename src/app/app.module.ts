import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CardComponent } from './generic-elements/card/card.component';
import { MainSectionComponent } from './main-page/main-section/main-section.component';
import { ButtonComponent } from './generic-elements/button/button.component';
import { SeconderySectionComponent } from './main-page/secondery-section/secondery-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ServicesPageComponent,
    MainPageComponent,
    CardComponent,
    MainSectionComponent,
    ButtonComponent,
    SeconderySectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
