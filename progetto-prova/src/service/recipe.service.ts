import {EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {Recipe} from "../components/recipes/recipe.model";
import { Ingredient } from '../components/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
    'Big Burgher',
    'what else you need to say?',
    'https://www.shutterstock.com/image-photo/delicious-fast-food-burger-hamburger-600nw-1463833829.jpg',
    [
      new Ingredient('sottilette',5),
      new Ingredient('lattughe',3),
      new Ingredient('haburgher',3),
      new Ingredient('cipolla',2),
    ]),
    new Recipe(
    'Nugget di Pollo',
    'I nugget di pollo (chicken nuggets) sono delle crocchette di pollo croccanti e dorate, immancabili nei fast food! Scopri la ricetta per farle a casa.',
    'https://www.shutterstock.com/image-photo/breaded-fried-chicken-nuggets-on-600nw-2532548211.jpg',
    [
      new Ingredient('pollo',5),
      new Ingredient('farina',7),
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

  getRecipe(id: number){
    return this.recipes[id];
  }
}
