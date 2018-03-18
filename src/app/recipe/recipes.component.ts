import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipeComponent implements OnInit {

  selectedRecipe: Recipe = null;

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe){
    this.selectedRecipe = recipe;
  }

}
