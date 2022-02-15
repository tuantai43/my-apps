import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<p>{{ errorMessage }}</p>`,
  styles: [
    `
      p {
        padding: 10px;
        color: red;
        background-color: #ffd7d7;
        border: 1px solid;
      }
    `,
  ],
})
export class WarningAlertComponent {
  errorMessage = 'Warning message';
}
