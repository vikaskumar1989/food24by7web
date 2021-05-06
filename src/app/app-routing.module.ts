import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path : 'login', component: LoginComponent},
  { path: '', redirectTo: '/', pathMatch:'full'},
  { path: '/', component: AppComponent},
  { 
    path: 'home', 
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin},
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
