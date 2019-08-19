import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { CwdjParallaxModule } from 'cwdj-parallax';

import { ContactformComponent } from './contactform/contactform.component';
import { MapsComponent } from './maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { ImageCardComponent } from './image-card/image-card.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [ ContactformComponent, MapsComponent, ImageCardComponent, BannerComponent ],
  imports: [
    CommonModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    RouterModule,
    CwdjParallaxModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBsUtIuHTuTOc4LGcaL0dDv1-GunKTIMR4'
    })
  ],
  exports: [
    LayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ContactformComponent,
    MapsComponent,
    ImageCardComponent,
    BannerComponent,
    CwdjParallaxModule,
    AgmCoreModule
  ]
})
export class ComponentsModule { }
