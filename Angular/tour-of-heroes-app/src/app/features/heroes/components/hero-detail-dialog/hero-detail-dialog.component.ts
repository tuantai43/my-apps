import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Hero } from '@app/models';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService, HeroService } from '@app/core';
interface DialogData {
  hero: Hero;
}
@Component({
  selector: 'app-hero-detail-dialog',
  templateUrl: './hero-detail-dialog.component.html',
  styleUrls: ['./hero-detail-dialog.component.scss'],
})
export class HeroDetailDialogComponent {
  powers: string[] = [];

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
    private commonService: CommonService,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.getPowers();
    if (this.data.hero?.id) {
      this.formHero.setValue(this.data.hero);
    }
  }

  getPowers(): void {
    this.commonService.getPowers().subscribe((powers) => (this.powers = powers));
  }

  save(): void {
    const hero = this.formHero.value;
    if (this.data.hero?.id) {
      this.heroService.updateHero(hero).subscribe(() => this.closeDialog());
    } else {
      this.heroService.insertHero(hero).subscribe(() => this.closeDialog());
    }
  }

  closeDialog(): void {
    this.dialogRef.close({ success: true });
  }

  getFieldControl(name: string): FormControl {
    return this.formHero.get(name) as FormControl;
  }
}
