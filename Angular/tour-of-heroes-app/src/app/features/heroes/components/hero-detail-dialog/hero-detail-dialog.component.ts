import { Subject, takeUntil } from 'rxjs';
import { PowerService } from '@app/core/services/power.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Hero, Power } from '@app/models';
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeroService } from '@app/core';
interface DialogData {
  hero: Hero;
}
@Component({
  selector: 'app-hero-detail-dialog',
  templateUrl: './hero-detail-dialog.component.html',
  styleUrls: ['./hero-detail-dialog.component.scss'],
})
export class HeroDetailDialogComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();
  powers: Power[] = [];

  formHero: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', Validators.required),
    alterEgo: new FormControl(),
    power: new FormControl('', Validators.required),
  });

  get fieldName(): FormControl {
    return this.getFieldControl('name');
  }

  get fieldAlterEgo(): FormControl {
    return this.getFieldControl('alterEgo');
  }

  get fieldPower(): FormControl {
    return this.getFieldControl('power');
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private dialogRef: MatDialogRef<HeroDetailDialogComponent>,
    private powerService: PowerService,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.getPowers();
    if (this.data.hero?.id) {
      this.formHero.setValue(this.data.hero);
      this.fieldPower.setValue(this.data.hero.power.id);
    }
  }

  getPowers(): void {
    this.powerService
      .getAll()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((powers) => (this.powers = powers));
  }

  save(): void {
    const data = this.formHero.value;
    const hero = {
      id: data.id,
      name: data.name,
      alterEgo: data.alterEgo,
      power: this.powers.find((i) => i.id === data.power),
    } as Hero;
    if (this.data.hero?.id) {
      this.heroService.update(hero.id, hero).subscribe(() => this.closeDialog());
    } else {
      this.heroService.insert(hero).subscribe(() => this.closeDialog());
    }
  }

  closeDialog(): void {
    this.dialogRef.close({ success: true });
  }

  getFieldControl(name: string): FormControl {
    return this.formHero.get(name) as FormControl;
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }
}
