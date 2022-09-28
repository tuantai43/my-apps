import { Action } from '@ngrx/store';
import { UserRole } from './reducer';

export enum CoreActionTypes {
  LoadRoles = '[CoreActionTypes] Load roles',
  LoadedRoles = '[CoreActionTypes] Loaded roles',
}

export class LoadRoles implements Action {
  readonly type = CoreActionTypes.LoadRoles;
}

export class LoadedRoles implements Action {
  readonly type = CoreActionTypes.LoadedRoles;
  constructor(public roles: UserRole[]) {}
}

export type CoreActions = LoadRoles | LoadedRoles;
