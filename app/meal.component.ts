import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
  template: `
  <div>
    <img *ngIf="meal.calories < 500"  src="https://image.freepik.com/free-icon/healthy-food_318-114996.jpg"/>
    <img *ngIf="meal.calories >= 500"  src="https://cdn3.iconfinder.com/data/icons/fitness-vector-line-1/128/25-128.png"/>
    <label>
      <ul>
        <li>{{ meal.name }}</li>
        <li>{{meal.calories}}</li>
        <li>{{meal.description}}</li>
      </ul>
    </label>
  </div>
  `
})

export class MealComponent {
  public meal: Meal;

}
