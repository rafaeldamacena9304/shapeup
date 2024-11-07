import { WorkoutCard } from "../../components/fromWorkout/WorkoutCard";
import { DeleteButton } from "../../components/general/DeleteButton";
import { Header } from "../../components/general/Header";
import { MainTitle } from "../../components/general/MainTitle";

export const WorkoutConfigPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="topContainer">
          <MainTitle content="Meu plano de treino" />
          <DeleteButton content="Resetar treino" />
        </div>
        <WorkoutCard day="Domingo" modality="Penis" />
      </div>
    </>
  );
};
