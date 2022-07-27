import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged:Subject<boolean> = new Subject();
  private recipes: Recipe[] = [];
  //   new Recipe(0,
  //     'Easy Whipped Ricotta Toast',
  //   'When you whip ricotta, it magically becomes airier, creamier, and perfect for smearing on a sturdy slice of bread. A drizzle of lemony, thyme-y honey on top, and you’ll be spellbound!',
  //   'https://img.taste.com.au/CjZlWULN/w720-h480-cfill-q80/taste/2021/02/10-minute-sticky-apricot-chicken-168943-2.jpg',
  //   [
  //     new Ingredient('bread',2),
  //     new Ingredient('milk',1),

  //   ]),
  //   new Recipe(1,
  //     'Easy cheesy 2-minute noodles',
  //   'This super easy cheesy noodle dish is sure to be a hit with the kids!',
  //   'https://img.taste.com.au/FwZLBldd/w720-h480-cfill-q80/taste/2018/04/easy-cheesy-2-minute-noodles-136753-6.jpg',
  //   [
  //     new Ingredient('bread',2),
  //     new Ingredient('milk',1),

  //   ]),
  //   new Recipe(2,
  //     'Slow cooker chicken chow mein',
  //   'You can now make this Chinese takeaway classic in your slow cooker! The ingredients are usually stir-fried but in our version you cook the chicken first and then at the end combine with vegies and noodles.',
  //   'https://img.taste.com.au/Wl5tMDLu/w720-h480-cfill-q80/taste/2021/06/slow-cooker-chicken-chow-mein-171636-1.jpg',
  //   [
  //     new Ingredient('water',1),
  //     new Ingredient('sel',4),

  //   ])
  // ];


  constructor(private http: HttpClient) {   }


  getRecipes(){
    return this.recipes.slice();
  }
  getRecipeById(id: number){
    return this.recipes.find(recipe => recipe.id === id);
  }
  getLastId(){
    return this.recipes.length;
  }
  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(true);
  }
  updateRecipe(recipe:Recipe){
    let index = this.recipes.findIndex(recipeEl => recipeEl.id === recipe.id);
    this.recipes[index] = recipe;
    this.recipesChanged.next(true);
  }
  deleteRecipe(id: number){
    let index = this.recipes.findIndex(recipe => recipe.id === id);
    this.recipes.splice(index,1);
    this.recipesChanged.next(true);
  }
  saveRecipes(){
    this.http.put('https://store-8808e-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',this.recipes)
              .subscribe(response =>{
                console.log('response: ', response);
              })
  }
  loadRecipes(){
    return this.http.get<Recipe[]>('https://store-8808e-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
                .pipe(tap(recipesLoaded  => {
                  this.recipes = recipesLoaded;
                  this.recipesChanged.next(true);
                }) )


  }
}
