import { Injectable } from '@angular/core';

import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  createUser(user: any){
    return this.firestore.collection("usuario").add(user);
  }

  getUser(){
    return this.firestore.collection("usuario").snapshotChanges();
  }
}
