import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingService } from '../../../service/shopping.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private shoppingListService: ShoppingService) { }

  ngOnInit() {
  }
  
  public pushToShoppingList() {
    for(let ingredient of this.recipe.ingredients) {
      this.shoppingListService.addIngredient(ingredient);
    }
  }
}
