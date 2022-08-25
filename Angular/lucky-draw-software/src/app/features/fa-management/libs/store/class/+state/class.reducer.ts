import { ClassActions, ClassActionTypes } from './class.action';

export const classFeatureKey = 'class';

export interface Class {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  status: string;
}

export interface ClassState {
  classes: Class[];
  isLoadedClass: boolean;
}

const initialState = (): ClassState => ({
  classes: [],
  isLoadedClass: false,
});

export function classReducer(state = initialState(), action: ClassActions): ClassState {
  switch (action.type) {
    case ClassActionTypes.LoadClass: {
      return state;
    }
    case ClassActionTypes.LoadedClass: {
      return {
        ...state,
        isLoadedClass: true,
        classes: action.classes,
      };
    }
    default: {
      return state;
    }
  }
}
