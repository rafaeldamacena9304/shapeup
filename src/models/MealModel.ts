export class MealModel {
  status: "Concluído" | "Pendente" | "Lembrete";
  title: string;
  time: string;
  foods: FoodProps[];
  totalkcal: number;
  constructor(
    status: "Concluído" | "Pendente" | "Lembrete",
    title: string,
    time: string,
    foods: FoodProps[],
    totalkcal: number
  ) {
    this.status = status;
    this.title = title;
    this.time = time;
    this.foods = foods;
    this.totalkcal = totalkcal;
  }
}

export interface FoodProps {
  name: string;
  amount: number;
  kcal: number;
  protein: number;
  carb: number;
  fat: number;
}
