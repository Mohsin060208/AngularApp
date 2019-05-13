import {Injectable} from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { HttpClient} from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class DataStorageService {
    
constructor(private http: HttpClient, private recipeService: RecipeService, private shoppingListService: ShoppingListService){}
storeRecipes(){
  
   return this.http.put("https://recipe-book-5154.firebaseio.com/recipes.json",this.recipeService.getRecipes());
    }
getRecipes(){
   
   this.http.get("https://recipe-book-5154.firebaseio.com/recipes.json")
   .subscribe(
       (response: Response) => {
       const recipes: Recipe[] = response;
        this.recipeService.setRecipes(recipes);
        console.log(response);
       }
   );
   }
}