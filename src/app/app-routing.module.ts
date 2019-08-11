import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';

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
        component: HomeComponent
      },
      // {
      //   path: 'about',
      //   component: AboutComponent
      // },
      // {
      //   path: 'services/web',
      //   component: ServiceWebComponent
      // },
      // {
      //   path: 'services/hosting',
      //   component: ServiceHostingComponent
      // },
      // {
      //   path: 'contacto',
      //   component: ContactComponent
      // }
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
