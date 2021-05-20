import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-faqs',
  templateUrl: './home-faqs.component.html',
  styleUrls: ['./home-faqs.component.css']
})
export class HomeFaqsComponent implements OnInit {

  faqs!: Observable<any[]>;
  panelOpenState: any;

  constructor(private db: AngularFirestore) {
  }

  ngOnInit() {
    this.faqs = this.db.collection('faqs', ref => ref.orderBy('type', 'asc')).valueChanges();
  }
}
