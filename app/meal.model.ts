export class Meal {
  public healthy: boolean = false; // set the pure in pipe to false
  constructor(public name: string, public calories: number, public description: string, public id: number) {
  } // in createTask inside task-list.component be sure to make sure the parameters match with constructor
}
