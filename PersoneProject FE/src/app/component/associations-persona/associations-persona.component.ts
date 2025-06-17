import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListaPersoneService} from '../../services/persone-list-service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Skill} from '../../models/skill';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {SkillListService} from '../../services/skill-list.service';
import {Button} from 'primeng/button';
import {Card} from 'primeng/card';
import {MultiSelect} from 'primeng/multiselect';
import {Select} from 'primeng/select';
import {Progetto} from '../../models/progetto';
import {ProgettiListService} from '../../services/progetti-list.service';

@Component({
  selector: 'app-associations-persona',
  imports: [
    FormsModule,
    CommonModule,
    Button,
    Card,
    MultiSelect,
    Select,
  ],
  templateUrl: './associations-persona.component.html',
  styleUrl: './associations-persona.component.scss'
})
export class AssociationsPersonaComponent implements OnInit,OnDestroy{

  constructor(private personaService: ListaPersoneService,private skillService: SkillListService, private projectService: ProgettiListService, private router: Router, private route: ActivatedRoute) { }

  sub = new Subscription();

  listaSkills: Skill[] = [];
  projectsList: Progetto[] = []

  selectedSkills: Skill[] = [];
  selectedSkillsId: number[] = [];

  selectedProject: Progetto | null = null;

  id: string | null = null;

  ngOnInit(){
    this.id = this.route.snapshot.paramMap?.get('id') || null;

    this.skillService.getAllSkills().subscribe(response =>{
      this.listaSkills = response;

      if (this.id != null) {
        this.personaService.getSkillsByPersonaId(parseInt(this.id)).subscribe(response => {
          this.selectedSkills = response;
        })
      }
    })

    this.projectService.getAllProjects().subscribe(response => {
      this.projectsList = response;

      if (this.id != null) {
        this.personaService.getProjectByPersonaID(parseInt(this.id)).subscribe(response => {
          this.selectedProject = response;
        })
      }
    })
  }

  addSkillToPersona(selectedSkills: Skill[]){
    for (const skill of selectedSkills) {
      let idSkill = skill.id_skill;
      this.selectedSkillsId.push(idSkill)
    }

    if (this.id != null) {
      this.personaService.addSkillToPersona(parseInt(this.id), this.selectedSkillsId).subscribe()
    }
  }

  addProjectToPersona(selectedProject: Progetto | null){
    if (this.id != null) {
      const idProject = selectedProject ? selectedProject.id_progetto : null;
      this.personaService.addProjectToPersona(parseInt(this.id), idProject).subscribe();
    }
  }

  applyChanges(){
    this.addSkillToPersona(this.selectedSkills);

    if (this.selectedProject){
      this.addProjectToPersona(this.selectedProject);
    }else{
      this.addProjectToPersona(null);
    }

    this.goToUserList();
  }

  goToUserList() {
    this.router.navigate(['userList'])
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
