import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="meal-form">
    <h3>You can edit the food information here: </h3>
    <input [(ngModel)]="meal.name" placeholder="Name" class="input-lg form-control">
    <input [(ngModel)]="meal.calories" placeholder="Calories" class="input-lg form-control">
    <input [(ngModel)]="meal.description" placeholder="Details" class="input-lg form-control">
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
