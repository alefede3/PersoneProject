import { Component } from '@angular/core';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { PersoneListComponent } from "../persone-list/persone-list.component";

@Component({
  selector: 'app-wrapper',
  imports: [ToolbarComponent, PersoneListComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss'
})
export class WrapperComponent {

}
