import {Component, OnInit} from '@angular/core';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "primeng/tabs";
import {ActivatedRoute} from '@angular/router';
import {AddEditSkillComponent} from '../add-edit-skill/add-edit-skill.component';

@Component({
  selector: 'app-tabs-skill',
  imports: [
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    AddEditSkillComponent
  ],
  templateUrl: './tabs-skill.component.html',
  styleUrl: './tabs-skill.component.scss'
})
export class TabsSkillComponent implements OnInit {
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
