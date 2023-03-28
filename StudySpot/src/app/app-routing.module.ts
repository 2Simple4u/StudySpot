import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeNavbarComponent } from './home/home-navbar/home-navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login/login.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navbar', component: HomeNavbarComponent },
  { path: 'login', component:LoginPageComponent},
  { path: 'signup', component : SignupPageComponent},
  { path: 'aboutus', component : AboutUsComponent},
  {path:'loginPage',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
