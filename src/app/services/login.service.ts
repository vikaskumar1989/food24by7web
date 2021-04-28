import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{
  userName: any = 'User';

  constructor(private auth: AngularFireAuth, private router: Router) {
    this.auth.authState.subscribe(
      user => {
        console.log("Login Srv authState user: ", user);
        if(user != null){
          this.userName = user.displayName;
        }
      }
    );
  }

  ngOnInit(){
    
  }

  doLogin(): void{
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((user) => {
      console.log('Login Srv success. USER ID', user.user?.uid);
      console.log('Login Srv New User.', user.additionalUserInfo?.isNewUser);
      this.router.navigateByUrl('/home');
    });
  }

  doLogout(): void{
    this.auth.signOut();
    this.router.navigateByUrl('/login');
  }
}
