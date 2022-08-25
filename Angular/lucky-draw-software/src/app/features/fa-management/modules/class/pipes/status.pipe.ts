import { Pipe, PipeTransform } from '@angular/core';
import { StatusClass } from '@fa-management/store/class';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(value: StatusClass, ...args: unknown[]): string {
    switch (value) {
      case StatusClass.InProgress: {
        return 'inProgress';
      }
      case StatusClass.Enrolled: {
        return 'enrolled';
      }
      case StatusClass.Draft: {
        return 'draft';
      }
      case StatusClass.Submitted: {
        return 'submitted';
      }
      case StatusClass.Cancelled: {
        return 'cancelled';
      }
      default: {
        return 'draft';
      }
    }
  }
}
