import { Component } from '@angular/core';
import { AuthService } from "app/shared/auth/auth.service";

@Component({
  selector: 'home',
  template: `
    <h1 *ngIf="userName">Willkommen, {{userName}}</h1>
    <h1 *ngIf="!userName">Willkommen!</h1>
    <button class="btn btn-default" (click)="login()">Login</button>
    <button class="btn btn-default" (click)="logout()">Logout</button>
  `
})
export class HomeComponent {

  constructor(private authService: AuthService) {
  }

  get userName() {
    return this.authService.userName;
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
