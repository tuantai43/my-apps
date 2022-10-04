import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Currency } from '@app/features/fa-management/libs/directives/currency.directive';
import { ConvertNumber, SelectionTable } from '@fa-management/utils/functions';
import { distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { BudgetDetails, ClassDetails, initialClassDetail } from '../../store';
import { ScreenName } from '@fa-management/utils/enums';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit, OnDestroy {
  @Input() detailForm!: FormGroup;
  @Input() screenName!: ScreenName;
  @Input()
  get class() {
    return this._class;
  }

  set class(value: ClassDetails | null) {
    this._class = value;
    this.handleClassChanges();
  }

  private _class: ClassDetails | null = initialClassDetail();

  ScreenName = ScreenName;
  selectionTable = new SelectionTable<BudgetDetails>([], [], true);
  displayedColumns: string[] = ['select', 'item', 'unit', 'unitExpense', 'quantity', 'amount', 'tax', 'sum', 'note'];
  destroy$ = new Subject();
  total: number | string = '';
  get over(): 'budget.over' | 'budget.notOver' | '' {
    if (typeof this.total === 'number') {
      if (this.detailForm.value.estimatedBudget) {
        const estBudget = ConvertNumber.fromPrice(this.detailForm.value.estimatedBudget, true) as Number;
        return estBudget > this.total ? 'budget.over' : 'budget.notOver';
      }
    }
    return '';
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  handleClassChanges(): void {
    if (this.class && this.class.budgets?.length) {
      this.class.budgets.forEach(() => {
        this.addBudget();
      });
      this.detailForm?.get('budgets')?.patchValue(this.class.budgets);
      if (this.screenName === ScreenName.ViewClass) {
        this.detailForm.disable();
      }
    } else {
      this.detailForm?.get('budgets')?.reset();
    }
  }

  addBudget() {
    const budgets = this.detailForm.get('budgets') as FormArray;
    const group = this.formBuilder.group({
      item: '',
      unit: '',
      unitExpenseText: '',
      unitExpense: '',
      quantityText: '',
      quantity: '',
      amountText: [{ value: '', disabled: true }],
      amount: '',
      taxText: 0,
      tax: 0,
      sumText: [{ value: '', disabled: true }],
      sum: '',
      note: '',
    });
    budgets.push(group);

    this.onChanges(group, 'unitExpense');
    this.onChanges(group, 'quantity');
    this.onChanges(group, 'tax');

    this.selectionTable.dataSource.data = budgets.value;
  }

  onChanges(group: FormGroup, name: string) {
    group
      .get(`${name}Text`)
      ?.valueChanges.pipe(takeUntil(this.destroy$), distinctUntilChanged())
      .subscribe((v) => {
        group.get(name)?.setValue(ConvertNumber.fromPrice(v));
      });

    group
      .get(name)
      ?.valueChanges.pipe(takeUntil(this.destroy$), distinctUntilChanged())
      .subscribe((v) => {
        const data = group.value;
        data[name] = v;
        this.updateBudgetPrice(group, data);
      });
  }

  deleteBudget(index: number) {
    const budgets = this.detailForm.get('budgets') as FormArray;
    budgets.removeAt(index);
    this.selectionTable.dataSource.data = budgets.value;
  }

  updateBudgetPrice(group: FormGroup, data: BudgetDetails): void {
    let amount = null;
    let sum = null;
    if (typeof data.unitExpense === 'number' && typeof data.quantity === 'number') {
      amount = data.unitExpense * data.quantity;
      if (typeof data.tax === 'number') {
        sum = ConvertNumber.toFixed(amount + (amount * data.tax) / 100);
      }
    }

    group.get('amountText')?.setValue(amount);
    group.get('amount')?.setValue(amount);
    group.get('sumText')?.setValue(sum);
    group.get('sum')?.setValue(sum);
    const budgets = this.detailForm.get('budgets')?.value as BudgetDetails[];
    let entered = false;
    const total = budgets.reduce((total, budget) => {
      if (typeof budget.sum !== 'number') {
        return total;
      }
      entered = true;
      return ConvertNumber.toFixed(total + budget.sum);
    }, 0);
    this.total = entered ? total : '';
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
  }
}
