import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {LogService} from '../services/log.service'

@Component({
  selector: 'app-recipe',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipeComponent implements OnInit {

  selectedRecipe: Recipe = null;

  constructor(private logService: LogService) { }

  ngOnInit() {
  }

  onSelected(recipe){
    this.selectedRecipe = recipe;
    this.logService.log(`${recipe.name} selected`)
  }

}
