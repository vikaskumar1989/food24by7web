import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userLoggedin: boolean = false;
  private uid: String = '';

  constructor(private auth: AngularFireAuth, private router: Router) {
    auth.authState.subscribe((user) => {
      if(user == null){
        console.log('User Not  Login. ');
         this.userLoggedin = false;
      } else {
        console.log('User Loggedin. ');
        this.userLoggedin = true;
      }
    });
   }

  isUserLogin(): boolean{
    return this.userLoggedin;
  }

  doLogin(): void{
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((user) => {
      // this.uid = user.user?.uid.toString();
      console.log('Signin success. USER ID', user.user?.uid);
      console.log('Signin New User.', user.additionalUserInfo?.isNewUser);
      this.router.navigateByUrl('/home');
    });
  }

  doLogout(): void{
    this.auth.signOut();
  }
}
