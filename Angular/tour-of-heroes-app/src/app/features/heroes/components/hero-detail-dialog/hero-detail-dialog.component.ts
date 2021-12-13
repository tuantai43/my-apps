import { Hero } from '@app/models';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  hero: Hero;
}
@Component({
  selector: 'app-hero-detail-dialog',
  templateUrl: './hero-detail-dialog.component.html',
  styleUrls: ['./hero-detail-dialog.component.scss'],
})
export class HeroDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
