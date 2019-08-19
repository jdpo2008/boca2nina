import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar-canvas',
  templateUrl: './navbar-canvas.component.html',
  styles: []
})
export class NavbarCanvasComponent implements OnInit, OnDestroy {
  constructor() { }

  ngOnInit() {
    $('.toggle_icon').on('click', () => {
      $( 'body' ).toggleClass( 'open' );
    });
    const dropToggle = $('.menu_right > li').has('ul').children('a');
    dropToggle.on('click', function() {
        dropToggle.not(this).closest('li').find('ul').slideUp(200);
        $(this).closest('li').children('ul').slideToggle(200);
        return false;
    });
  }

  ngOnDestroy(): void {
    $( 'body' ).toggleClass( 'open' );
  }

}
