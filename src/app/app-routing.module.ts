import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeResolver } from './recipes/recipe.resolver';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children:[
    {path: '', component: RecipeStartComponent,resolve: [RecipeResolver], pathMatch: 'full'},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id/edit', component: RecipeEditComponent,resolve: [RecipeResolver]},
    {path: ':id', component: RecipeDetailComponent,resolve: [RecipeResolver]},
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
