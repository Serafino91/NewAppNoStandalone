import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

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
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
