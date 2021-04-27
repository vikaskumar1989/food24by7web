import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-inventorylist',
    templateUrl: './inventorylist.component.html',
    styleUrls: ['./inventorylist.component.scss']
})
export class InventorylistComponent implements OnInit {
    stores: any;
    currentStore: any;
    foodTypes:any = [];
    items:any =[];
    currentTab: string;
    constructor(public db: AngularFirestore, private dataService: DataService) {
        this.currentTab = 'chineseNonVegStarter';
     }

    ngOnInit(): void {
        this.stores = this.db.collection('stores').valueChanges();
        this.dataService.currentStore.subscribe(store => {
            this.currentStore = store;
            this.currentTab = 'chineseNonVegStarter';
            this.getFoodCateList();
        });
    }

    getFoodCateList(){
        this.foodTypes = this.db.collection('stores/' + this.currentStore + '/foodtypes',
        ref => ref.where('category', 'array-contains', 'restaurant').orderBy('order')
        ).valueChanges();
        console.log('this.foodTypes', this.foodTypes);
        this.getCurrentCateFoodItems();
    }

    getCurrentCateFoodItems(){
        this.items = this.db.collection('stores/' + this.currentStore + '/items',
        ref => ref.where('type', '==', this.currentTab)
        )
        .valueChanges();
    }

    onFoodCateChange(tab:string){
        this.currentTab = tab;
        this.getCurrentCateFoodItems();
    }
}
