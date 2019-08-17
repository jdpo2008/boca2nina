import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';


import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

import { PagesComponent } from './pages.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GaleryComponent } from './galery/galery.component';
import { ServiceComponent } from './service/service.component';


@NgModule({
  declarations: [ PagesComponent, NotfoundComponent, HomeComponent, AboutComponent, GaleryComponent, ServiceComponent ],
  imports: [
    RouterModule,
    CommonModule,
    ComponentsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  exports: [ PagesComponent, NotfoundComponent, HomeComponent ]
})
export class PagesModule { }
