import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    imagePath: new FormControl(''),
    description: new FormControl(''),
    ingredients: new FormArray([
      new FormGroup({
        name: new FormControl(''),
        amount: new FormControl(''),
      }),
    ]),
  });
  editMode = false;
  editIndex!: number;
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.editIndex = +params['id'];
        this.editMode = true;
        let recipe = this.recipeService.getRecipeById(this.editIndex);
        console.log('recipe: ', recipe);
        this.initForm(recipe);
      }
    });
  }
  get ingredientsArray() {
    return this.form.get('ingredients') as FormArray;
  }

  initForm(recipe: Recipe | undefined) {
    console.log('recipe: ', recipe);
    if (recipe?.ingredients)
      for (let i = 1; i < recipe?.ingredients.length; i++)
        this.onAddIngredient();
    if (recipe)
      this.form.patchValue({
        ...recipe,
      });
  }
  onSubmit() {
    const id = this.editMode? this.editIndex:this.recipeService.getLastId();
    const name = this.form.value['name'];
    const imagePath = this.form.value['imagePath'];
    const description = this.form.value['description'];
    const ingredients = this.form.value['ingredients'];
    let recipe = new Recipe(id, name, description, imagePath, ingredients);
    if (this.editMode) {
      this.recipeService.updateRecipe(recipe);
      this.router.navigate(['../'], { relativeTo: this.route });
    } else {
      this.recipeService.addRecipe(recipe);
      this.router.navigate(['../', id], { relativeTo: this.route });
    }
  }

  onAddIngredient() {
    (this.form.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(''),
        amount: new FormControl(''),
      })
    );
  }
  onDeleteIngredient(index: number) {
    (this.form.get('ingredients') as FormArray).removeAt(index);
    console.log('this.form: ', this.form.value);

  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
