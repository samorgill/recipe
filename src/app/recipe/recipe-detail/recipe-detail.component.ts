import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../shared/recipe.model';
import {ShoppingListService} from '../../services/shopping-list.service';
import {MatSnackBar} from '@angular/material';
import {SnackBarComponent} from '../../shared/snackbar/snackbar.component';
import {InternalNgModuleRef} from '@angular/core/src/linker/ng_module_factory';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() snack: EventEmitter<Recipe> = new EventEmitter();

  constructor(private slService: ShoppingListService,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  addIngredientsToList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
    this.openSnackBar();
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 500,
    });
  }



}
