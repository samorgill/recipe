import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, Injectable} from '@angular/core';
import {LogService} from './log.service';

@Injectable()
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Basil', 5),
    new Ingredient('Tomato', 1),
  ];

  constructor(private logService: LogService){}

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.logService.log(' in service');
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());

  }
}
