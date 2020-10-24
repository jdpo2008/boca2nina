import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { ServiceComponent } from './service.component';

const routes: Routes = [
    {
        path: '',
        component: ServiceComponent,
        data: { titulo: 'Productos'}
    }
];

@NgModule({
    declarations: [ServiceComponent],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes) ],
})
export class ServiceModule { }