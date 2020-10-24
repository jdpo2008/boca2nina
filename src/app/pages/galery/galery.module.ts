import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { GaleryComponent } from './galery.component';

const routes: Routes = [
    {
        path: '',
        component: GaleryComponent,
        data: { titulo: 'Galeria'}
    }
];

@NgModule({
    declarations: [GaleryComponent],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes) ],
})
export class GaleryModule { }