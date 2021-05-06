import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { MaterialModule } from '../../material-ui.module';
import { NewOrdersListComponent } from './new-orders-list/new-orders-list.component';

@NgModule({
  declarations: [
    NewOrdersListComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MaterialModule
  ]
})
export class OrdersModule { }
