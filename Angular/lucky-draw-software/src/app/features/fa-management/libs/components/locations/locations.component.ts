import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocationFacade } from '@fa-management/store/location';

@Component({
  selector: 'app-locations',
  host: { class: 'app-locations' },
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent {
  @Input() selected: number | string = 0;
  @Output() selectedChange = new EventEmitter<number>();

  locations$ = this.locationFacade.list$;

  constructor(private locationFacade: LocationFacade) {}

  onChange(e: number | string) {
    this.selectedChange.emit(Number(e));
  }
}
