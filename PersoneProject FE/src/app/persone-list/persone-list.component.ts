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
  totalRecords: number = this.listaPersone.length;

  nomeInput: string="";
  cognomeInput: string="";

  visible: boolean = false;

  etaSelezionabili: number[] = [];
  etaSelezionata: number = 0;

  personaEdit!: Persona;

  ngOnInit(): void{
    console.log("Component creato")

    this.listaPersoneService.getListaPersone();

    this.listaPersoneService.getPersonePaginate(this.page, this.size).subscribe(response => {
      this.listaPersone = response;

    });

    for (let i = 1; i <= 100; i++) {
      this.etaSelezionabili.push(i);  
    }
  }

  onPageChange(event: PaginatorState) {
    this.page = event.first!/event.rows!;
    this.size = event.rows!;
    console.log("pagina", this.page, "num righe", this.size)
    this.listaPersoneService.getPersonePaginate(this.page, this.size).subscribe(response => {
      this.listaPersone = response;
    })   
  }

  filtraNome(){
    this.listaPersoneService.getPersoneFiltrateNome(this.nomeInput).subscribe(response => {
      this.listaPersone = response;
    })
  }

  filtraCognome(){
    this.listaPersoneService.getPersoneFiltrateCognome(this.cognomeInput).subscribe(response => {
      this.listaPersone = response;
    })
  }

  goToEditPersona(persona: Persona){
    this.router.navigate([`/edit/${persona.id}`]);
    console.log("persona passata ", persona) 
  }

  showDialog(persona: Persona) {
    this.personaEdit = persona;
    this.etaSelezionata = persona.eta;

    this.visible = true;
  }

  savePersona(persona: Persona) {
    persona.eta = this.etaSelezionata;

    this.listaPersoneService.savePersona(persona).subscribe();    
    this.visible = false;
  }

  goToAdd(){
    this.router.navigate(['aggiungi'])
  }

}
