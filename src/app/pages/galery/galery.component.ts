import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig  } from 'ngx-lightbox';


@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styles: []
})
export class GaleryComponent implements OnInit {
  private albums: any[] = [];
  url = '';
  constructor(private lightbox: Lightbox, private lighboxConfig: LightboxConfig) {
    for (let i = 1; i <= 7; i++) {
      const SRC = '../../../assets/img/gallery/g' + i + '.jpg';
      const CAPTION = 'Imagen ' + i + ' caption here';
      const THUMB = '../../../assets/img/gallery/g' + i + '.jpg';
      const album = {
         src: SRC,
         caption: CAPTION,
         thumb: THUMB
      };

      this.albums.push(album);
    }
  }

  ngOnInit() {
    this.url = 'url("./assets/img/banner/parrallax.jpg")';
  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.albums, index, { centerVertically: true, showImageNumberLabel: true });
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }

}
