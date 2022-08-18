import { Component, OnInit } from '@angular/core';
import { CoreFacade } from '@fa-management/store/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private coreFacade: CoreFacade) {
    this.coreFacade.roles$.subscribe((val) => {
      console.log(val);
    });
    this.coreFacade.loadRoles();
  }

  ngOnInit(): void {}
}
