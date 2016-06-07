import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import {EditMealDetailsComponent} from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import {HealthyPipe} from './healthy.pipe';
import { TotalCaloryDisplayComponent } from './total-calory-display.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent, TotalCaloryDisplayComponent],
  pipes: [HealthyPipe],
  templateUrl: 'app/meal-list.component.html'
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterHealthy: string = "all";
  public calories: number=0;
  public totalCalory: number;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: Meal): void {
    this.mealList.push(newMeal);
  }
  onChange(filterOption) {
    this.filterHealthy = filterOption;
  }
  // totalCalories(){
  //   this.calories = 0;
  //   for(var eachMeal of this.mealList){
  //     this.calories += eachMeal.calories;
  //   }
  // }
}
