import { HeroDetailDialogComponent } from './components/hero-detail-dialog/hero-detail-dialog.component';
import { Hero } from '@app/models';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeroService } from '@app/core';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  displayedColumns = ['id', 'name', 'power', 'alterEgo', 'action'];
  constructor(public dialog: MatDialog, private heroService: HeroService) {}
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  onSelect(hero: Hero): void {
    const dialogRef = this.dialog.open(HeroDetailDialogComponent, {
      data: {
        hero: { ...hero },
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.success) {
        this.getHeroes();
      }
    });
  }
  onDelete(hero: Hero): void {
    this.heroService.deleteHero(hero.id).subscribe(() => this.getHeroes());
  }
  onAdd(): void {
    this.onSelect({} as Hero);
  }
}
