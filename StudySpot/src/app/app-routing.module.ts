import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeNavbarComponent } from './home/home-navbar/home-navbar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navbar', component: HomeNavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
