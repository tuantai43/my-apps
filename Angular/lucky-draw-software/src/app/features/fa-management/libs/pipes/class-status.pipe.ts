import { Pipe, PipeTransform } from '@angular/core';
import { ClassStatus } from '@fa-management/store/class';

@Pipe({
  name: 'classStatus',
})
export class ClassStatusPipe implements PipeTransform {
  transform(value: ClassStatus | undefined, ...args: unknown[]): string {
    switch (value) {
      case ClassStatus.InProgress: {
        return 'inProgress';
      }
      case ClassStatus.Enrolled: {
        return 'enrolled';
      }
      case ClassStatus.Draft: {
        return 'draft';
      }
      case ClassStatus.Submitted: {
        return 'submitted';
      }
      case ClassStatus.Cancelled: {
        return 'cancelled';
      }
      case ClassStatus.Draft: {
        return 'draft';
      }
      default: {
        return '';
      }
    }
  }
}
