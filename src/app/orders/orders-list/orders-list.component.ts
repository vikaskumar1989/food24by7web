import { Component, OnInit, Inject, NgModule, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  newOrders: any;
  newOrdersCount: any = 0;
  preparingOrders: any;
  preparingOrdersCount: any = 5;
  orderItemsList: any;
  orderItems: any;

  displayOrderItemsOrderId: any;

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.newOrders = this.db.collection("orders", ref => 
      ref.where('confirmed', '==', false)
      .where('cancelled', '==', false)
      .where('placed', '==', true)
      .where('received', '==', true)
      .where('txnStatus', '==', 'SUCCESS')
      .orderBy('timestamp', 'desc').limit(20)
    ).valueChanges();

    this.db.collection("orders", ref => 
    ref.where('confirmed', '==', false)
    .where('cancelled', '==', false)
    .where('placed', '==', true)
    .where('received', '==', true)
    .where('txnStatus', '==', 'SUCCESS')
    .orderBy('timestamp', 'desc').limit(20)).get().forEach((orders)=>{
      this.newOrdersCount = orders.docs.length;
      console.log('New Orders list: count ', orders.docs.length);
    })
  }

  getNewOrdersLabelText(){
     let newOrdersLabelText = 'New';

    if(this.newOrdersCount>0){
      newOrdersLabelText += '(' +  this.newOrdersCount + ')'
    }

    return newOrdersLabelText;
  }

  showOrderItems(orderId: any){

    return orderId == this.displayOrderItemsOrderId;
  }


  loadOrderItems(orderId:any){
    this.displayOrderItemsOrderId = orderId;
    console.log('load Order Items: orderId : ',orderId );
    this.orderItems = this.db.collection('orders/' + orderId + '/order', ref=>ref.where('promoItem', '==', false)).valueChanges();
  }

  printOrder(orderId:any){
    var prtContent = document.getElementById(orderId);
    console.log('printOrder: orderId : ',orderId , prtContent?.innerHTML);
    //  WinPrint = window.document.write(prtContent?.innerHTML);
    // WinPrint.document.close();
    // WinPrint.focus();
    // WinPrint.print();
    // WinPrint.close();
  }
}