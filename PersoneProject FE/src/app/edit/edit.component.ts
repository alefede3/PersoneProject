import { Component } from '@angular/core';
import { ListaPersoneService } from '../services/persone-list-service';
import { FormsModule, Validators } from '@angular/forms';
import { Persona } from '../models/persona';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  imports: [FormsModule, ButtonModule, CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  constructor(private listaPersoneService: ListaPersoneService, private route: ActivatedRoute, private router: Router){}

  id!: number;
  persona!: Persona;

  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    cognome: new FormControl('', Validators.required),
    eta: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;

    this.listaPersoneService.getPersona(this.id).subscribe(response => {
    this.persona = response;

     this.form.patchValue({
      nome: this.persona.nome,
      cognome: this.persona.cognome,
      eta: this.persona.eta.toString()
     })
    });
  }

  modificaPersona(): void{

    this.persona.nome = this.form.get('nome')?.value ?? '';
    this.persona.cognome = this.form.get('cognome')?.value ?? '';
    this.persona.eta = Number(this.form.get('eta')?.value);

    this.listaPersoneService.updatePersona(this.persona, this.id).subscribe()

    this.listaPersoneService.getListaPersone();


    this.router.navigate(['/list']);

  }

}