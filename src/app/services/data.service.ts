import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private storeName = new BehaviorSubject('MNFDwarkaSec7');
  currentStore = this.storeName.asObservable();

  constructor() {}

  setStore(storeName: string) {
    this.storeName.next(storeName);
  }
}
