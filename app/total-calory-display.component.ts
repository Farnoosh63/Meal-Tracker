import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'total-calory-display',
  inputs: ['mealListForTotal'],
  template: `
  <button (click)="totalCalories()" class= "button">total calories</button><p *ngIf="calories>0">{{calories}}</p>
  `
})
export class TotalCaloryDisplayComponent {
  public calories: number=0;
  public mealListForTotal: Meal[];
  totalCalories(){
    this.calories = 0;
    for(var eachMeal of this.mealListForTotal){
      this.calories += eachMeal.calories;
    }
  }
}
