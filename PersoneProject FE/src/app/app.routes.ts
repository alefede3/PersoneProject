import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { PersoneListComponent } from './component/persone-list/persone-list.component';
import { AddEditPersonaComponent } from './component/add-edit-persona/add-edit-persona.component';
import { ProgettiListComponent } from './component/progetti-list/progetti-list.component';
import { TabsComponent } from './component/tabs/tabs.component';
import { TabsProjectComponent } from './component/tabs-project/tabs-project.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'list', component: PersoneListComponent },
    { path: 'edit/:id', component: AddEditPersonaComponent },
    { path: 'create/user', component: AddEditPersonaComponent },
    { path: 'userList', component: PersoneListComponent},
    { path: 'projectsList', component: ProgettiListComponent},
    { path: 'tabs/:id', component: TabsComponent},
    { path: 'tabs', component: TabsComponent},
    { path: 'tabsProject/:id', component: TabsProjectComponent},
    { path: 'tabsProject', component: TabsProjectComponent},


];
