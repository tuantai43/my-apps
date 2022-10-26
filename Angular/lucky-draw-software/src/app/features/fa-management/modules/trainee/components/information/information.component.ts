import { Location } from '@angular/common';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TraineeDetailsService, TraineeService } from '@app/features/fa-management/libs/services';
import { TraineeDetail } from '@app/features/fa-management/libs/utils/models';
import * as moment from 'moment';
import { filter, Subject, take, takeUntil } from 'rxjs';
import { TraineeDetailsFacade } from '../../store';

@Component({
  selector: 'app-trainee-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit, OnDestroy{

  @Input() emplId!: string;
  informationForm = new FormGroup({});
  mode = 'view';
  currentDate = new Date();

  arrUnivers = [
    {label: 'HITC', value: 'HITC'},
    {label: 'UEF', value: 'UEF'},
    {label: 'HUTECH', value: 'HUTECH'},
    {label: 'HAVARD', value: 'HAVARD'},
    {label: 'AWS', value: 'AWS'},
    {label: 'RMIT', value: 'RMIT'},
  ]

  arrFaculty = [
    {label: 'GDTC', value: 'GDTC'},
    {label: 'NN', value: 'NN'},
    {label: 'CNTT', value: 'CNTT'},
  ];

  arrAllowanceGroup = [
    {label: 'DEV-1', value: 'DEV-1'},
    {label: 'DEV-2', value: 'DEV-2'},
    {label: 'DEV-3', value: 'DEV-3'},
  ]

  private destroy$ = new Subject();

  get faculty () {
    return this.informationForm.get('faculty') as FormControl;
  }

  get university () {
    return this.informationForm.get('university') as FormControl;
  }

  get dob () {
    return this.informationForm.get('dob') as FormControl;
  }

  constructor( 
    private formBuilder: FormBuilder, 
    private traineeDetailsFacade: TraineeDetailsFacade,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.traineeDetailsFacade.loadTrainee(this.emplId);
    this.traineeDetailsFacade.trainee$.pipe(takeUntil(this.destroy$)).subscribe(((value) => {
      this.informationForm.patchValue(value);
      this.dob.setValue(moment(value.dob, "DD/MM/YYYY").toDate())
    }));
  }

  date = moment();

  buildForm(){
    this.informationForm = this.formBuilder.group({
      emplId: [{value: '', disabled: true}, Validators.required],
      type: [{value: '', disabled: true}],
      status: [{value: '', disabled: true}],
      allocationStatus: [{value: '', disabled: true}],
      account: [{value: '', disabled: true}],
      name: [{value: '', disabled: true}, Validators.required],
      gender: [{value: '', disabled: true}, Validators.required],
      dob: [{value: '', disabled: true}, Validators.required],
      university: [{value: '', disabled: true}, Validators.required],
      faculty: [{value: '', disabled: true}, Validators.required],
      phone: [{value: '', disabled: true}, Validators.required],
      email: [{value: '', disabled: true}, Validators.required],
      salaryPaid: [{value: '', disabled: true}, Validators.required],
      tpBankAccount: [{value: '', disabled: true}],
      allowanceGroup: [{value: '', disabled: true}],
      commitment: [{value: '', disabled: true}],
      history: [{value: '', disabled: true}]
    });
  }

  arrControlNameAllowEdit = ['name', 'gender', 'dob', 'university', 'faculty', 'phone', 'email', 'salaryPaid', 'tbBankAccount', 'allowanceGroup']

  enableControl(controlName: string){
    this.informationForm.get(controlName)?.enable();
  }

  disableControl(controlName: string){
    this.informationForm.get(controlName)?.disable();
  }

  onUpdate(){
    console.log(this.formatDataForSave(this.informationForm.getRawValue()))
    if(this.mode === 'view'){
      this.mode = 'edit';
      this.arrControlNameAllowEdit.forEach((name) =>{
        this.enableControl(name);
      })
    }else{
      const data = this.informationForm.getRawValue()
      this.formatDataForSave(data);
      console.log(data);
      this.traineeDetailsFacade.update(this.emplId, data);
      this.traineeDetailsFacade.isUpdatedTrainee$.pipe(
        filter((loading) => !loading),
        take(1)
      )
      .subscribe(() => {
        this.route.navigate(['/fa-management/trainee-management'])
      });
    }
  }

  formatDataForSave (data: TraineeDetail) {
    data.dob = data.dob ? moment(data.dob).format("DD/MM/YYYY") : '';
    return data;
  }

  activeClass = '';
  showInput = false;
  chooseOrtherOption(e: any) {
    e.stopPropagation();
    this.activeClass = 'mat-active';
    this.showInput = true;
  }

  resetOtherInput() {
    this.showInput = false;
  }

  onDelete() {}

  onClose(){
    if(this.mode === 'view'){
      this.route.navigate(['/fa-management/trainee-management'])
    } else {
      this.mode = 'view';
      this.arrControlNameAllowEdit.forEach((name) =>{
        this.disableControl(name);
      })
    }
  }

  selectionChange(event: any) {
    this.showInput = false;    
  }

  ngOnDestroy() {
    this.destroy$.next(null);
  }

}
