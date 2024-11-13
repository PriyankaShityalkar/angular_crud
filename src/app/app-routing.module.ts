import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { HomeComponent } from './auth/components/home/home.component';
import { UpdateComponent } from './auth/components/update/update.component';

const routes: Routes = [
  {path: '', redirectTo: "sign-in", pathMatch: "full"},
  {path:'sign-in', component: SignInComponent},
  {path:'sign-up', component: SignUpComponent},
  {path:"home", component:HomeComponent},
  {path:"update/:id", component:UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
