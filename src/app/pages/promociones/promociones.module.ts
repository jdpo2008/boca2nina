import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { PromocionesComponent } from './promociones.component';


const routes: Routes = [
    {
        path: '',
        component: PromocionesComponent,
        data: { titulo: 'Promociones'}
    }
];

@NgModule({
    declarations: [PromocionesComponent],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes) ],
})
export class PromocionesModule { }