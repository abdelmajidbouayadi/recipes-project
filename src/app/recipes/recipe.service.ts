import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  selectedRecipe :Subject<Recipe|undefined>= new Subject()
  recipes: Recipe[] = [
    new Recipe(
      'Easy Whipped Ricotta Toast',
    'When you whip ricotta, it magically becomes airier, creamier, and perfect for smearing on a sturdy slice of bread. A drizzle of lemony, thyme-y honey on top, and you’ll be spellbound!',
    'https://www.simplyrecipes.com/thmb/HfHINshpVZxofzS_o6Vidm0WI70=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Whipped-Ricotta-Toast-LEAD-16-e71174262b23404f9e8e0b8b918080c8.jpg',
    [
      new ingredient('bread',2),
      new ingredient('milk',1),

    ]),
    new Recipe('Easy Whipped Ricotta Toast',
    'When you whip ricotta, it magically becomes airier, creamier, and perfect for smearing on a sturdy slice of bread. A drizzle of lemony, thyme-y honey on top, and you’ll be spellbound!',
    'https://www.simplyrecipes.com/thmb/HfHINshpVZxofzS_o6Vidm0WI70=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Whipped-Ricotta-Toast-LEAD-16-e71174262b23404f9e8e0b8b918080c8.jpg',
    [
      new ingredient('water',1),
      new ingredient('sel',4),

    ])
  ];
  constructor() { }
  getRecipes(){
    return this.recipes.slice();
  }
}
