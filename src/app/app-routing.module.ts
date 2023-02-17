import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformPageComponent } from './pages/artform-page/artform-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';

const routes: Routes = [
  {
    path:'',component:HomePageComponent
  },
  {
    path:'artform',component:ArtformPageComponent
  },
  {
    path:'signup',component:SignupPageComponent
  },
  {
    path:'login',component:LoginPageComponent
  },
  {
    path:'contact',component:ContactPageComponent
  },
  {
    path:'single',component:SinglePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
