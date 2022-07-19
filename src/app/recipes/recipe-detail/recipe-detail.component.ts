import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit,OnDestroy {
  recipe: Recipe | undefined ;
  subscription: Subscription | undefined;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe(recipeSelected => this.recipe = recipeSelected);
  }
  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }
}
