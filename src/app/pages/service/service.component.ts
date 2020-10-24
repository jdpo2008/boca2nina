import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styles: []
})
export class ServiceComponent implements OnInit {

  url = '';
  constructor() { }

  ngOnInit() {
    this.url = 'url("./assets/img/banner/parrallax7.jpg")';
  }

}
