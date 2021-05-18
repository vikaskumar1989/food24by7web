import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin/admin.component';


const routes: Routes = [
  { path : 'login', component: LoginComponent},  
  { path: '', redirectTo: '/home', pathMatch:'full'},
  { 
    path: 'home',
    component: HomeComponent,
    
  },
  { 
    path : 'admin', 
    component: AdminComponent,
    children: [
      {path: 'orders', loadChildren: () => import('./admin/orders/orders.module').then(m=>m.OrdersModule)}
    ]
  },  
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
