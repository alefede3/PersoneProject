import { Component } from '@angular/core';
import { ListaPersoneService } from '../../services/persone-list-service';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IftaLabelModule } from 'primeng/iftalabel';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Persona, PersonaQueryParams } from '../../models/persona';


@Component({
  selector: 'app-aggiungi-persona',
  imports: [ButtonModule, IftaLabelModule, FormsModule, InputTextModule, ReactiveFormsModule, CommonModule],
  templateUrl: './aggiungi-persona.component.html',
  styleUrl: './aggiungi-persona.component.scss'
})
export class AggiungiPersonaComponent {

  constructor(private listaPersoneService: ListaPersoneService, private router: Router){}

  form = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl<string>('', Validators.required),
    cognome: new FormControl('', Validators.required),
    eta: new FormControl(null, Validators.required),
    luogo_di_nascita: new FormControl('', Validators.required),
    citta: new FormControl('', Validators.required),
    indirizzo: new FormControl('', Validators.required),
  })

  aggiungiPersona(){
    this.listaPersoneService.addPersona(this.form.getRawValue()).subscribe(() => {})
    this.router.navigate(['list']);
  }

  goToList(){
    this.router.navigate(['list'])
  }
}

