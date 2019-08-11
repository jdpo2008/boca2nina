import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.toggle_icon').on('click', () => {
      $( 'body' ).toggleClass( 'open' );
    });
  }

}
