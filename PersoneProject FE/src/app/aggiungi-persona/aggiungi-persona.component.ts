import { Component } from '@angular/core';
import { ListaPersoneService } from '../services/persone-list-service';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IftaLabelModule } from 'primeng/iftalabel';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Persona } from '../models/persona';


@Component({
  selector: 'app-aggiungi-persona',
  imports: [ButtonModule, IftaLabelModule, FormsModule, InputTextModule, ReactiveFormsModule, CommonModule],
  templateUrl: './aggiungi-persona.component.html',
  styleUrl: './aggiungi-persona.component.scss'
})
export class AggiungiPersonaComponent {

  constructor(private listaPersoneService: ListaPersoneService, private router: Router){}

  listaPersone: Persona[] = [];
  
  page: number = 0;
  size: number = 10;

  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    cognome: new FormControl('', Validators.required),
    eta: new FormControl('', Validators.required),
  })

  nome: String = "";
  cognome: String = "";
  eta!: number;

  aggiungiPersona(){

    this.nome = this.form.get('nome')?.value ?? '';
    this.cognome = this.form.get('cognome')?.value ?? '';
    this.eta = Number(this.form.get('eta')?.value);

    this.listaPersoneService.addPersona(this.nome, this.cognome, this.eta).subscribe(() => {
      this.listaPersoneService.getPersonePaginate(this.page, this.size).subscribe(response => {
        this.listaPersone = response;
      });
    })
    this.router.navigate(['list']);
  }

  goToList(){
    this.router.navigate(['list'])
  }
}

