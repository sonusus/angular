import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArtformPageComponent } from './pages/artform-page/artform-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { FooterComponent } from './units/footer/footer.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArtformPageComponent,
    SignupPageComponent,
    LoginPageComponent,
    ContactPageComponent,
    FooterComponent,
    NavbarComponent,
    SinglePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
