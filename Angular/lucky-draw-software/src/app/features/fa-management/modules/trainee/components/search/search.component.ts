import { Component, OnInit } from '@angular/core';
import { DataSearch, TraineeFacade } from '@app/features/fa-management/libs/store/trainee';
import * as moment from 'moment';

@Component({
  selector: 'app-trainee-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  initConditionEmplId: any = null;

  dataSearch: DataSearch = {
    emplId: -1,
    account: '',
    name: '',
    dob: '',
    phone: '',
    email: '',
  };

  currentDate = new Date();
  
  constructor( private traineeFacade: TraineeFacade) { }

  ngOnInit(): void {
  }

  onSearch() {
    // const formatDob = moment(this.dataSearch.dob).format("DD/MM/YYYY");
    this.traineeFacade.updateDataSearch({
      emplId: Number(this.dataSearch.emplId),
      account: this.dataSearch.account,
      name: this.dataSearch.name,
      dob: this.dataSearch.dob,
      phone: this.dataSearch.phone,
      email: this.dataSearch.email,
    })
  }

  onKeyup(event: KeyboardEvent){
    // this.initConditionEmplId = Number(event.key)
    // this.dataSearch.emplId = this.initConditionEmplId
  }
}
