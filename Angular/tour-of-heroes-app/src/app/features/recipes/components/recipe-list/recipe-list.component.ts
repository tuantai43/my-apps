import {Component} from '@angular/core';
import {RecipeModel} from "@app/models";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes: RecipeModel[] = [];
}
