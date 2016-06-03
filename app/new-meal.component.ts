import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Add Meal:</h3>
    <input placeholder="Name" class="form-control input-lg" required #newName>
    <input placeholder="Calories" type="number" min="1" class="form-control input-lg calories" required #newCalories>
    <input placeholder="Details" class="form-control input-lg" required #newDescription>
    <button (click)="addMeal(newName, newCalories, newDescription)" class="btn-success btn-lg add-button btn-block">submit</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userCalories: HTMLInputElement, userDescription: HTMLInputElement){
    var newMeal = new Meal(userName.value, parseInt(userCalories.value), userDescription.value);
    this.onSubmitNewMeal.emit(newMeal);
    userName.value = "";
    userCalories.value = "";
    userDescription.value = "";
  }
}
