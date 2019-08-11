import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import { NavbarComponent } from './navbar/navbar.component';
import { NavbarCanvasComponent } from './navbar-canvas/navbar-canvas.component';

@NgModule({
  declarations: [ NavbarComponent, NavbarCanvasComponent ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [ NavbarComponent, NavbarCanvasComponent ]
})
export class LayoutModule { }
