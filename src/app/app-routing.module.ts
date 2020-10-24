import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import("./pages/pages.module").then((m) => m.PagesModule),
  },
  {
    path: 'error_404',
    loadChildren: () => import("./pages/notfound/notfound.module").then((m) => m.NotfoundModule),
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
