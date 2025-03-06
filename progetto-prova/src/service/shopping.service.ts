import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from "../components/shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
 ingredientsChanged = new EventEmitter<Ingredient[]>();

 private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() { }

  getShippingList(): Ingredient[] {
    return this.ingredients.slice(); 
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice()); //NOTA1
  }

  removeIngredient(ingredient: Ingredient){
  if(ingredient) {
   const index = this.ingredients.indexOf(ingredient);
     if(index != -1) {
       this.ingredients.splice(index,1);
       this.ingredientsChanged.emit(this.ingredients.slice());
     }
    }
  }
}


/*
  NOTA1: avrei fatto prima andando a togliere ".slice()" 
         ma a quanto pare voleva che l'array ingredient rimanesse privato 
         e quindi lo passiamo come copia. Quindi per notificare eventuali
         cambiamenti con l'array mi lancio questo evento dove passo array
         aggiornato.   
*/