import { Component } from '@angular/core';
import { ListaPersoneService } from '../services/persone-list-service';
import { Persona } from '../models/persona';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IftaLabelModule } from 'primeng/iftalabel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aggiungi-persona',
  imports: [ButtonModule, IftaLabelModule, FormsModule],
  templateUrl: './aggiungi-persona.component.html',
  styleUrl: './aggiungi-persona.component.scss'
})
export class AggiungiPersonaComponent {

  constructor(private listaPersoneService: ListaPersoneService, private router: Router){}

  persona: Persona = {
    id: 0,
    nome: "",
    cognome: "",
    eta: 0,
  };

  aggiungiPersona(){
      this.listaPersoneService.savePersona(this.persona)

      console.log("sono in aggiungipersona")
      this.router.navigate(['aggiungi']);
    }

  goToList(){
    console.log("sono nel router gotolist")
    this.router.navigate(['list'])
  }
}
