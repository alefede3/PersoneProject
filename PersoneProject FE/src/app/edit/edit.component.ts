import { Component } from '@angular/core';
import { ListaPersoneService } from '../services/persone-list-service';
import { FormsModule, Validators } from '@angular/forms';
import { Persona } from '../models/persona';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';

interface PersonaForm {
  nome: FormControl<string | null>;
  cognome: FormControl<string | null>;
  eta: FormControl<number | null >;
  id: FormControl<number | null>;
}

@Component({
  selector: 'app-edit',
  imports: [FormsModule, ButtonModule, CommonModule, ReactiveFormsModule, MessageModule, IftaLabelModule, InputTextModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  constructor(private listaPersoneService: ListaPersoneService, private route: ActivatedRoute, private router: Router){}

  id!: number;
  persona!: Persona;

  form = new FormGroup<PersonaForm>({
    nome: new FormControl('',  Validators.required),
    cognome: new FormControl('', Validators.required),
    eta: new FormControl(null, Validators.required),
    id: new FormControl(null, Validators.required),
  });

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;

    this.listaPersoneService.getPersona(this.id).subscribe(response => {
    this.persona = response;

     this.form.patchValue({
      nome: this.persona.nome,
      cognome: this.persona.cognome,
      eta: this.persona.eta,
      id: this.persona.id,
     })
    });
  }

  modificaPersona(): void{

    this.persona.nome = this.form.get('nome')?.value ?? '';
    this.persona.cognome = this.form.get('cognome')?.value ?? '';
    this.persona.eta = Number(this.form.get('eta')?.value);

    this.listaPersoneService.updatePersona(this.form.getRawValue() as Persona, this.id).subscribe(() => {
      this.router.navigate(['list']);
    })
  }

}