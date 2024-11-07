import { WorkoutList } from "../../components/fromWorkout/WorkoutList";
import { DeleteButton } from "../../components/general/DeleteButton";
import { Header } from "../../components/general/Header";
import { MainTitle } from "../../components/general/MainTitle";
import { WorkoutModel } from "../../models/WorkoutModel";

const Workouts: WorkoutModel[] = [
  {
    day: "Domingo",
    modality: "Treino de pernas",
    exercises: [
      {
        name: "Cadeira extensora",
        reps: 10,
        sets: 2,
      }
    ]
  }
]

export const WorkoutConfigPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="topContainer">
          <MainTitle content="Meu plano de treino" />
          <DeleteButton content="Resetar treino" />
        </div>
      <WorkoutList cards={Workouts} />
      </div>
    </>
  );
};
