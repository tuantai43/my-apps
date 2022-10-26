import { Component, OnInit } from '@angular/core';
import { ClassFacade, DataSearch } from '@app/features/fa-management/libs/store/class';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  classNames$ = this.classFacade.classNames$;
  dataSearch: DataSearch = {
    location: '',
    className: '',
    status: 0,
  };

  constructor(private classFacade: ClassFacade) {}

  ngOnInit(): void {}

  onSearch() {
    this.classFacade.updateDataSearch({
      location: this.dataSearch.location,
      className: this.dataSearch.className,
      status: Number(this.dataSearch.status),
    });
  }
}
