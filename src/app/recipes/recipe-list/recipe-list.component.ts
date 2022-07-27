import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  subscription!: Subscription;
  constructor(private RecipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.RecipeService.getRecipes();
    this.subscription = this.RecipeService.recipesChanged.subscribe(()=> {
      this.recipes = this.RecipeService.getRecipes();
    })
  }

}
