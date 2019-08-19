import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styles: []
})
export class MapsComponent implements OnInit {
  lat: number;
  lng: number;
  label: string;
  constructor() { }

  ngOnInit() {
    this.lat = -12.0220229;
    this.lng = -77.0780641;
    this.label = 'A';
  }
  clickedMarker(label: string) {
    console.log(`clicked the marker: ${label}`);
  }
}
