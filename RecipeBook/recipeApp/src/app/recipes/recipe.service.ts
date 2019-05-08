import { EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService{
 @Output()  recipeSelected = new EventEmitter<Recipe>();
private recipes : Recipe[] = [
      new Recipe('Hyderabadi Chicken Biryani', 'A chef will tell you how to make that.','https://image.shutterstock.com/z/stock-photo-hot-spicy-chicken-biryani-a-most-famous-food-of-pakistani-indian-peoples-195628526.jpg',
      [
          new Ingredient('Chicken',2),
          new Ingredient('Rice',3),
          new Ingredient('Tomato',5)
      ]),
      new Recipe('Bombay Chicken Biryani', 'A chef will tell you how to make that.','https://image.shutterstock.com/z/stock-photo-hot-spicy-chicken-biryani-a-most-famous-food-of-pakistani-indian-peoples-195628526.jpg',
      [
        new Ingredient('Chicken',2),
        new Ingredient('Rice',3),
        new Ingredient('Onion',5)
      ]),  
    ];
    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index: number){
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
    }
}