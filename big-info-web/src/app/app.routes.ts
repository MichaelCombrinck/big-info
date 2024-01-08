import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from '../pages/register-page/register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent},
    { path: 'register', component: RegisterComponent},
    
];
