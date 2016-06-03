import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <meal-list [mealList]="meals" (onMealSelect)="mealWasSelected($event)"></meal-list>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Pasta", 100, "I am sad my food is over"),
      new Meal("Burrito", 547, "I am stuffed, it had so much beans")
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
  }
}
