import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingService } from '../../../service/shopping.service';
import {ActivatedRoute, Params} from "@angular/router";
import {RecipeService} from "../../../service/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id:number;

  constructor(private shoppingListService: ShoppingService,
              private recipeService:RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id']; non uso questo perche' vorrei cambiare quando cambio la ricetta della lista
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']; // NOTA operatore + per rendere il parametro id numeric
    this.recipe= this.recipeService.getRecipe(this.id);
    });
  }

  public pushToShoppingList() {
    // for(let ingredient of this.recipe.ingredients) {
    //   this.shoppingListService.addIngredient(ingredient);
    // }
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
