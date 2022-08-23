import { Component, OnInit } from '@angular/core';
import { CoreFacade } from '@fa-management/store/core';
import { ActionType } from '@fa-management/directives';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  actionType = ActionType;

  ngOnInit(): void {}
}
