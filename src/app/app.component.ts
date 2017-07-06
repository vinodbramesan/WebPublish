import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: string;
  title = 'app';
  constructor(public af: AngularFireAuth, public router: Router) {
    console.log(this.user);
    this.af.authState.subscribe((auth) => {
      if (auth) {
        this.user = auth.displayName;
        console.log(auth);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
  login() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.af.auth.signOut();
    this.user = null;
  }
}
