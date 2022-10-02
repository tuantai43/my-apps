import { Pipe, PipeTransform } from '@angular/core';
import { LocationFacade } from '../store/location';
import { map, Observable } from 'rxjs';

@Pipe({
  name: 'location',
})
export class LocationPipe implements PipeTransform {
  constructor(private locationFacade: LocationFacade) {}

  transform(value: string, ...args: unknown[]): Observable<string> {
    return this.locationFacade.list$.pipe(
      map((locations) => locations.find((l) => l.id === value)),
      map((location) => location?.name || '')
    );
  }
}
