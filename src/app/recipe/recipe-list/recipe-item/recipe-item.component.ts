import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../../shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() onSelected: EventEmitter<any> = new EventEmitter();

  // @Output() recipe = new EventEmitter<{name: string, description: string, imagePath: string}>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(recipe: Recipe){
    this.onSelected.emit(recipe);
  }

}
