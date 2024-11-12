export class MealModel {
  id: string
  status: "Concluído" | "Pendente" | "Lembrete";
  title: string;
  time: string;
  foods: FoodProps[];
  totalkcal: number;
  constructor(
    id: string,
    status: "Concluído" | "Pendente" | "Lembrete",
    title: string,
    time: string,
    foods: FoodProps[],
    totalkcal: number
  ) {
    this.id = id;
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
  type?: string;
  onClick?: () => void;
}
