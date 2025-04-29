import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PersoneListComponent } from './persone-list/persone-list.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'list', component: PersoneListComponent },
    { path: 'edit/:id', component: EditComponent },
];
