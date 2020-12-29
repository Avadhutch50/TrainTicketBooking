import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { SearchTrainComponent } from './search-train/search-train.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {path:"",redirectTo:"/welcome",pathMatch:"full"},
  {path:"welcome",component:WelcomePageComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"home",component:HomeComponent},
  {path:"my-account",component:MyAccountComponent},
  {path:"search-train",component:SearchTrainComponent},
  {path:"book-ticket",component:BookTicketComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WelcomePageComponent,LoginComponent,RegisterComponent,HomeComponent,MyAccountComponent,SearchTrainComponent,BookTicketComponent,PageNotFoundComponent]