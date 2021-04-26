import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventorylistComponent } from './inventorylist/inventorylist.component';


@NgModule({
  declarations: [
    InventorylistComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
