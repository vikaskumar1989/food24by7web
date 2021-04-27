import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path : 'login', component: LoginComponent},
  { path: '', redirectTo: '/home', pathMatch:'full'},
  { 
    path: 'home', 
    component: HomeComponent,
    children: [
      { path :'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)},
      { path: 'inventory', loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule)}
    ]
  },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
