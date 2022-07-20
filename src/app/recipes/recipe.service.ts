import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(1,
      'Easy Whipped Ricotta Toast',
    'When you whip ricotta, it magically becomes airier, creamier, and perfect for smearing on a sturdy slice of bread. A drizzle of lemony, thyme-y honey on top, and you’ll be spellbound!',
    'https://www.simplyrecipes.com/thmb/HfHINshpVZxofzS_o6Vidm0WI70=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Whipped-Ricotta-Toast-LEAD-16-e71174262b23404f9e8e0b8b918080c8.jpg',
    [
      new Ingredient('bread',2),
      new Ingredient('milk',1),

    ]),
    new Recipe(2,
      'Easy cheesy 2-minute noodles',
    'This super easy cheesy noodle dish is sure to be a hit with the kids!',
    'https://img.taste.com.au/FwZLBldd/w720-h480-cfill-q80/taste/2018/04/easy-cheesy-2-minute-noodles-136753-6.jpg',
    [
      new Ingredient('bread',2),
      new Ingredient('milk',1),

    ]),
    new Recipe(3,
      'Slow cooker chicken chow mein',
    'You can now make this Chinese takeaway classic in your slow cooker! The ingredients are usually stir-fried but in our version you cook the chicken first and then at the end combine with vegies and noodles.',
    'https://img.taste.com.au/Wl5tMDLu/w720-h480-cfill-q80/taste/2021/06/slow-cooker-chicken-chow-mein-171636-1.jpg',
    [
      new Ingredient('water',1),
      new Ingredient('sel',4),

    ])
  ];
  constructor() { }
  getRecipes(){
    return this.recipes.slice();
  }
  getRecipeById(id: number){
    return this.recipes.find(recipe => recipe.id === id);
  }
}
