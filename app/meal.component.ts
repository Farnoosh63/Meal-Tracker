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
  </div> <!-- toggleDone is defined below-->
  `
}) // false is checked because meal ate instantiated as notDone,   public filterDone: string = "notDone"; from meal-list.component

export class MealComponent { // name of the class should be similar to the name of file
  public meal: Meal; // when we get the import of the meal we need to define the public variable within the export class
  toggleDone(setState: number) {
    this.meal.healthy = setState; //meal.done is what we get returned from pipe
  }
}
