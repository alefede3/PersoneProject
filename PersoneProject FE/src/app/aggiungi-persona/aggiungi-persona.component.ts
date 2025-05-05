import { Component } from '@angular/core';
import { ListaPersoneService } from '../services/persone-list-service';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IftaLabelModule } from 'primeng/iftalabel';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-aggiungi-persona',
  imports: [ButtonModule, IftaLabelModule, FormsModule, InputTextModule],
  templateUrl: './aggiungi-persona.component.html',
  styleUrl: './aggiungi-persona.component.scss'
})
export class AggiungiPersonaComponent {

  constructor(private listaPersoneService: ListaPersoneService, private router: Router){}

  nome: String = "";
  cognome: String = "";
  eta!: number;

  aggiungiPersona(){
    this.listaPersoneService.addPersona(this.nome, this.cognome, this.eta).subscribe()
    this.router.navigate(['list']);
  }

  goToList(){
    this.router.navigate(['list'])
  }
}

