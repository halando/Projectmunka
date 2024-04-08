import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginModel:any={}
  visible:boolean=true;
  changetype:boolean=true;

  constructor(private auth:AuthService,private spinner:NgxSpinnerService){}
  
  login(){
      this.auth.login(this.loginModel)
  }
  openSpinner(){
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    },5000)
  }
  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
   }
}
