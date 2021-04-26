import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventorylistComponent } from './inventorylist/inventorylist.component';

const routes: Routes = [
  {
    path: '',  component: InventorylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
