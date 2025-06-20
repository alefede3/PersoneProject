import {Component, OnDestroy, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {Card} from "primeng/card";
import {TableModule} from "primeng/table";
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription, switchMap} from 'rxjs';
import {Persona} from '../../models/persona';
import {SkillListService} from '../../services/skill-list.service';
import {AutoComplete} from 'primeng/autocomplete';
import {FormsModule} from '@angular/forms';
import {ListaPersoneService} from '../../services/persone-list-service';

@Component({
  selector: 'app-associations-skill',
  imports: [
    Button,
    Card,
    TableModule,
    AutoComplete,
    FormsModule
  ],
  templateUrl: './associations-skill.component.html',
  styleUrl: './associations-skill.component.scss'
})
export class AssociationsSkillComponent implements OnInit, OnDestroy {

  constructor(private skillService: SkillListService, private route: ActivatedRoute, private router: Router, private personaService: ListaPersoneService) {
  }

  sub = new Subscription();

  associatedUsers: Persona[] = [];
  selectedUsers: Persona[] = [];
  selectedUsersId: number[] = [];

  wantedUser!: Persona;
  filteredUsers: Persona[] = [];

  isAvailable: boolean = true;

  id: string | null | undefined;
  idUser: number | null = null;

  skillToAddId: number[] = [];

  ngOnInit() {

    this.id = this.route.snapshot.paramMap?.get('id');

    if (this.id != null) {
      this.skillService.getUsersBySkillId(parseInt(this.id)).subscribe(response => {
        this.associatedUsers = response;
      })
    }
  }

  search(event: any) {
    const user = event.query;

    this.personaService.searchUser(user).subscribe(response => {
      this.filteredUsers = response;
    })
  }

  addUserToSkill(user: Persona) {
    user = this.wantedUser;
    this.idUser = user.id;

    if (this.idUser != null && this.id != null) {
      const idSkill = parseInt(this.id);

      this.skillToAddId.push(idSkill)

      const switched = this.personaService.addSkillToPersona(this.idUser, this.skillToAddId).pipe(
        switchMap(x => this.skillService.getUsersBySkillId(idSkill))
      );

      switched.subscribe(response => {
        this.associatedUsers = response;
      });
    }
  }

  checkUserAvailability(user: Persona) {
    if (user?.id != null) {
      this.personaService.checkUserAvailability(user.id).subscribe(response => {
        this.isAvailable = response;
        this.wantedUser = user;
      });
    }
  }

  removeUsersFromSkill() {
    for (const user of this.selectedUsers) {
      if (typeof user.id === "number") {
        this.selectedUsersId.push(user.id)
      }
    }

    if (this.id != null) {
      const idProject: number = parseInt(this.id)

      const switched = this.skillService.removeUsersFromSkill(this.selectedUsersId, parseInt(this.id)).pipe(
        switchMap(x => this.skillService.getUsersBySkillId(idProject))
      )

      switched.subscribe(response => {
        this.associatedUsers = response;
      })
    }
  }

  goToSkillList(){
    this.router.navigate(['skillList']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
