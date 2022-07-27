import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  subscription!: Subscription;
  @ViewChild('f')
  ngForm!: NgForm;
  editMode = false;
  editIndex!: number;
  constructor(private shoppingService: ShoppingListService) {}
  ngOnInit(): void {
    this.subscription = this.shoppingService.selectedIngredient.subscribe((index) => {
      this.editMode = true;
      this.editIndex = index;
      let ingredient = this.shoppingService.getIngredientById(index);
      this.ngForm.form.patchValue({
        name: ingredient.name,
        amount: ingredient.amount,
      });
    });
  }
  onSave() {
    let ingredient = new Ingredient(
      this.ngForm.value['name'],
      this.ngForm.value['amount']
    );
    if (this.editMode) {
      this.shoppingService.updateIngredient(ingredient, this.editIndex);
    } else {
      this.shoppingService.addIngredient([ingredient]);
    }
    this.editMode = false;
    this.ngForm.reset();
  }
  onDelete(){
    if(this.editMode)this.shoppingService.deleteIngredient(this.editIndex);
    this.editMode = false;
    this.ngForm.reset();
  }
  onReset(){
    this.ngForm.reset();
    this.editMode = false;
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
