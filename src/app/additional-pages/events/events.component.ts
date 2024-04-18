import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  panelOpenState = false;
  events:any
  oszlopok=["name", "description","link"]
  user:any;

  constructor(private authService:AuthService, private router: Router){

    this.loadEvents();
   
    this.authService.getCurrentUser().subscribe(
      (res)=>this.user=res
    )

  }


  loadEvents(){
    this.authService.getEvents().subscribe({
      next:  (res)=>{this.events=res; console.log("OK",res)},
      error: (res)=>console.log("Hiba",res)
    
    }
    )      
  }
  add(){
    this.authService.eventadd("teszt").subscribe()
  }

  deleteEvent(event:any){
    this.authService.eventdelete(event).subscribe(
      ()=>this.loadEvents()
    )
  }

  updateEvent(event:any){
    this.router.navigate(['/newevent',event.id])
  }
}
