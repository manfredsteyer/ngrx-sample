import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from "app/entities/flight";
import { FlightService } from "app/flight-booking/flight-search/flight.service";

@Component({
  selector: 'flight-edit',
  template: `
    <div class="card" *ngIf="flight">
      <h1>Flight Edit</h1>
      <div *ngIf="message">
        {{ message }}
      </div>
      <div class="control-group">
        <label>Id:</label>
        <input [(ngModel)]="flight.id" class="form-control">
      </div>
      <div class="control-group">
        <label>From:</label>
        <input [(ngModel)]="flight.from" class="form-control">
      </div>
      <div class="control-group">
        <label>To:</label>
        <input [(ngModel)]="flight.to" class="form-control">
      </div>
      <div class="control-group">
        <label>Date:</label>
        <input [(ngModel)]="flight.date" class="form-control">
      </div>
      <div class="control-group">
        <button class="btn btn-default" (click)="save()">Save</button>
      </div>
      
    </div>
  `
})
export class FlightEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService) {
  }

  id: string;
  showDetails: string;
  flight: Flight;
  message: string;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.showDetails = params['showDetails'];

      this.flightService.findById(this.id).subscribe(
        f => { this.flight = f; },
        err => { console.error(err); }
      );

    });
  }

  save() {
    this.flightService.save(this.flight).subscribe(
      f => { 
        this.flight = f; 
        this.message = 'Successfully saved!'; 
      },
      err => { 
        console.error(err); 
        this.message = 'Fehler beim Speichern: ' + err.text();
      }
    );
  }
}
