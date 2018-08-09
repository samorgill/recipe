import {Recipe} from '../shared/recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable()
export class RecipeService {

  recipes: Recipe[] = [
    new Recipe('Fajitas', 'Authentic Mexican smokey bbq fajitas',
      'https://d1doqjmisr497k.cloudfront.net/-/media/schwartz/recipes/2000x1125/smokey_fajitas_2000.ashx?vd=20180522T020734Z&ir=1&width=885&height=498&crop=auto&quality=75&speed=0&hash=C36B686B1B58822815ADDF2DAF977A8DA96E2E00',
      [
        new Ingredient('Mince meat', 1),
        new Ingredient('Smokey BBQ rub', 1),
        new Ingredient('Red pepper', 1),
        new Ingredient('Tortilla wraps', 3)
      ]),
    new Recipe('Pizza', 'Anchovie and olive thin base pizza',
      'https://img.taste.com.au/AjbfPPcf/w720-h480-cfill-q80/taste/2017/04/tomato-garlic-and-anchovy-pizza-125806-1.jpg',
      [
        new Ingredient('Anchovies', 4),
        new Ingredient('Black olives', 6),
        new Ingredient('Cheese', 1)
      ])
  ]

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes(){
    return this.recipes.slice();
  }

  // selectedRecipe(recipe: Recipe){
  //  this.recipeSelected.emit(recipe);
  // }
}
