import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProgettiListService} from '../../services/progetti-list.service';
import {Button} from 'primeng/button';
import {Card} from 'primeng/card';
import {IftaLabel} from 'primeng/iftalabel';
import {InputText} from 'primeng/inputtext';
import {Progetto} from '../../models/progetto';
import {Subscription} from 'rxjs';
import {Textarea} from 'primeng/textarea';

@Component({
  selector: 'app-add-edit-project',
  imports: [
    Button,
    Card,
    IftaLabel,
    InputText,
    ReactiveFormsModule,
    Textarea
  ],
  templateUrl: './add-edit-project.component.html',
  styleUrl: './add-edit-project.component.scss'
})
export class AddEditProjectComponent implements OnInit, OnDestroy {

  constructor(private progettiService: ProgettiListService, private router: Router, private route: ActivatedRoute){}

  id: string | null = null;

  form = new FormGroup({
    id_progetto: new FormControl<number | null>(null),
    nome_progetto: new FormControl<string |null>('', Validators.required),
    descrizione_progetto: new FormControl<string | null>('', Validators.required),
    data_inizio: new FormControl<string | null>(null, Validators.required),
    data_fine: new FormControl<string | null>('', Validators.required),
    budget: new FormControl<number | null>(null, Validators.required)
  })

  sub = new Subscription();

  ngOnInit(){

    this.id = this.route.snapshot.paramMap?.get('id') || null;

    if (this.id) {
      this.progettiService.getProject(parseInt(this.id)).subscribe(response => {
        this.form.patchValue(response)
      })

    }
  }

  submit(){

    this.id = this.route.snapshot.paramMap?.get('id') || null;

    if (this.id) {
      this.progettiService.updateProject(this.form.getRawValue() as Progetto, parseInt(this.id)).subscribe(() => {
        this.goToProjectsList();
      })

    }else{
      this.progettiService.addProject(this.form.getRawValue() as Progetto).subscribe(() =>{
        this.goToProjectsList();
      })
    }
  }

  goToProjectsList(){
    this.router.navigate(['projectsList'])
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
