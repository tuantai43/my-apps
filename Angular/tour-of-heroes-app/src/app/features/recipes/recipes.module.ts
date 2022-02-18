import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeListComponent} from './components/recipe-list/recipe-list.component';


@NgModule({
  declarations: [
    RecipeListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RecipeListComponent
  ]
})
export class RecipesModule {
}
