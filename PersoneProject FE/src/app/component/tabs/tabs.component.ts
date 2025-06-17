import {Component, OnInit} from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { AddEditPersonaComponent } from "../add-edit-persona/add-edit-persona.component";
import { ActivatedRoute } from '@angular/router';
import {AssociationsPersonaComponent} from '../associations-persona/associations-persona.component';


@Component({
  selector: 'app-tabs',
  imports: [TabsModule, AddEditPersonaComponent, AssociationsPersonaComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent implements OnInit {

  constructor(private route: ActivatedRoute){}

  id: string | null = null;
  checkId: boolean = false;

  ngOnInit(){
    this.id = this.route.snapshot.paramMap?.get('id') || null;

    if (this.id) {
      this.checkId = true;
    }
  }
}
