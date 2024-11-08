import { FoodProps } from "./MealModel";
import { ExerciseProps } from "./WorkoutModel";

export class CardModel {
  status: "Pendente" | "Concluído" | "Lembrete";
  title: string;
  image: string;
  subType: string;
  foodContent?: FoodProps[];
  workoutContent?: ExerciseProps[];
  normalContent?: string[]

  constructor(
    status: "Pendente" | "Concluído" | "Lembrete",
    title: string,
    image: string,
    subType: string,
    workoutContent?: ExerciseProps[],
    normalContent?: string[]
  ) {
    this.status = status;
    this.title = title;
    this.image = image;
    this.subType = subType;
    this.workoutContent = workoutContent;
    this.normalContent = normalContent
  }
}
