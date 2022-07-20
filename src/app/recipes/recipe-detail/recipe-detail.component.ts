import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe | undefined;
  subscription: Subscription | undefined;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private shoppingService: ShoppingListService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.recipe = this.recipeService.getRecipeById(+params['id'])

    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  addIngredientToShopping() {
    if (this.recipe?.ingredients)
      this.shoppingService.addIngredient(this.recipe?.ingredients);
  }
}
