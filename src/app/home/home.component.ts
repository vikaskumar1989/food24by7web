import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public auth: AngularFireAuth, private afAuth: AngularFireAuth,
    private db: AngularFirestore,private router: Router) {
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe((auth) => {
      console.log('auth', auth);
      this.router.navigate(['inventory'])
      // this.authState = auth;
      // this.isUserAdmin = false;
      // if (this.router.getCurrentNavigation.name === 'login') {
      //   this.router.navigate(['/home']);
      // }

      // if (auth !== null) {
      //   this.user = this.db.collection('users').doc(auth.uid);
      //   this.user.ref.get().then( doc => {
      //     if (doc.exists) {
      //       const data = doc.data();
      //       this.isUserAdmin = data.isAdmin;

      //       if (! data.isAdmin) {
      //         console.log('user not login as admin, please logout.');
      //         this.logout();
      //       }
      //     } else {
      //       console.log('user did not register through app, please logout.');
      //       this.logout();
      //     }
      //   });
      // }
    });
  }


  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  

}
