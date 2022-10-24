import { AfterViewInit, ViewChild } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { TraineeFacade, TraineeView } from '@app/features/fa-management/libs/store/trainee';
import { CONFIG_TABLE } from '@app/features/fa-management/libs/utils/configs';
import { SelectionTable } from '@app/features/fa-management/libs/utils/functions';
import { takeUntil } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-trainee-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort; // TODO...
  readonly configTable = CONFIG_TABLE;
  // actionType = ActionType; // TODO...
  destroy$ = new Subject();
  
  get allowUpdate(): boolean {
    return this.selectionTable.selection.selected.length !== 1;
  }

  get disableDeleteButton(): boolean {
    return this.selectionTable.selection.selected.length === 0;
  }

  selectionTable = new SelectionTable<TraineeView>([], [], true);
  displayedColumns: string[] = [
    'select',
    'index', 
    'emplId', 
    'account', 
    'name', 
    'dob', 
    'gender', 
    'university', 
    'faculty',
    'phone',
    'email',
    'status'
  ];

  constructor(
    private traineeFacade: TraineeFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.traineeFacade.loadList();
    this.traineeFacade.list$.pipe(takeUntil(this.destroy$)).subscribe((trainee) => {
      this.selectionTable.dataSource.data = trainee;
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.selectionTable.dataSource.paginator = this.paginator;
    // this.selectionTable.dataSource.sort = this.sort; // TODO...
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  isAllSelected() {
    console.log('iss...')
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    console.log('tg...')
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      console.log('dss')
    }
    return `${this.selectionTable.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  updateTrainee() {
    this.router.navigate(['profile', this.selectionTable.selection.selected[0].emplId], { relativeTo: this.route });
  }

  deleteTrainee() {
    this.traineeFacade.delete(this.selectionTable.selection.selected[0].emplId);
  }
}
