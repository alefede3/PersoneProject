import { Component} from '@angular/core';
import { ProgettiListService } from '../../services/progetti-list.service';
import { Progetto, ProgettoQueryParams } from '../../models/progetto';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-progetti-list',
  imports: [TableModule, InputTextModule, FormsModule],
  templateUrl: './progetti-list.component.html',
  styleUrl: './progetti-list.component.scss'
})
export class ProgettiListComponent {
  constructor(private progettiService: ProgettiListService){}

  listaProgetti: Progetto[] = []

  progettoParams: ProgettoQueryParams ={
    page: 0,
    size: 10,
    id_progettoInput: null,
    nome_progettoInput: "",
    descrizione_progettoInput: "",
    data_inizioInput: "",
    data_fineInput: "",
    budgetInput: null
  }

  ngOnInit(){
    this.progettiService.getProgettiPaginati(this.progettoParams).subscribe(response => {
      this.listaProgetti = response.content;
    })
  }

  filtraProgetto(){
    this.progettiService.getProgettiPaginati(this.progettoParams).subscribe()
  }
}
