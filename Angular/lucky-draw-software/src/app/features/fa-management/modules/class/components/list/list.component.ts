import { SelectionModel } from '@angular/cdk/collections';
import { ElementRef } from '@angular/core';
import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ClassFacade } from '@app/features/fa-management/libs/store/class';
import { Class } from '@app/features/fa-management/libs/store/class/+state/class.reducer';
import { ConfigTable } from '@app/features/fa-management/libs/utils/configs';
import { SelectionTable } from '@app/features/fa-management/libs/utils/functions';
import { Subject, takeUntil } from 'rxjs';

interface DataSearch {
  location: string;
  className: string;
  status: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  destroy$ = new Subject();
  readonly configTable = ConfigTable;
  selectionTable = new SelectionTable<Class>([], [], true);
  displayedColumns: string[] = ['select', 'index', 'id', 'name', 'startDate', 'endDate', 'location', 'status'];

  constructor(private classFacade: ClassFacade) {
    this.classFacade.loadedClass();
    this.classFacade.classes$.pipe(takeUntil(this.destroy$)).subscribe((classes) => {
      this.selectionTable.dataSource.data = classes;
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.selectionTable.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
