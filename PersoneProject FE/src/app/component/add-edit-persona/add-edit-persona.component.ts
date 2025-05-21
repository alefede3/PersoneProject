import { Component, input } from '@angular/core';
import { Persona } from '../../models/persona';
import { CardModule } from 'primeng/card';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaPersoneService } from '../../services/persone-list-service';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { IftaLabelModule } from 'primeng/iftalabel';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { TabsModule } from 'primeng/tabs';
import { TabsComponent } from "../tabs/tabs.component";

@Component({
  selector: 'app-add-edit-persona',
  imports: [CardModule, IftaLabelModule, FormsModule, ReactiveFormsModule, ButtonModule, CommonModule, InputTextModule, TabsModule, RouterModule],
  templateUrl: './add-edit-persona.component.html',
  styleUrl: './add-edit-persona.component.scss'
})
export class AddEditPersonaComponent {

  constructor(private listaPersoneService: ListaPersoneService, private router: Router, private route: ActivatedRoute){}

  id: string | null = null;

 
  form = new FormGroup({
    id: new FormControl<number | null>(null),
    nome: new FormControl<string |null>('', Validators.required),
    cognome: new FormControl<string | null>('', Validators.required),
    eta: new FormControl<number | null>(null, Validators.required),
    luogo_di_nascita: new FormControl<string | null>('', Validators.required),
    citta: new FormControl<string | null>('', Validators.required),
    indirizzo: new FormControl<string | null>('', Validators.required),
  })

  ngOnInit(){

    this.id = this.route.snapshot.paramMap?.get('id') || null;

    if (this.id) {
        this.listaPersoneService.getPersona(parseInt(this.id)).subscribe(response => {
        this.form.patchValue(response)
      })
    }
  }

  submit(){

    this.id = this.route.snapshot.paramMap?.get('id') || null;

    if (this.id) {
      this.listaPersoneService.updatePersona(this.form.getRawValue() as Persona, parseInt(this.id)).subscribe(() => {
        this.router.navigate(['create'])
      })
      
    }else{
      this.listaPersoneService.addPersona(this.form.getRawValue()).subscribe(() => {})
      this.router.navigate(['edit/:id']);
    }  
  }

  goToList(){
    this.router.navigate(['list'])
  }  
}
