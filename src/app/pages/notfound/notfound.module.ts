import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { NotfoundComponent } from './notfound.component';

const routes: Routes = [
    {
        path: '',
        component: NotfoundComponent,
        data: { titulo: 'Error 400'}
    }
];

@NgModule({
    declarations: [NotfoundComponent],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes) ],
})
export class NotfoundModule { }