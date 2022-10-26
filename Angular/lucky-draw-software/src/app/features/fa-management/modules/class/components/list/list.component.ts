import { Component, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionType } from '@app/features/fa-management/libs/directives';
import { ClassFacade } from '@app/features/fa-management/libs/store/class';
import { ClassView } from '@app/features/fa-management/libs/store/class/+state/reducer';
import { CONFIG_TABLE } from '@app/features/fa-management/libs/utils/configs';
import { SelectionTable } from '@app/features/fa-management/libs/utils/functions';
import { filter, Subject, take, takeUntil } from 'rxjs';
import { RELATIVE_URL } from '../../class.routing';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  readonly configTable = CONFIG_TABLE;
  actionType = ActionType;
  destroy$ = new Subject();
  selectionTable = new SelectionTable<ClassView>([], [], true);
  displayedColumns: string[] = ['select', 'index', 'code', 'name', 'startDate', 'endDate', 'location', 'status'];

  get disableUpdate(): boolean {
    return this.selectionTable.selection.selected.length !== 1;
  }

  get disableCancel(): boolean {
    return this.selectionTable.selection.selected.length === 0;
  }

  constructor(private classFacade: ClassFacade, private router: Router, private route: ActivatedRoute) {
    this.classFacade.loadList();
    this.classFacade.resetSearch();
    this.classFacade.list$.pipe(takeUntil(this.destroy$)).subscribe((classes) => {
      this.selectionTable.dataSource.data = classes;
    });
  }

  update(): void {
    this.router.navigate(['edit', this.selectionTable.selection.selected[0].id], { relativeTo: this.route });
  }

  cancel(): void {
    this.classFacade.cancel(this.selectionTable.selection.selected.map((i) => i.id));
    this.classFacade.cancelling$
      .pipe(
        takeUntil(this.destroy$),
        filter((loading) => !loading),
        take(1)
      )
      .subscribe(() => {
        this.selectionTable.selection.clear();
        this.classFacade.loadList();
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
