import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';


import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
// import { NavbarCanvasComponent } from './components/layout/navbar-canvas/navbar-canvas.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    PagesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
