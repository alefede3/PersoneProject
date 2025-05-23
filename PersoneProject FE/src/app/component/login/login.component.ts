import {Component, OnDestroy} from '@angular/core';
import { LoginService } from '../../services/login-service';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { IftaLabelModule } from 'primeng/iftalabel';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [InputTextModule, PasswordModule, IftaLabelModule, FormsModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy {

  constructor(private loginService: LoginService, private router: Router){}

  username: string = "";
  password: string = "";
  credenzialiGiuste  = false;

  sub = new Subscription();

  login(): void {
    this.loginService.credenzialiGiuste(this.username, this.password).subscribe(response =>{
      if(response){
        this.router.navigate(['/list']);
      }else{
        alert("Credenziali errate")
      }

    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
