import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  listChange: Subject<boolean>  = new Subject()
  private ingredients: ingredient[] =  [
    new ingredient("apple",8),
    new ingredient("tomato",10)
  ]
  constructor() { }
  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient: ingredient){
    this.ingredients.push(ingredient);
    this.listChange.next(true);
  }
}
