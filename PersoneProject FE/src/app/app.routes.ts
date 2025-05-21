import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { PersoneListComponent } from './component/persone-list/persone-list.component';
import { AggiungiPersonaComponent } from './component/aggiungi-persona/aggiungi-persona.component';
import { AddEditPersonaComponent } from './component/add-edit-persona/add-edit-persona.component';
import { ProgettiListComponent } from './component/progetti-list/progetti-list.component';
import { TabsComponent } from './component/tabs/tabs.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'list', component: PersoneListComponent },
    { path: 'edit/:id', component: AddEditPersonaComponent },
    { path: 'create', component: AddEditPersonaComponent },
    { path: 'userList', component: PersoneListComponent},
    { path: 'projectsList', component: ProgettiListComponent},
    { path: 'tabs', component: TabsComponent}
];
