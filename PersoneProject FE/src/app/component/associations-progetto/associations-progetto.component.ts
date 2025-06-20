import {Component, OnDestroy, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {Persona} from '../../models/persona';
import {ProgettiListService} from '../../services/progetti-list.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Card} from 'primeng/card';
import {Button} from 'primeng/button';
import {Subscription, switchMap} from 'rxjs';
import {ListaPersoneService} from '../../services/persone-list-service';
import {FormsModule} from '@angular/forms';
import {AutoComplete} from 'primeng/autocomplete';

@Component({
  selector: 'app-associations-progetto',
  imports: [
    TableModule,
    Card,
    Button,
    FormsModule,
    AutoComplete
  ],
  templateUrl: './associations-progetto.component.html',
  styleUrl: './associations-progetto.component.scss'
})
export class AssociationsProgettoComponent implements OnInit, OnDestroy {

  constructor(private progettiService: ProgettiListService, private route: ActivatedRoute, private router: Router, private personaService: ListaPersoneService) {
  }

  sub = new Subscription();

  associatedUsers: Persona[] = [];
  selectedUsers: Persona[] = [];
  selectedUsersId: number[] = [];

  wantedUser!: Persona;
  filteredUsers: Persona[] = [];

  isAvailable: boolean = true;

  id: string | null = null;
  idUser: number | null = null;

  ngOnInit() {

    this.id = this.route.snapshot.paramMap?.get('id');

    if (this.id != null) {
      this.progettiService.getPersoneByProjectId(parseInt(this.id)).subscribe(response => {
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

  addUserToProject(user: Persona){
    user = this.wantedUser;
    this.idUser = user.id;
    if (this.idUser != null && this.id != null) {

      const idProject: number = parseInt(this.id)

      const switched = this.personaService.addProjectToPersona(this.idUser, parseInt(this.id)).pipe(
        switchMap(x => this.progettiService.getPersoneByProjectId(idProject))
      )

      switched.subscribe(response => {
        this.associatedUsers = response;
      })
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


  removeUsersFromProject() {
    for (const user of this.selectedUsers) {
      if (typeof user.id === "number") {
        this.selectedUsersId.push(user.id)
      }
    }

    if (this.id != null) {

      const idProject: number = parseInt(this.id)

      const switched = this.progettiService.removeUsersFromProject(this.selectedUsersId, parseInt(this.id)).pipe(
        switchMap(x => this.progettiService.getPersoneByProjectId(idProject))
      )

      switched.subscribe(response => {
        this.associatedUsers = response;
      })
    }
  }

  goToProjectsList(){
    this.router.navigate(['projectsList']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
