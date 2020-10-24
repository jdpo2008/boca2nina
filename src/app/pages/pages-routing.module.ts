import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PromocionesModule } from './promociones/promociones.module';

const routes: Routes = [
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            {
                path: 'index',
                loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
            },
            {
                path: 'about',
                loadChildren: () => import("./about/about.module").then((m) => m.AboutModule),
            },
            {
                path: 'productos',
                loadChildren: () => import("./service/service.module").then((m) => m.ServiceModule),
            },
            {
                path: 'promociones',
                loadChildren: () => import("./promociones/promociones.module").then((m) => m.PromocionesModule),
            },
            {
                path: 'gallery',
                loadChildren: () => import("./galery/galery.module").then((m) => m.GaleryModule),
            },
            {
                path: 'contacto',
                loadChildren: () => import("./contact/contact.module").then((m) => m.ContactModule),
            },
            {
                path: "",
                redirectTo: "/pages/index",
                pathMatch: "full",
            },
        ]
    },
    {
        path: "",
        redirectTo: "/pages/home",
        pathMatch: "full",
    },
]

@NgModule({
    declarations: [],
    imports: [ RouterModule.forChild(routes) ],
})
export class PagesRoutingModule { }