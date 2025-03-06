import {EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {Recipe} from "../components/recipes/recipe.model";
import { Ingredient } from '../components/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
    'A Test Recipe',
    'This is simply a test',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('pippo',5),
      new Ingredient('pluto',2),
    ]),
    new Recipe(
    'Another Test Recipe',
    'This is simply a test',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [    
      new Ingredient('pippo2',5),
      new Ingredient('pluto3',7),
    ])
  ];

  recipeSelected = new EventEmitter<Recipe>();


  constructor() { }

  ngOnInit() {

  }

  getRecipes(): Recipe[] {
    return this.recipes.slice(); // andando ad aggiungere slice faro' una copia del mio array di ingredienti
  }

  addRecipe(recipe: Recipe){
      this.recipes.push(recipe);
  }
  removeRecipe(recipe : Recipe){
    if (recipe) {
      const index = this.recipes.indexOf(recipe); // Trova l'indice dell'oggetto
      if (index !== -1) {
        this.recipes.splice(index, 1); // Rimuove l'oggetto
      }
    }
  }


}
