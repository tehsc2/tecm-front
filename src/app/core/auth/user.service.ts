import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

  constructor(
   public db: AngularFirestore,
   public afAuth: AngularFireAuth
 ) {
 }

  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      const usuario = firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      });
    });
  }

  updateCurrentUser(value) {
    return new Promise((resolve, reject) => {
      const usuario = firebase.auth().currentUser;
      usuario.updateProfile({
        displayName: value.name,
        photoURL: usuario.photoURL
      }).then(res => {
        console.log(res);
        resolve();
      }, err => reject(err));
    });
  }
}
