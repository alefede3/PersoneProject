import { Component } from '@angular/core';
import { ListaPersoneService } from '../../services/persone-list-service';
import { ToolbarModule } from 'primeng/toolbar';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';


@Component({
  selector: 'app-toolbar',
  imports: [ToolbarModule, CommonModule, ButtonModule, RouterModule, SidebarModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  constructor(public listaPersoneService: ListaPersoneService, private router: Router ) {}

  sidebarVisible: boolean = false;

  openSidebar(){
    this.sidebarVisible = true;
  }

  goToUsersList(){
    this.router.navigate(['userList'])
  }

  goToProgetti(){
    this.router.navigate(['projectsList'])
  }
}

