import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-jegy',
  templateUrl: './jegy.component.html',
  styleUrls: ['./jegy.component.css']
})
export class JegyComponent {
  constructor(private spinner:NgxSpinnerService){}

  openSpinner(){
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    }, 3500)
  }
}
