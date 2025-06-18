import {Component, OnInit} from '@angular/core';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from 'primeng/tabs';
import {ActivatedRoute} from '@angular/router';
import {AddEditProjectComponent} from '../add-edit-project/add-edit-project.component';
import {AssociationsProgettoComponent} from '../associations-progetto/associations-progetto.component';

@Component({
  selector: 'app-tabs-project',
  imports: [
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    AddEditProjectComponent,
    AssociationsProgettoComponent
  ],
  templateUrl: './tabs-project.component.html',
  styleUrl: './tabs-project.component.scss'
})
export class TabsProjectComponent implements OnInit {

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
