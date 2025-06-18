import {Component, OnDestroy, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {Card} from "primeng/card";
import {TableModule} from "primeng/table";
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Persona} from '../../models/persona';
import {SkillListService} from '../../services/skill-list.service';
import {Message} from 'primeng/message';

@Component({
  selector: 'app-associations-skill',
  imports: [
    Button,
    Card,
    TableModule,
    Message
  ],
  templateUrl: './associations-skill.component.html',
  styleUrl: './associations-skill.component.scss'
})
export class AssociationsSkillComponent implements OnInit, OnDestroy {

  constructor(private skillService: SkillListService, private route: ActivatedRoute, private router: Router) {
  }

  sub = new Subscription();

  associatedUsers: Persona[] = [];
  selectedUsers: Persona[] = [];
  selectedUsersId: number[] = [];

  id: string | null | undefined;

  ngOnInit() {

    this.id = this.route.snapshot.paramMap?.get('id');

    if (this.id != null) {
      this.skillService.getUsersBySkillId(parseInt(this.id)).subscribe(response => {
        this.associatedUsers = response;
      })
    }
  }

  removeUsersFromSkill() {
    for (const user of this.selectedUsers) {
      if (typeof user.id === "number") {
        this.selectedUsersId.push(user.id)
      }
    }

    if (this.id != null) {
      this.skillService.removeUsersFromSkill(this.selectedUsersId, parseInt(this.id)).subscribe();
    }

    this.goToSkillList()
  }

  goToSkillList(){
    this.router.navigate(['skillList']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
