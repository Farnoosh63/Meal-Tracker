import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "healthy", //same word after "| health:filterHealthy" in meal-list.component
  pure: false // this set to false in model
})
export class HealthyPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var healthFinder = 500;
    var desiredHealthyState = args[0];
    if(desiredHealthyState === "healthy") {
      return input.filter(function(meal) { // this meal is used in return statement
        return meal.healthy < healthFinder; // return to meal.component and will be checked inside the toggleHealthy
      });
    } else if (desiredHealthyState === "notHealthy") {
      return input.filter((meal) => {
        return meal.healthy <= healthFinder;
      });
    } else {
      return input;
    }
  }
}
