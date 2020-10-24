import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styles: [
  ]
})
export class PromocionesComponent implements OnInit {

  url = '';
  constructor() { }

  ngOnInit() {
    this.url = 'url("./assets/img/banner/parrallax8.jpg")';
  }


}
