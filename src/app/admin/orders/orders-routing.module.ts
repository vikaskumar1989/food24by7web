import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { NewOrdersListComponent } from './new-orders-list/new-orders-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'new', pathMatch: 'full'},
  { path: 'new', component: NewOrdersListComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
