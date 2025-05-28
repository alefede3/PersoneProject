import {Component, OnDestroy, OnInit} from '@angular/core';
import {SkillListService} from '../../services/skill-list.service';
import {Skill, SkillQueryParams} from '../../models/skill';
import {Button} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {InputText} from 'primeng/inputtext';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableLazyLoadEvent, TableModule} from 'primeng/table';
import {TieredMenu} from 'primeng/tieredmenu';
import {Toolbar} from 'primeng/toolbar';
import {MenuItem} from 'primeng/api';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-skill-list',
  imports: [
    Button,
    Dialog,
    InputText,
    ReactiveFormsModule,
    TableModule,
    TieredMenu,
    Toolbar,
    FormsModule,
  ],
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.scss'
})
export class SkillListComponent implements OnInit, OnDestroy{

  constructor(private skillService: SkillListService, private router: Router) {}

  listaSkills: Skill[] = [];
  totElements!: number;

  skillParam: SkillQueryParams = {
    page: 0,
    size: 10,
    id_skillInput: null,
    nome_skillInput: '',
    descrizione_skillInput: ''
  }

  visibleDelete: boolean = false;

  visibleOption: boolean = false;

  selectedSkill!: Skill;

  items: MenuItem[] | undefined;

  sub = new Subscription();

  ngOnInit(){

    this.items = [
      {
        label: 'Modifica',
        icon: 'pi pi-pen-to-square',
        command: () => this.goToEditSkill(this.selectedSkill)
      },
      {
        label: 'Elimina',
        icon: 'pi pi-minus-circle',
        command: () => this.showDialogDelete(this.selectedSkill)
      }
    ];

    this.skillService.getSkillPaginate(this.skillParam).subscribe(response => {
      this.listaSkills = response.content;
      this.totElements = response.totalElements;
    })
  }

  onPageChange(event: TableLazyLoadEvent){
    const first = event.first ?? 0;
    const rows = event.rows ?? 10;

    this.skillParam.page = first / rows;
    this.skillParam.size = rows;

    this.skillService.getSkillPaginate(this.skillParam).subscribe(response => {
      this.listaSkills = response.content;
      this.totElements = response.totalElements;
    });
  }

  goToAddSkill(){
    this.router.navigate(['tabsSkill'])
  }

  goToEditSkill(skill: Skill){
    this.router.navigate([`/tabsSkill/${skill.id_skill}`])
  }

  showDialogDelete(skill: Skill){
    this.selectedSkill = skill;

    this.visibleDelete  = true;
  }

  filtraSkill(){
    this.skillService.getSkillPaginate(this.skillParam).subscribe(response => {
      this.listaSkills = response.content;
      this.totElements = response.totalElements;
    })
  }

  openMenuOption(event: MouseEvent, skill: Skill, menu: any): void {
    this.selectedSkill = skill;
    menu.toggle(event);
  }

  deleteSkill(skill: Skill){
    this.skillService.deleteSkill(skill.id_skill!).subscribe(() => {
      this.skillService.getSkillPaginate(this.skillParam).subscribe(response => {
        this.listaSkills = response.content;
        this.totElements = response.totalElements;
      })
    });

    this.visibleDelete = false;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
