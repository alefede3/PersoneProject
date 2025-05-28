import {Component, OnDestroy, OnInit} from '@angular/core';
import { Persona, PersonaQueryParams } from '../../models/persona';
import {TableLazyLoadEvent, TableModule} from 'primeng/table';
import { ListaPersoneService } from '../../services/persone-list-service';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { ToolbarModule } from 'primeng/toolbar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenuItem } from 'primeng/api';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-persone-list',
  imports: [TableModule, CommonModule, PaginatorModule, FormsModule, InputTextModule, DialogModule, ButtonModule,
    SelectModule, ToolbarModule, TieredMenuModule],
  providers: [ListaPersoneService],
  templateUrl: './persone-list.component.html',
  styleUrl: './persone-list.component.scss'
})
export class PersoneListComponent implements OnInit, OnDestroy{

  constructor(private listaPersoneService: ListaPersoneService, private router: Router){}

  listaPersone: Persona[] = [];

  items: MenuItem[] | undefined;

  totalRecords!: number;

  personeParams: PersonaQueryParams = this.inizializzaPersoneParams();

  sub = new Subscription();

 inizializzaPersoneParams(): PersonaQueryParams {
    return {
      page: 0,
      size: 10,
      nomeInput: "",
      cognomeInput: "",
      idInput: null,
      etaInput: null,
      luogo_di_nascitaInput: "",
      cittaInput: "",
      indirizzoInput: ""
    }
  }

  personaEdit!: Persona;
  personaSelezionata!: Persona;

  visibleDelete: boolean = false;
  visibleOption: boolean = false;

  ngOnInit(): void{

    this.items = [
      {
        label: 'Modifica',
        icon: 'pi pi-user-edit',
        command: () => this.goToEditPersona(this.personaSelezionata)
      },
      {
        label: 'Elimina',
        icon: 'pi pi-user-minus',
        command: () => this.showDialogDelete(this.personaSelezionata)
      }
    ];

    this.listaPersoneService.getPersonePaginate(this.personeParams).subscribe(response => {
      this.listaPersone = response.content;
      this.totalRecords = response.totalElements;

      this.listaPersoneService.numeroPersoneUpdated(response.totalElements);
    });
  }

  onPageChange(event: TableLazyLoadEvent){
    const first = event.first ?? 0;
    const rows = event.rows ?? 10;

    this.personeParams.page = first / rows;
    this.personeParams.size = rows;

    this.listaPersoneService.getPersonePaginate(this.personeParams).subscribe(response => {
      this.listaPersone = response.content;
      this.totalRecords = response.totalElements;

      this.listaPersoneService.numeroPersoneUpdated(response.totalElements);
    })
  }

  filtra(){
    this.listaPersoneService.getPersonePaginate(this.personeParams).subscribe(response => {
      this.listaPersone = response.content;
      this.totalRecords = response.totalElements;

      this.listaPersoneService.numeroPersoneUpdated(response.totalElements);
    })
  }

  openMenuOption(event: MouseEvent, persona: Persona, menu: any): void {
    this.personaSelezionata = persona;
    menu.toggle(event);
  }

  goToEditPersona(persona: Persona){
    persona = this.personaSelezionata;
    this.router.navigate([`/tabs/${persona.id}`]);
  }

  goToAddPersona(){
    this.router.navigate(['tabs'])
  }

  showDialogDelete(persona: Persona){
    this.personaEdit = persona;

    this.visibleDelete  = true;
  }

  deletePersona(persona: Persona){
    this.listaPersoneService.deletePersona(persona.id!).subscribe(() => {
      this.listaPersoneService.getPersonePaginate(this.personeParams).subscribe(response => {
        this.listaPersone = response.content;
        this.totalRecords = response.totalElements;

        this.listaPersoneService.numeroPersoneUpdated(response.totalElements);
      });
    });

    this.visibleDelete = false;
    this.visibleOption = false;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
