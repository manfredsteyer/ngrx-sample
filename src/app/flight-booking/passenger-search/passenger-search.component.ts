import { Component } from '@angular/core';
import { AuthService } from "app/shared/auth/auth.service";

@Component({
  selector: 'passenger-search',
  template: `
    <div class="row">
    <div class="card">
        <h1>Passenger Search</h1>
      <div class="form-group">
        <label>Name:</label>
        <input [(ngModel)]="userName" class="form-control">
      </div>
      <div>
        This is just a dummy form ...
      </div>
    </div>
    </div>
  `
})
export class PassengerSearchComponent {

  userName: string;

  constructor(private authService: AuthService) {
    this.userName = this.authService.userName;
  }

}
