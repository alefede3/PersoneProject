import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { TableModule } from 'primeng/table';
import { ListaPersoneService } from '../services/persone-list-service';
import { CommonModule } from '@angular/common';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { ToolbarModule } from 'primeng/toolbar';


@Component({
  selector: 'app-persone-list',
  imports: [TableModule, CommonModule, PaginatorModule, FormsModule, InputTextModule, DialogModule, ButtonModule, SelectModule, ToolbarModule],
  providers: [ListaPersoneService],
  templateUrl: './persone-list.component.html',
  styleUrl: './persone-list.component.scss'
})
export class PersoneListComponent implements OnInit{
  constructor(private listaPersoneService: ListaPersoneService, private router: Router){}

  listaPersone: Persona[] = [];

  page: number = 0;
  size: number = 10;
  totalRecords!: number;

  nomeInput: string = "";
  cognomeInput: string = "";

  visible: boolean = false;

  etaSelezionabili: number[] = [];
  etaSelezionata: number = 0;

  personaEdit!: Persona;

  id: number = 0;

  visibleDelete: boolean = false;

  ngOnInit(): void{
    this.listaPersoneService.getPersonePaginate(this.page, this.size, this.nomeInput, this.cognomeInput).subscribe(response => {
      this.listaPersone = response.content;
      this.totalRecords = response.totalElements;
      console.log("total records ", this.totalRecords)


    });

    for (let i = 1; i <= 100; i++) {
      this.etaSelezionabili.push(i);  
    }
  }

  onPageChange(event: PaginatorState) {
    this.page = event.first!/event.rows!;
    this.size = event.rows!;
    this.listaPersoneService.getPersonePaginate(this.page, this.size, this.nomeInput, this.cognomeInput).subscribe(response => {
      this.listaPersone = response.content;
    })   
  }

  /* filtraNome(){
    this.listaPersoneService.getPersonePaginate(this.page, this.size, this.nomeInput, this.cognomeInput).subscribe(response => {
      this.listaPersone = response.content;
    })
  }

  filtraNome(){
    this.listaPersoneService.getPersonePaginate(this.page, this.size, this.nomeInput, this.cognomeInput).subscribe(response => {
      this.listaPersone = response.content;
    })
  } */

  filtra(){
    this.listaPersoneService.getPersonePaginate(this.page, this.size, this.nomeInput, this.cognomeInput).subscribe(response => {
      this.listaPersone = response.content;
    })
  }

  /* filtraCognome(){
    this.listaPersoneService.getPersoneFiltrateCognome(this.cognomeInput).subscribe(response => {
      this.listaPersone = response;
    })
  } */

  goToEditPersona(persona: Persona){
    this.router.navigate([`/edit/${persona.id}`]);
  }

  showDialog(persona: Persona) {
    this.personaEdit = persona;
    this.etaSelezionata = persona.eta;

    this.visible = true;
  }

  showDialogDelete(persona: Persona){
    this.personaEdit = persona;

    this.visibleDelete  = true;
  }

  savePersona(persona: Persona) {
    persona.eta = this.etaSelezionata;

    this.listaPersoneService.savePersona(persona, persona.id).subscribe();    
    this.visible = false;
  }

  goToAdd(){
    this.router.navigate(['aggiungi'])
  }

  deletePersona(persona: Persona){
    this.listaPersoneService.deletePersona(persona.id).subscribe(() => {
      this.visibleDelete = false;
      this.listaPersoneService.getPersonePaginate(this.page, this.size, this.nomeInput, this.cognomeInput).subscribe(response => {
        this.listaPersone = response.content;
      });
    });    
  }
  
}
