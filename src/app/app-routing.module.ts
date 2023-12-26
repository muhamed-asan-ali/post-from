import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PublicPageComponent } from './public-page/public-page.component';
import { PersonalPageComponent } from './personal-page/personal-page.component';


const routes: Routes = [
  { path: '', component: UserLoginComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'home/:username', component: HomePageComponent },
  { path: 'profile/:username', component: PersonalPageComponent  },
  { path: 'public-feed', component: PublicPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
