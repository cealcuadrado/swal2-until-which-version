import { Component, OnInit } from '@angular/core';
import $wal from 'sweetalert2';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  oneButton(): void {
    $wal
      .fire({
        title: "Título",
        text: "Este es el texto del cuadro de diálogo",
        icon: "warning",
        showConfirmButton: true,
        confirmButtonColor: "#5360a9",
        confirmButtonText: 'Confirm',
        showCancelButton: true,
        cancelButtonColor: '#cc253a',
        cancelButtonText: 'Cancel',
        showDenyButton: true,
        denyButtonColor: '#069539',
        denyButtonText: 'Deny'
      })
      .then((resolve) => {
        console.log(resolve);
      })
      .catch((reject) => {
        console.log(reject);
      });
  }

}
