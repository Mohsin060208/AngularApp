import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients : Ingredient[] = [
  new Ingredient("Onion",10),
  new Ingredient("Tomato",20),
  new Ingredient("Rice",5),
  new Ingredient("Chicken",2)
];
  constructor() { }

  ngOnInit() {
  }

}
