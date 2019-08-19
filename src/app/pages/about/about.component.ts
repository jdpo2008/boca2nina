import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
  url = '';
  constructor() { }

  ngOnInit() {
    this.url = 'url("./assets/img/banner/parrallax2.jpg")';
  }

}
