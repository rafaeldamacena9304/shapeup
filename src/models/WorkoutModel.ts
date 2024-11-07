export class WorkoutModel {
  day:
    | "Domingo"
    | "Segunda-feira"
    | "Terça-feira"
    | "Quarta-feira"
    | "Quinta-feira"
    | "Sexta-feira"
    | "Sábado";
  modality?: string;
  exercises?: ExerciseProps[];

  constructor(
    day:
      | "Domingo"
      | "Segunda-feira"
      | "Terça-feira"
      | "Quarta-feira"
      | "Quinta-feira"
      | "Sexta-feira"
      | "Sábado",
    modality: string,
    exercises: ExerciseProps[]
  ) {
    this.day = day;
    this.modality = modality;
    this.exercises = exercises;
  }
}

interface ExerciseProps {
  sets: number;
  reps: number;
}
