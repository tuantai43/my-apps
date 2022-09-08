import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectionListChange } from '@angular/material/list';
import { TraineeDetailsFacade } from '../../store';

@Component({
  selector: 'app-trainee-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  informationForm = new FormGroup({});
  mode = 'view';

  arrUnivers = [
    {label: 'HITC', value: 'HITC'},
    {label: 'UEF', value: 'UEF'},
    {label: 'HUTECH', value: 'HUTECH'},
  ]

  arrFaculty = [
    {label: 'GDTC', value: 'GDTC'},
    {label: 'NN', value: 'NN'},
    {label: 'CNTT', value: 'CNTT'},
    {label: 'OTHER', value: 'OTHER'},
  ];

  get faculty () {
    return this.informationForm.get('faculty') as FormControl;
  }

  constructor( 
    private formBuilder: FormBuilder, 
    private traineeDetailsFacade: TraineeDetailsFacade,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.traineeDetailsFacade.loadedTrainee();
    this.traineeDetailsFacade.trainee$.subscribe(((value) => {
      this.informationForm.patchValue(value);
    }));
  }

  buildForm(){
    this.informationForm = this.formBuilder.group({
      emplId: [{value: '', disabled: true}, Validators.required],
      type: [{value: '', disabled: true}],
      status: [{value: '', disabled: true}],
      allocationStatus: [{value: '', disabled: true}],
      account: [{value: '', disabled: true}],
      name: [{value: '', disabled: true}],
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
    if(this.mode === 'view'){
      this.mode = 'edit';
      this.arrControlNameAllowEdit.forEach((name) =>{
        this.enableControl(name);
      })
    }else{
      // handle update trainee...
    }
  }

  onDelete() {}

  onClose(){
    if(this.mode === 'view'){
      this.location.back();
    } else {
      this.mode = 'view';
      this.arrControlNameAllowEdit.forEach((name) =>{
        this.disableControl(name);
      })
    }
  }

  selectionChange(event: any) {
    //DOING...
  }

}
