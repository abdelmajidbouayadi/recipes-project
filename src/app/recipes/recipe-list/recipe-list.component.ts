import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Easy Whipped Ricotta Toast',
    'When you whip ricotta, it magically becomes airier, creamier, and perfect for smearing on a sturdy slice of bread. A drizzle of lemony, thyme-y honey on top, and you’ll be spellbound!',
    'https://www.simplyrecipes.com/thmb/HfHINshpVZxofzS_o6Vidm0WI70=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Whipped-Ricotta-Toast-LEAD-16-e71174262b23404f9e8e0b8b918080c8.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
