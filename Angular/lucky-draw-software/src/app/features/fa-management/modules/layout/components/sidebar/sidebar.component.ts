import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  host: { class: 'app-sidebar' },
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
