import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {LuckyDrawRoutingModule} from '@app/features/lucky-draw/lucky-draw-routing.module';
import {SlotsComponent} from './components/slots/slots.component';
import {SlotComponent} from './components/slots/components/slot/slot.component';
import {SharedModule} from '@app/shared';


@NgModule({
  declarations: [HomeComponent, SlotsComponent, SlotComponent],
  imports: [
    CommonModule,
    SharedModule,
    LuckyDrawRoutingModule
  ]
})
export class LuckyDrawModule {
}
