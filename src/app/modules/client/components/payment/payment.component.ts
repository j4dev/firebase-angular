import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";

import { FirebaseService } from "../../../../services/firebase.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  PaymentForm: FormGroup;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private storage: AngularFireStorage,
    private firebaseService: FirebaseService
  ) { }
  
  @ViewChild('imageUser') inputImageUser: ElementRef;

  ngOnInit(): void {
    this.PaymentForm = this.formBuilder.group({
			'imagen' : [null, Validators.required]
    });
  }

  onUpload(e: any) {
    //console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }

  onSubmit(){
    let id = localStorage.getItem('id_user');
    this.firebaseService.uploadFile(id, this.inputImageUser.nativeElement.value);
  }

  get f() { return this.PaymentForm.controls; }
}
