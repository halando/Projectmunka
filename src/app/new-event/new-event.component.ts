import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent {
  oszlopok = ["name", "description", "link"]
  newEvent: any = {}

  constructor(private authService: AuthService, private router: Router, private aroute: ActivatedRoute) {
    aroute.paramMap.subscribe(
      (params: any) => {
        if (!params.params.id) {
          this.newEvent = {}

        }
        else {
          this.authService.getEvent(params.params.id).subscribe(
            (res) => this.newEvent = res
          )
        }
      }
    )


  }
  addEvent() {
    if (!this.newEvent.id) {
      this.authService.eventadd(this.newEvent).subscribe(
        () => this.router.navigate(["/fooldal"])
      )
    }
    else {
      this.authService.putEvent(this.newEvent).subscribe(
        () => this.router.navigate(["/fooldal"])
      )

    }
  }
}
