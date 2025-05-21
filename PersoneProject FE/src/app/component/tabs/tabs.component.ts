import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { AddEditPersonaComponent } from "../add-edit-persona/add-edit-persona.component";

@Component({
  selector: 'app-tabs',
  imports: [TabsModule, AddEditPersonaComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {

}
