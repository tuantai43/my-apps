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
  toggleIcon = true; // Used for custom icon mat-expansion-panel.
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
      this.dataAfterFormat.push(...this.formatData(item))
      this.selectionTable.dataSource.data = this.dataAfterFormat;
    })
  }

  formatData(item: AttendanceStatus) {
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
