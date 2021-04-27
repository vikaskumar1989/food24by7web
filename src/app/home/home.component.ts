import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AngularFireAuth, private router: Router) {
    
  }

  ngOnInit(): void {
    this.auth.authState.subscribe((user) => {
      if(user == null){
        console.log('Home - User Not  Login. ');
        this.router.navigateByUrl('/login');
      }
    });
  }

  
}
