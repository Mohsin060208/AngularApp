import { Ingredient } from '../shared/ingredient.model';
import { Output,EventEmitter } from '@angular/core';

export class ShoppingListService{
@Output() ingredientsChanged = new EventEmitter<Ingredient[]>();
private ingredients : Ingredient[] = [
        new Ingredient("Onion",10),
        new Ingredient("Tomato",20),
        new Ingredient("Rice",5),
        new Ingredient("Chicken",2)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }
      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }
}