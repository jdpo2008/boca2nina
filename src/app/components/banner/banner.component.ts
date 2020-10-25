import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { MetaDefinition, Title, Meta } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styles: []
})
export class BannerComponent implements OnInit {

  label = '';
  @Input() url;

  constructor(private router: Router, public title: Title, public meta: Meta) {
    this.getDataRoute().subscribe(data => {
      this.label = data.titulo;
      this.title.setTitle( 'Boca2nina - ' + this.label );
      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.label
      };
      this.meta.updateTag(metaTag);
    });
  }

  getDataRoute() {
    return this.router.events
      .pipe(filter(evento => evento instanceof ActivationEnd))
      .pipe(filter((evento: ActivationEnd) => evento.snapshot.firstChild === null ))
      .pipe(map((evento: ActivationEnd) => evento.snapshot.data));
  }

  ngOnInit() {
    // this.url = 'url("./assets/img/banner/parrallax.jpg")';
  }

  getUrl() {
    return this.url;
  }

}
