import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import {ShoppingService} from "../../service/shopping.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingService : ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getShippingList();
    this.shoppingService.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  }




  // onIngSimpleChangesingredient:Ingredient){
  //     this.ingredients.push(ingredient);
  // }
}
