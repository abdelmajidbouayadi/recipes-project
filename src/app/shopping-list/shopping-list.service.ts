import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  listChange: Subject<boolean>  = new Subject()
  private ingredients: Ingredient[] =  [
    new Ingredient("apple",8),
    new Ingredient("tomato",10)
  ]
  constructor() { }
  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient[]){
    this.ingredients.push(...ingredient);
    this.listChange.next(true);
  }
}
