import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<p>{{ successMessage }}</p>`,
  styles: [
    `
      p {
        padding: 10px;
        color: green;
        background-color: #deffd7;
        border: 1px solid;
      }
    `,
  ],
})
export class SuccessAlertComponent {
  successMessage = 'Success message';
}
