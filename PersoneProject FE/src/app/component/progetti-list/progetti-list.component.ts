import {Component, OnDestroy, OnInit} from '@angular/core';
import { ProgettiListService } from '../../services/progetti-list.service';
import { Progetto, ProgettoQueryParams } from '../../models/progetto';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {Button} from 'primeng/button';
import {Toolbar} from 'primeng/toolbar';
import { Router } from '@angular/router';
import {TieredMenu} from 'primeng/tieredmenu';
import {MenuItem} from 'primeng/api';
import {Dialog} from 'primeng/dialog';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-progetti-list',
  imports: [TableModule, InputTextModule, FormsModule, Button, Toolbar, TieredMenu, Dialog],
  templateUrl: './progetti-list.component.html',
  styleUrl: './progetti-list.component.scss'
})
export class ProgettiListComponent implements OnInit, OnDestroy{

  constructor(private progettiService: ProgettiListService, private route: Router){}

  listaProgetti: Progetto[] = []

  items: MenuItem[] | undefined

  selectedProject!: Progetto

  visibleDelete: boolean = false;
  visibleOption: boolean = false;

  totalRecords!: number;

  progettoParams: ProgettoQueryParams ={
    page: 0,
    size: 10,
    id_progettoInput: null,
    nome_progettoInput: "",
    descrizione_progettoInput: "",
    data_inizioInput: "",
    data_fineInput: "",
    budgetInput: null
  }

  sub = new Subscription();

  ngOnInit(){

    this.items = [
      {
        label: 'Modifica',
        icon: 'pi pi-pen-to-square',
        command: () => this.goToEditProject(this.selectedProject)
      },
      {
        label: 'Elimina',
        icon: 'pi pi-minus-circle',
        command: () => this.showDialogDelete(this.selectedProject)
      }
    ];

    this.progettiService.getProgettiPaginati(this.progettoParams).subscribe(response => {
      this.listaProgetti = response.content;
      this.totalRecords = response.totalElements;
    })
  }

  filtraProgetto(){
    this.progettiService.getProgettiPaginati(this.progettoParams).subscribe()
  }

  openMenuOption(event: MouseEvent, progetto: Progetto, menu: any): void {
    this.selectedProject = progetto;
    menu.toggle(event);
  }

  goToAddProject(){
    this.route.navigate(['tabsProject'])
  }

  goToEditProject(project: Progetto){
    this.route.navigate([`/tabsProject/${project.id_progetto}`])
  }

  showDialogDelete(project: Progetto){
    this.selectedProject = project;

    this.visibleDelete  = true;
  }

  deleteProject(project: Progetto){
    this.progettiService.deleteProject(project.id_progetto!).subscribe(() => {
      this.progettiService.getProgettiPaginati(this.progettoParams).subscribe(response => {
        this.listaProgetti = response.content;
        this.totalRecords = response.totalElements;
      })
    });

    this.visibleDelete = false;
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}

