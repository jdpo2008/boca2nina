import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {
  url = '';
  constructor() { }

  ngOnInit() {
    this.url = 'url("./assets/img/banner/parrallax4.jpg")';
  }

}
