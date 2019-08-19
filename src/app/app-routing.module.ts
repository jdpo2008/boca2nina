import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GaleryComponent } from './pages/galery/galery.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full'
  },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {
        path: 'index',
        component: HomeComponent,
        data: { titulo: 'Home'}
      },
      {
        path: 'about',
        component: AboutComponent,
        data: { titulo: 'Quienes Somos'}
      },
      {
        path: 'productos',
        component: ServiceComponent,
        data: { titulo: 'Productos'}
      },
      {
        path: 'gallery',
        component: GaleryComponent,
        data: { titulo: 'Galeria'}
      },
      {
        path: 'contacto',
        component: ContactComponent,
        data: { titulo: 'Contacto'}
      }
    ]
  },
  {
    path: 'error_404',
    component: NotfoundComponent
  },
  {
    path: '**',
    redirectTo: 'error_404',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
})
export class AppRoutingModule { }
