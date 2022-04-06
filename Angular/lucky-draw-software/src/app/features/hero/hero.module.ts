import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroRoutingModule} from './hero-routing.module';
import {
  HeroDetailDialogComponent
} from './components/heroes/components/hero-detail-dialog/hero-detail-dialog.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@app/shared';

const EXPORT_COMPONENTS = [HeroesComponent, DashboardComponent, HeroDetailDialogComponent];

@NgModule({
  declarations: [...EXPORT_COMPONENTS],
  imports: [CommonModule, HeroRoutingModule, SharedModule],
})
export class HeroModule {
}
