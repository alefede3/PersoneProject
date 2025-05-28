import {Component, OnInit} from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenuItem} from 'primeng/api';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-toolbar',
  imports: [ToolbarModule, CommonModule, ButtonModule, RouterModule, TieredMenuModule, SidebarModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit{

  constructor(private router: Router, private appComponent: AppComponent) {}

  sidebarVisible: boolean = false;

  items: MenuItem[] | undefined

  ngOnInit(){
    this.items = [
      {
        label: 'Log out',
        icon: 'pi pi-sign-out',
        command: () => this.userLogOut()
      }
    ]
  }

  openSidebar(){
    this.sidebarVisible = true;
  }

  openIconUser(event: MouseEvent, menu: any){
    menu['toggle'](event);
  }

  userLogOut(){
    this.appComponent.logout();
  }

  goToUsersList(){
    this.router.navigate(['userList'])
  }

  goToProgetti(){
    this.router.navigate(['projectsList'])
  }

  goToSkillList(){
    this.router.navigate(['skillList'])
  }
}

