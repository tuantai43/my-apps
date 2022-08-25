import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

export class SelectionTable<T> {
  dataSource: MatTableDataSource<T> = new MatTableDataSource();
  selection: SelectionModel<T> = new SelectionModel();

  constructor(dataSource: T[], selection: T[], multi: boolean) {
    this.dataSource = new MatTableDataSource(dataSource);
    this.selection = new SelectionModel(multi, selection);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected<T>() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(index: number = 0, row?: T): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${index + 1}`;
  }
}
