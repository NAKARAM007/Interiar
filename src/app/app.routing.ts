import { Component, OnInit,NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutItemComponent } from './about/about-item/about-item.component';
import { EmployeeComponent } from './employee/employee.component';
//import { HomeComponent } from './employee/home.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './employee/notfound.component';

import { WelcomeComponent } from './employee/welcome.component';
import { LogOutComponent } from './login/logout.component';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards/auth.guard';

const appRoutes: Routes = [
  //  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
   // { path: '', component: LoginComponent },


     {path : 'home', component: HomeComponent},
  //   {path:'employees',component:EmployeeComponent
  //   ,
  //     children: [
  //       { path: '', component: WelcomeComponent },
  //       { path: 'item/:id', component: AboutItemComponent }
  //       ,{path:'home',component:HomeComponent}
  //     ]
  // },
  
    // {path:'login',component:LoginComponent},
    // { path: 'register', component: RegisterComponent },
    // {path:'logout',component:LogOutComponent},
    //  {path:'**',component:NotfoundComponent}
  
   //// { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    //{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
