import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'; // Step 2 [Step 1 is in index.html] :  <base href="/">

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Configuring the route modules. //Step 3
const appRoutes: Routes = [
{path: 'home', component: HomeComponent},  // If the path is  http://localhost:4200/home then display the home component
{path: 'employees', component: EmployeesComponent}, // If the path is  http://localhost:4200/employees then display employees component
{path: '', redirectTo: '/toto/home', pathMatch: 'full'}, // If the path is not specified, then goto home
{path: '**', component: PageNotFoundComponent} // if the path doesn't match any, then display page not found component
];

// Step4 specific where do you want to router component view template to be displayed with  <router-outlet></router-outlet>

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
