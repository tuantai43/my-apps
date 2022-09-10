import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SubjectTypeFacade } from '@fa-management/store/subject-type';
import { SubSubjectTypeFacade } from '@fa-management/store/sub-subject-type';
import { DeliveryTypeFacade } from '@fa-management/store/delivery-type';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() detailForm: FormGroup = new FormGroup({});

  subSubjectTypes$ = this.subSubjectTypeFacade.list$;
  subjectTypes$ = this.subjectTypeFacade.list$;
  deliveryTypes$ = this.deliveryTypeFacade.list$;

  constructor(
    private subjectTypeFacade: SubjectTypeFacade,
    private subSubjectTypeFacade: SubSubjectTypeFacade,
    private deliveryTypeFacade: DeliveryTypeFacade
  ) {
    this.subjectTypeFacade.loadList();
    this.subSubjectTypeFacade.loadList();
    this.deliveryTypeFacade.loadList();
  }

  ngOnInit(): void {}
}
