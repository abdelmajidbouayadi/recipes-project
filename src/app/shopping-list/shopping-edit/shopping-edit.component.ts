import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingService: ShoppingListService) { }
  name : string ="";
  ngOnInit(): void {
  }
  onSave(inputName:HTMLInputElement,inputAmount:HTMLInputElement){
    let ingred = new Ingredient(inputName.value,+inputAmount.value);
    this.shoppingService.addIngredient([ingred]);
  }

}
