export class MealModel {
  title: string;
  time: string;
  foods: FoodModel[];
  totalkcal: number;
  constructor(
    title: string,
    time: string,
    foods: FoodModel[],
    totalkcal: number
  ) {
    this.title = title;
    this.time = time;
    this.foods = foods;
    this.totalkcal = totalkcal;
  }
}

export interface FoodModel {
  name: string;
  amount: number;
  kcal: number;
  protein: number;
  carb: number;
  fat: number;
}
