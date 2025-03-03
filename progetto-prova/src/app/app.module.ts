import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { ButtonScComponent } from '../components/button-sc/button-sc.component';
import { RecipesComponent } from '../components/recipes/recipes.component';
import { ShoppingListComponent } from '../components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from '../components/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from '../components/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from '../components/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from '../components/recipes/recipe-detail/recipe-detail.component';
import { FormsModule } from "@angular/forms";
import { OddComponent} from "../components/odd/odd.component";
import { EvenComponent } from "../components/even/even.component";
import { GameControlComponent } from "../components/game-control/game-control.component";
import { DropdownDirective } from '../components/shared/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonScComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    OddComponent,
    EvenComponent,
    GameControlComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
