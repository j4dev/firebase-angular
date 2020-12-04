import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../../../services/firebase.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  users = [];
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.getUser().subscribe((res) => {
      res.map((e: any) => {
        if (e.payload.doc.data().user_tipo == 2) {
          if (!e.payload.doc.data().publicacion) {
            var aprobado = 'Sin aprobar';
          } else {
            var aprobado = 'Aprobado';
          }
          if (!e.payload.doc.data().payment) {
            var comprobante = false;
          } else {
            var comprobante = true;
          }
          this.users.push({
            nombre: e.payload.doc.data().user_name,
            correo: e.payload.doc.data().email,
            tipo: e.payload.doc.data().user_tipo,
            id: e.payload.doc.id,
            enlace: e.payload.doc.data().payment,
            aprobado: aprobado,
            payment: comprobante,
          });
        } else {
        }
      });
    });
  }

  aproba(id: any) {
    console.log(id);
  }
}
