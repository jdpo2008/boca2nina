import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
    {
        path: '',
        component: AboutComponent,
        data: { titulo: 'Quienes Somos' }
    }
];

@NgModule({
    declarations: [AboutComponent],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes) ],
})
export class AboutModule { }