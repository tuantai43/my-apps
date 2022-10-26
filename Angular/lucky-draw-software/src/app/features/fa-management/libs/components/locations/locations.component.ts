import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocationFacade } from '@fa-management/store/location';

@Component({
  selector: 'app-locations',
  host: { class: 'app-locations' },
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent {
  @Input() selected: string = '';
  @Output() selectedChange = new EventEmitter<string>();

  locations$ = this.locationFacade.list$;

  constructor(private locationFacade: LocationFacade) {}

  onChange(e: string) {
    this.selectedChange.emit(e);
  }
}
