import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  oszlopok=["name", "description","link"]
  newEvent:any ={}

  constructor(private authService:AuthService){}

}
