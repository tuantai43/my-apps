import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '@app/shared';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {ShoppingModule} from "@app/features/shopping/shopping.module";
import {RecipesModule} from "@app/features/recipes/recipes.module";

const EXPORT_COMPONENTS = [HomeComponent];

@NgModule({
  declarations: [...EXPORT_COMPONENTS],
  imports: [CommonModule, HomeRoutingModule, SharedModule, ShoppingModule, RecipesModule],
})
export class HomeModule {
}
