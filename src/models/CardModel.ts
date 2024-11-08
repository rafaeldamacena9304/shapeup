import { FoodProps } from "./MealModel";
import { ExerciseProps } from "./WorkoutModel";

export class CardModel {
  cardType: "treino" | "dieta" | "lembrete"
  status: "Pendente" | "Concluído" | "Lembrete";
  title: string;
  image: string;
  subType: string;
  foodContent?: FoodProps[];
  workoutContent?: ExerciseProps[];
  normalContent?: string[];

  constructor(
    cardType: "treino" | "dieta" | "lembrete",
    status: "Pendente" | "Concluído" | "Lembrete",
    title: string,
    image: string,
    subType: string,
    workoutContent?: ExerciseProps[],
    normalContent?: string[],
    foodContent?: FoodProps[]
  ) {
    this.cardType = cardType;
    this.status = status;
    this.title = title;
    this.image = image;
    this.subType = subType;
    this.workoutContent = workoutContent;
    this.normalContent = normalContent;
    this.foodContent = foodContent
  }
}
