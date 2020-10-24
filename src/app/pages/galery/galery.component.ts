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
  caption = [{
    index: 1,
    Descripcion: "Torta Tematica 44 Gatos"
  },
  {
    index: 2,
    Descripcion: "Torta de Chocolate"
  },
  {
    index: 3,
    Descripcion: "Torta Simple con Dibujo"
  },
  {
    index: 4,
    Descripcion: "Torta Resotones y Cereza"
  },
  {
    index: 5,
    Descripcion: "Mil Hojas Frutas"
  },
  {
    index: 6,
    Descripcion: "Mil Hojas Frutas"
  },
  {
    index: 7,
    Descripcion: "Mil Hojas Frutas Crema Pastelera"
  },
  {
    index: 8,
    Descripcion: "Torta Tematica Minie Mouse"
  },
  {
    index: 9,
    Descripcion: "Torta Tematica Redes Sociales"
  }];

  constructor(private lightbox: Lightbox, private lighboxConfig: LightboxConfig) {
    for (let i = 1; i <= 9; i++) {
      const text = this.caption.find(x => x.index === i);
      const SRC = '/assets/img/gallery/g' + i + '.jpg';
      const CAPTION = 'Imagen ' + i +  ' ' + text.Descripcion;
      const THUMB = '/assets/img/gallery/g' + i + '.jpg';
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
