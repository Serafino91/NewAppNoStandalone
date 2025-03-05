import { Injectable } from '@angular/core';
import { Ingredient } from "../components/shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
 private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() { }

  getShippingList(): Ingredient[] {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  removeIngredient(ingredient: Ingredient){
  if(ingredient) {
   const index = this.ingredients.indexOf(ingredient);
     if(index != -1) {
       this.ingredients.splice(index,1);
     }
    }
  }
}
