import {Component, OnDestroy, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {Card} from "primeng/card";
import {IftaLabel} from "primeng/iftalabel";
import {InputText} from "primeng/inputtext";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {SkillListService} from '../../services/skill-list.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Skill} from '../../models/skill';
import {Textarea} from 'primeng/textarea';

@Component({
  selector: 'app-add-edit-skill',
  imports: [
    Button,
    Card,
    IftaLabel,
    InputText,
    ReactiveFormsModule,
    Textarea
  ],
  templateUrl: './add-edit-skill.component.html',
  styleUrl: './add-edit-skill.component.scss'
})
export class AddEditSkillComponent implements OnInit, OnDestroy {
  constructor(private skillService: SkillListService, private router: Router, private route: ActivatedRoute){}

  id: string | null = null;

  form = new FormGroup({
    id_skill: new FormControl<number | null>(null),
    nome_skill: new FormControl<string |null>('', Validators.required),
    descrizione_skill: new FormControl<string | null>('', Validators.required),
  })

  sub = new Subscription();

  ngOnInit(){

    this.id = this.route.snapshot.paramMap?.get('id') || null;

    if (this.id) {
      this.skillService.getSkill(parseInt(this.id)).subscribe(response => {
        this.form.patchValue(response)
      })

    }
  }

  submit(){

    this.id = this.route.snapshot.paramMap?.get('id') || null;

    if (this.id) {
      this.skillService.updateSkill(this.form.getRawValue() as Skill, parseInt(this.id)).subscribe(() => {
        this.goToSkillsList();
      })

    }else{
      this.skillService.addSkill(this.form.getRawValue() as Skill).subscribe(() =>{
        this.goToSkillsList();
      })
    }
  }

  goToSkillsList(){
    this.router.navigate(['skillList'])
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
