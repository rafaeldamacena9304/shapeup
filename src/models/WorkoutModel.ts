export class WorkoutModel {
  status: "Concluído" | "Pendente" | "Lembrete";
  day:
    | "Domingo"
    | "Segunda-feira"
    | "Terça-feira"
    | "Quarta-feira"
    | "Quinta-feira"
    | "Sexta-feira"
    | "Sábado";
  modality: string;
  exercises: ExerciseProps[];

  constructor(
    status: "Concluído" | "Pendente" | "Lembrete",
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
    this.status = status;
  }
}

export interface ExerciseProps {
  name: string;
  sets: number;
  reps: number;
}
