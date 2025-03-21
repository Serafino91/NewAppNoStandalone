import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingService} from "../../../service/shopping.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{ static: false }) nameInputRef : ElementRef;
  @ViewChild('amountInput',{ static: false }) amountInputRef : ElementRef;

  // @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>(); // nota come in questo porcheria di linguaggio posso fare ste cacagate
  //                                                                                  // al posto di creare un model

  // @Output() ingredientAdded = new EventEmitter<Ingredient>(); // nota come in questo porcheria di linguaggio posso fare ste cacagate

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    this.shoppingService.addIngredient(new Ingredient(ingName, ingAmount));
    // this.ingredientAdded.emit(newIngredient);
  }
  deleteItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    this.shoppingService.removeIngredient(new Ingredient(ingName, ingAmount));
  }

}
