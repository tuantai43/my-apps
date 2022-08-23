import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() openSidebar: boolean = false;
  @Output() openSidebarChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.openSidebarChange.emit(!this.openSidebar);
  }
}
