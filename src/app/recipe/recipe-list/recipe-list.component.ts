import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() onSelected: EventEmitter<any> = new EventEmitter();

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'Simple test',
      'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg'),
    new Recipe('Recipe 2', 'second recipe', 'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg')
  ]

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(recipe: Recipe){
    this.onSelected.emit(recipe);
  }



}


