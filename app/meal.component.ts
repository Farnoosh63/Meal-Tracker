import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
  template: `
  <div>
    <input *ngIf="meal.healthy"  (click)="toggleHealthy(false)"/>
    <input *ngIf="!meal.healthy"  (click)="toggleHealthy(true)"/>
    <label>
      <ul>{{ meal.name }}
        <li>{{meal.calories}}</li>
        <li>{{meal.description}}</li>
      </ul>
    </label>
  </div>
  `
})

export class MealComponent {
  public meal: Meal;
  toggleHealthy(setState: number) {
    this.meal.healthy = setState;
  }
}
