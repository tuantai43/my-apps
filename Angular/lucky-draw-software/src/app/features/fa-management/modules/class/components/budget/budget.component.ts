import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { SelectionTable } from '@app/features/fa-management/libs/utils/functions';
import { BudgetDetails } from '../../store';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
  @Input() detailForm: FormGroup = new FormGroup({});
  selectionTable = new SelectionTable<BudgetDetails>([], [], true);
  displayedColumns: string[] = ['select', 'item', 'unit', 'unitExpense', 'quantity', 'amount', 'tax', 'sum', 'note'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  addBudget() {
    const budgets = this.detailForm.get('budgets') as FormArray;
    budgets.push(
      this.formBuilder.group({
        item: '',
        unit: '',
        unitExpense: '',
        quantity: '',
        amount: '',
        tax: '',
        sum: '',
        note: '',
      })
    );
    this.selectionTable.dataSource.data = budgets.value;
  }

  deleteBudget(index: number) {
    const budgets = this.detailForm.get('budgets') as FormArray;
    budgets.removeAt(index);
    this.selectionTable.dataSource.data = budgets.value;
  }
}
