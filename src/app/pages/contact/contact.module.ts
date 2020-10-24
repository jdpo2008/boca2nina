import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { ContactComponent } from './contact.component';

const routes: Routes = [
    {
        path: '',
        component: ContactComponent,
        data: { titulo: 'Contacto' }
    }
];

@NgModule({
    declarations: [ContactComponent],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes) ],
})
export class ContactModule { }