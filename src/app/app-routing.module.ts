import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetialsComponent } from './moviedetials/moviedetials.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'} ,
  {path:'home' , canActivate:[AuthGuard] , component:HomeComponent} ,
  {path:'moviedetails/:id' , canActivate:[AuthGuard] , component:MoviedetialsComponent} ,
  {path:'login' , component:LoginComponent} ,
  {path:'register' , component:RegisterComponent} ,
  {path:'**' ,canActivate:[AuthGuard] ,  component:NotfoundComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
