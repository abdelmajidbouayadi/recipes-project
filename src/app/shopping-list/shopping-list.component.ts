import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredient[] = [];
  constructor(private shoppingService: ShoppingListService) { }
  subscription!: Subscription;
  ngOnInit(): void {
    this.ingredients =  this.shoppingService.getIngredients();
    this.subscription = this.shoppingService.listChange.subscribe(()=>
    this.ingredients =  this.shoppingService.getIngredients() )
  }
  ngOnDestroy(){
    this.subscription.unsubscribe;
  }

}
