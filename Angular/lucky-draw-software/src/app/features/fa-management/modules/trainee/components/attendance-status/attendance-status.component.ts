import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SelectionTable } from '@app/features/fa-management/libs/utils/functions';
import { AttendanceStatus } from '@app/features/fa-management/libs/utils/models';
import { AttendanceStatusDialogComponent } from './components/attendance-status-dialog/attendance-status-dialog.component';

@Component({
  selector: 'app-trainee-attendance-status',
  templateUrl: './attendance-status.component.html',
  styleUrls: ['./attendance-status.component.scss']
})
export class AttendanceStatusComponent implements OnInit {

  @Input() formResult!: FormGroup;
  @Input() dataAttendanceStatus!: AttendanceStatus[];
  @Input() isEditControl!: boolean;

  expanded = true;
  toggleIcon = false; // Used for custom icon mat-expansion-panel.
  selectionTable = new SelectionTable<any>([], [], true);
  dataAfterFormat: any = [];

  displayedColumns: string[] = [
    'name',
    'absentTime',
    'lateAndEarlyLeave', 
    'noPermissionsRate', 
    'disciplinaryPoint',
  ];
  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.dataAttendanceStatus.forEach((item) =>{
      this.dataAfterFormat.push(...this.formatDataForItem(item))
      this.selectionTable.dataSource.data = this.dataAfterFormat;
    })
    this.getDataFinal(this.dataAttendanceStatus);
    this.dataAfterFormat.push(...this.getDataFinal(this.dataAttendanceStatus));
  }

  formatDataForItem(item: AttendanceStatus) {
    let numberOfAttendances = item.statusOfEachDay.filter((i) => i !== '').length; //Number of attendance check times
    let absentTimeBymonth = 0;
    let lateAndEarlyLeaveBymonth = 0;
    let noPermissionsRateBymonth = 0;
    let disciplinaryPointBymonth = 0;
    let coefficientX = 0; // This variable is used for the calculation noPermissionsRateBymonth
    let coefficientY = 0; // This variable is used for the calculation noPermissionsRateBymonth
    item.statusOfEachDay.forEach((status) => {
      switch(status){
        case 'P': {
          break;
        };
        case 'A': {
          coefficientY++;
          absentTimeBymonth++;
          break;
        };
        case 'E': {
          coefficientY++;
          lateAndEarlyLeaveBymonth++;
          break;
        };
        case 'L': {
          coefficientY++;
          lateAndEarlyLeaveBymonth++;
          break;
        };
        case 'An': {
          coefficientX++;
          coefficientY++;
          absentTimeBymonth++;
          break;
        };
        case 'En': {
          coefficientX++;
          coefficientY++;
          lateAndEarlyLeaveBymonth++;
          break;
        };
        case 'Ln': {
          coefficientX++;
          coefficientY++;
          lateAndEarlyLeaveBymonth++;
          break;
        };
      }
    })
    noPermissionsRateBymonth  = coefficientX / coefficientY;
    // Caculation for disciplinaryPointBymonth variable.
    let notPresentTime = (lateAndEarlyLeaveBymonth / 2) + (absentTimeBymonth / numberOfAttendances);
    let notAttendanceRate = notPresentTime / numberOfAttendances;
    if(notPresentTime <= 5){disciplinaryPointBymonth = 100}
    if(notAttendanceRate > 5 && notAttendanceRate <= 20 ){
      disciplinaryPointBymonth = 80;
    }else if(notAttendanceRate > 20 && notAttendanceRate <= 30 ){
      disciplinaryPointBymonth = 60;
    }else if(notAttendanceRate > 30 && notAttendanceRate < 50 ){
      disciplinaryPointBymonth = 50;
    }else if (notAttendanceRate >= 50 || noPermissionsRateBymonth < 20) {
      disciplinaryPointBymonth = 20;
    }else {
      disciplinaryPointBymonth = 0;
    }

    return [{
      name: item.name,
      absentTime: absentTimeBymonth,
      lateAndEarlyLeave: lateAndEarlyLeaveBymonth, 
      noPermissionsRate: noPermissionsRateBymonth.toFixed(2) + '%', 
      disciplinaryPoint: disciplinaryPointBymonth + '%',
    }]
  }

  getDataFinal (data: AttendanceStatus[]){
    let totalNumberOfAttendances = 0; //Number of attendance check all times.
    let allCoefficientX = 0; // This variable is used for the calculation noPermissionsRateBymonth.
    let allCoefficientY = 0; // This variable is used for the calculation noPermissionsRateBymonth.
    data.forEach((item) =>{
      const numberOfCheckTime = item.statusOfEachDay.filter((i) => {
        return i !== '';
      }).length;
      totalNumberOfAttendances = totalNumberOfAttendances + numberOfCheckTime;
      item.statusOfEachDay.forEach((status) => {
      switch(status){
        case 'P': {
          break;
        };
        case 'A': {
          allCoefficientY++;
          break;
        };
        case 'E': {
          allCoefficientY++;
          break;
        };
        case 'L': {
          allCoefficientY++;
          break;
        };
        case 'An': {
          allCoefficientX++;
          allCoefficientY++;
          break;
        };
        case 'En': {
          allCoefficientX++;
          allCoefficientY++;
          break;
        };
        case 'Ln': {
          allCoefficientX++;
          allCoefficientY++;
          break;
        };
      }
      });
    });
    let allAbsentTimeBymonth = this.dataAfterFormat.map((i: any) => i.absentTime).reduce((total: number, current: number) => {
      return total + current;
    });
    let allLateAndEarlyLeaveBymonth = this.dataAfterFormat.map((i: any) => i.lateAndEarlyLeave).reduce((total: number, current: number) => {
      return total + current;
    });
    let allNoPermissionsRateBymonth = 0;
    let allDisciplinaryPointBymonth = 0;
    allNoPermissionsRateBymonth  = allCoefficientX / allCoefficientY;
    // Caculation for allDisciplinaryPointBymonth variable.
    let notPresentTime = (allLateAndEarlyLeaveBymonth / 2) + (allAbsentTimeBymonth / totalNumberOfAttendances);
    let notAttendanceRate = notPresentTime / totalNumberOfAttendances;
    if(notPresentTime <= 5){allDisciplinaryPointBymonth = 100}
    if(notAttendanceRate > 5 && notAttendanceRate <= 20 ){
      allDisciplinaryPointBymonth = 80;
    }else if(notAttendanceRate > 20 && notAttendanceRate <= 30 ){
      allDisciplinaryPointBymonth = 60;
    }else if(notAttendanceRate > 30 && notAttendanceRate < 50 ){
      allDisciplinaryPointBymonth = 50;
    }else if (notAttendanceRate >= 50 || allNoPermissionsRateBymonth < 20) {
      allDisciplinaryPointBymonth = 20;
    }else {
      allDisciplinaryPointBymonth = 0;
    }

    return [{
      name: 'Final',
      absentTime: allAbsentTimeBymonth,
      lateAndEarlyLeave: allLateAndEarlyLeaveBymonth, 
      noPermissionsRate: allNoPermissionsRateBymonth.toFixed(2) + '%', 
      disciplinaryPoint: allDisciplinaryPointBymonth + '%',
    }]
  }

  openDialogConfirm(row: any, index: number) {
    console.log(row);
    console.log(index);
    const dialogRef = this.dialog.open(AttendanceStatusDialogComponent, {
      width: '71vw',
      closeOnNavigation: true,
      data: this.dataAttendanceStatus[index]
    });
    dialogRef.afterClosed().subscribe((res) =>{
      
    })
  }

  expandForExpansion(){
    this.toggleIcon = !this.toggleIcon;
  }

}
