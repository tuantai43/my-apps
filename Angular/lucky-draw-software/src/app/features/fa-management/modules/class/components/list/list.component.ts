import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

interface DataSearch {
  location: string;
  className: string;
  status: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  nativeSelectFormControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {}
}
