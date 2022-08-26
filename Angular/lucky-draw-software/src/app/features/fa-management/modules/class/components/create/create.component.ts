import { Component, OnInit } from '@angular/core';
import { ClassDetailsFacade } from '../../store';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  class$ = this.classDetailsFacade.class$;
  list = [
    {
      title: 'Qwe',
    },
    {
      title: 'Rty',
    },
    {
      title: 'Uio',
    },
    {
      title: 'OP{',
    },
    {
      title: 'Asd',
    },
    {
      title: 'FGH',
    },
  ];

  constructor(private classDetailsFacade: ClassDetailsFacade) {}

  ngOnInit(): void {}

  reset() {
    this.classDetailsFacade.resetClass();
  }
}
