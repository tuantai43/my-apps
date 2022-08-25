import { Action } from '@ngrx/store';
import { Location } from './location.reducer';

export enum LocationActionTypes {
  LoadLocation = '[LocationActionTypes] Load locations',
  LoadedLocation = '[LocationActionTypes] Loaded locations',
}

export class LoadLocation implements Action {
  readonly type = LocationActionTypes.LoadLocation;
}

export class LoadedLocation implements Action {
  readonly type = LocationActionTypes.LoadedLocation;
  constructor(public locations: Location[]) {}
}

export type LocationActions = LoadLocation | LoadedLocation;
