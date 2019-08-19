import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // this.navbarFixed();
  }

  navbarFixed() {
    const NAV_OFFSET_TOP = $('.header_area').height() + 20;
    if ($('.header_area').length) {
      $(window).scroll(() => {
        const scroll = $(window).scrollTop();
        if (scroll >= NAV_OFFSET_TOP) {
          $('.header_area').addClass('navbar_fixed');
        } else {
          $('.header_area').removeClass('navbar_fixed');
        }
      });
    }
  }
}
