import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() ingredient = new EventEmitter<{name: string, amount: number}>();
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;


  constructor() { }

  ngOnInit() {
  }

  addIngredient(){
    const newIng = new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value);
    this.ingredient.emit(newIng);
  }

}
