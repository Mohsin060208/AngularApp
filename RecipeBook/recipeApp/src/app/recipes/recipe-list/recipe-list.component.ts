import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes : Recipe[] = [
  new Recipe('Hyderabadi Chicken Biryani', 'A chef will tell you how to make that.','https://image.shutterstock.com/z/stock-photo-hot-spicy-chicken-biryani-a-most-famous-food-of-pakistani-indian-peoples-195628526.jpg'),
  new Recipe('Bombay Chicken Biryani', 'A chef will tell you how to make that.','https://image.shutterstock.com/z/stock-photo-hot-spicy-chicken-biryani-a-most-famous-food-of-pakistani-indian-peoples-195628526.jpg'),  
];
  constructor() { }

  ngOnInit() {
  }
onRecipeSelected(recipe:Recipe){
this.recipeWasSelected.emit(recipe);
  }
}
