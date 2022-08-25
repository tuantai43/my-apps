import { Component, OnInit } from '@angular/core';
import { ClassFacade, DataSearch } from '@app/features/fa-management/libs/store/class';
import { LocationFacade } from '@app/features/fa-management/libs/store/location';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  statuses$ = this.classFacade.statuses$;
  classNames$ = this.classFacade.classNames$;
  locations$ = this.locationFacade.locations$;
  dataSearch: DataSearch = {
    location: 0,
    className: '',
    status: 0,
  };

  constructor(private classFacade: ClassFacade, private locationFacade: LocationFacade) {}

  ngOnInit(): void {}

  onSearch() {
    this.classFacade.updateDataSearch({
      location: Number(this.dataSearch.location),
      className: this.dataSearch.className,
      status: Number(this.dataSearch.status),
    });
  }
}
