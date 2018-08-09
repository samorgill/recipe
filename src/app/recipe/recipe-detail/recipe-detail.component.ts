import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../shared/recipe.model';
import {ShoppingListService} from '../../services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredients(recipe: Recipe) {
    this.slService.addIngredient(recipe);
  }



}
