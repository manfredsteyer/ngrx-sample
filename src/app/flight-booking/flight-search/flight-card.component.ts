
import { Component, Input, EventEmitter, Output, OnInit, OnChanges, SimpleChanges, ElementRef, NgZone } from '@angular/core';
import { Flight } from '../../entities/flight';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html'
})
export class FlightCardComponent {

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor(private element: ElementRef, private zone: NgZone) {
    
  }

  select() {
    this.selected = true;
    this.selectedChange.next(/* $event= */ this.selected);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(this.selected);
  }

  blink() {
    // Dirty Hack used to visualize the change detector
    // let originalColor = this.element.nativeElement.firstChild.style.backgroundColor;
    this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.element.nativeElement.firstChild.style.backgroundColor = 'lightsteelblue';
      }, 1000);
    });

    return null;
  }

}
