import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from "./component/toolbar/toolbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularProva';
}
