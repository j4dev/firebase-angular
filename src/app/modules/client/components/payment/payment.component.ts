import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from 'rxjs';

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
    private storage: AngularFireStorage 
  ) { }

  ngOnInit(): void {
    this.PaymentForm = this.formBuilder.group({
			'imagen' : [null, Validators.required]
    });
  }

  onSubmit(file: any){
    console.log(file);
    
  }

  onUpload(e: any) {
    console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file).catch(error=>{
      console.log(error);
      
    });
    /*this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();*/
  }

  get f() { return this.PaymentForm.controls; }
}
