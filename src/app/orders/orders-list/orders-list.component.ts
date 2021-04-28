import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  newOrders: any;
  orderItemsList: any;

  constructor(private db: AngularFirestore, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.newOrders = this.db.collection("orders", ref => 
    ref.where('confirmed', '==', false)
    .where('cancelled', '==', false)
    .where('txnStatus', '==', 'SUCCESS')
    .orderBy('timestamp', 'desc').limit(20))
    .valueChanges();

    console.log('New Orders list: ', this.newOrders)
  }


  loadOrderItems(orderId:string){
    console.log('load Order Items: orderId : ',orderId );

    this.orderItemsList = this.db.collection('orders/' + orderId + '/order').valueChanges();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
  };

    this.matDialog.open(OrderItemsDialog, dialogConfig);
  }

}

@Component({
  selector: 'app-order-items-dialog',
  templateUrl: './orders-items-dialog.html',
})
export class OrderItemsDialog {

}
