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

  updateUser(id: any, usuario: any){
    this.firestore.collection("usuario").doc(id).update(usuario);
  }

  uploadFile(id: any, urlFile: any){
    console.log(urlFile);
    this.firestore.doc('usuario/'+id).update({
      payment: urlFile
    })
  }
}
