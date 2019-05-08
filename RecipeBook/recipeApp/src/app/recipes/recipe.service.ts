import { EventEmitter, Output, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
  @Output()  recipeSelected = new EventEmitter<Recipe>();
  private recipes : Recipe[] = [
    new Recipe('Hyderabadi Chicken Biryani', 'A chef will tell you how to make that.','https://www.bing.com/th?id=OIP.F5GMEHaMrw3xWAuuBDxz2AHaE8&pid=Api&rs=1&p=0',
    [
      new Ingredient('Chicken',2),
      new Ingredient('Rice',3),
      new Ingredient('Onion',5)
    ]),
    new Recipe('Bombay Chicken Biryani', 'A chef will tell you how to make that.','https://www.bing.com/th?id=OIP.tHFHweB53mlurF09UnBiSAHaFJ&pid=Api&rs=1&p=0',
    [
      new Ingredient('Chicken',2),
      new Ingredient('Rice',3),
      new Ingredient('Tomato',5)
    ]),  
  ];
  constructor(private sl: ShoppingListService){}
    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index: number){
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.sl.addIngredients(ingredients);
    }
}