import { Component, Input, EventEmitter ,OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import {RecipeService} from "../../../../service/recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
