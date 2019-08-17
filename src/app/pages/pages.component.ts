import { Component, OnInit } from '@angular/core';
import * as Waves from 'node-waves';
import * as $ from 'jquery';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    Waves.attach('.nav-link', ['waves-light']);
    Waves.init();
  }

}
