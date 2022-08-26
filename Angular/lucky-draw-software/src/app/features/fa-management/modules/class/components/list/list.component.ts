import { Component, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActionType } from '@app/features/fa-management/libs/directives';
import { ClassFacade } from '@app/features/fa-management/libs/store/class';
import { ClassView } from '@app/features/fa-management/libs/store/class/+state/class.reducer';
import { ConfigTable } from '@app/features/fa-management/libs/utils/configs';
import { SelectionTable } from '@app/features/fa-management/libs/utils/functions';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  readonly configTable = ConfigTable;
  actionType = ActionType;
  destroy$ = new Subject();
  selectionTable = new SelectionTable<ClassView>([], [], true);
  displayedColumns: string[] = ['select', 'index', 'code', 'name', 'startDate', 'endDate', 'location', 'status'];

  constructor(private classFacade: ClassFacade) {
    this.classFacade.loadedClass();
    this.classFacade.resetSearch();
    this.classFacade.classes$.pipe(takeUntil(this.destroy$)).subscribe((classes) => {
      this.selectionTable.dataSource.data = classes;
    });
  }

  ngAfterViewInit() {
    this.selectionTable.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
