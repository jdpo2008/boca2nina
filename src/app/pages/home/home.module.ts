import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { titulo: 'Home'}
    }
];

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes) ],
})
export class HomeModule { }