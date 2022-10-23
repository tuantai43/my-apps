import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TraineeDetailsService } from '@app/features/fa-management/libs/services';
import { TraineeDetailsFacade } from '../../store';

@Component({
  selector: 'app-trainee-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  @Input() emplId!: string;
  informationForm = new FormGroup({});
  mode = 'view';
  currentDate = new Date();

  arrUnivers = [
    {label: 'HITC', value: 'HITC'},
    {label: 'UEF', value: 'UEF'},
    {label: 'HUTECH', value: 'HUTECH'},
  ]

  arrFaculty = [
    {label: 'GDTC', value: 'GDTC'},
    {label: 'NN', value: 'NN'},
    {label: 'CNTT', value: 'CNTT'},
  ];

  get faculty () {
    return this.informationForm.get('faculty') as FormControl;
  }

  get university () {
    return this.informationForm.get('university') as FormControl;
  }

  constructor( 
    private formBuilder: FormBuilder, 
    private traineeDetailsFacade: TraineeDetailsFacade,
    private route: Router,
    private traineeDetailsService: TraineeDetailsService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.traineeDetailsFacade.loadTrainee(this.emplId);
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
      const data = this.informationForm.getRawValue()
      this.traineeDetailsService.updateDetailTrainee(this.emplId, data).subscribe(
        (res) => {
          console.log(res);
          this.route.navigate(['/fa-management/trainee-management'])
        },
        (err) => {
          console.log(err)
        }
      );
    }
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

  onInputValueOther(e: any, nameControl: string){
    e.stopPropagation();
    console.log(e);
    
    console.log(nameControl);
    // switch(nameControl){
    //   case 'university': {
    //     this.university.setValue(e);
    //     this.resetOtherInput()
    //     break;
    //   }
    //   case 'faculty': {
    //     this.faculty.setValue(e);
    //     this.resetOtherInput()
    //     break;
    //   }
    // }
    console.log(this.informationForm.value);
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

}
