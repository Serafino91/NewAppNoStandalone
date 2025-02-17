import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  oddNumbers : number[] =[];
  evenNumbers : number[] =[];


  title = 'progetto-prova';
  shoppingList: Array<ButtonElement> = [
    new ButtonElement('Shopping List', 'violet'),
    new ButtonElement('Shopping List', 'orange'),
    new ButtonElement('Shopping List Edit', 'orange'),
    new ButtonElement('ingredient', 'brown'),
  ];
  recipeBookList: Array<ButtonElement> = [
    new ButtonElement('Recipe Book', 'violet'),
    new ButtonElement('Recipe List', 'orange'),
    new ButtonElement('Recipe Item', 'orange'),
    new ButtonElement('Recipe Detail', 'orange'),
    new ButtonElement('Recipe', 'brown'),

  ];


  intervalloEmesso(numero:number) {
    console.log('numero emesso: '+numero);
    if(numero%2==0){
      this.evenNumbers.push(numero);
    } else{
      this.oddNumbers.push(numero);
    }

 }

}
export class ButtonElement {
  nome: String;
  colore:String
  constructor(nome: string, colore: string) {
    this.nome = nome;
    this.colore = colore;
  }
  getNome(): String{
    return this.nome;
  }
  getColore(): String{
    return this.colore;
  }

}
