import {Recipe} from '../recipe/recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'Simple test',
      'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg'),
    new Recipe('Recipe 2', 'second recipe', 'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg')
  ]

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes(){
    return this.recipes.slice();
  }

  // selectedRecipe(recipe: Recipe){
  //  this.recipeSelected.emit(recipe);
  // }
}
