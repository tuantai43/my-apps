import { Component, OnInit, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-trainee-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss']
})
export class GpaComponent implements OnInit {
  @Input() formResult!: FormGroup;
  @Input() mode!: string;
  @Input() isEditControl!: boolean;

  expanded = true;
  toggleIcon = false; // Used for custom icon mat-expansion-panel.
  private destroy$ = new Subject();

  data = [
    {
      milestone: 'Thg2-22',
      academicMark: 70,
      disciplinaryMark: 60,
      bonus: 0,
      penalty: 0,
      gpa: 60
    },
    {
      milestone: 'Thg3-22',
      academicMark: 80,
      disciplinaryMark: 80,
      bonus: 10,
      penalty: 0,
      gpa: 80
    },
    {
      milestone: 'Thg4-22',
      academicMark: 70,
      disciplinaryMark: 90,
      bonus: 10,
      penalty: 0,
      gpa: 85
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  expandForExpansion(){
    this.toggleIcon = !this.toggleIcon;
  }

}
