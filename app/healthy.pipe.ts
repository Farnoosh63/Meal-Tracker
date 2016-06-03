import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "healthy",
  pure: false
})
export class HealthyPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var healthFinder = 500;
    var desiredHealthyState = args[0];
    if(desiredHealthyState === "healthy") {
      return input.filter(function(meal) {
        return meal.healthy < healthFinder;
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
