import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  listChange: Subject<boolean>  = new Subject();
  selectedIngredient: Subject<number> = new Subject();
  private ingredients: Ingredient[] =  [
    new Ingredient("apple",8),
    new Ingredient("tomato",10)
  ]
  constructor() { }
  getIngredients(){
    return this.ingredients.slice();
  }
  getIngredientById(id:number){
    return this.ingredients[id];
  }
  addIngredient(ingredient: Ingredient[]){
    this.ingredients.push(...ingredient);
    this.listChange.next(true);
  }
  updateIngredient(ingredient:Ingredient, index: number){
    this.ingredients[index]= ingredient;
    this.listChange.next(true);
  }
  deleteIngredient(index:number){
    this.ingredients.splice(index,1);
    this.listChange.next(true);
  }
}
