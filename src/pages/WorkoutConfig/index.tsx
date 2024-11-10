import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store';
import { resetWorkouts } from '../../redux/reducers/workoutReducer';

import { WorkoutList } from "../../components/fromWorkout/WorkoutList";
import { DeleteButton } from "../../components/general/DeleteButton";
import { Header } from "../../components/general/Header";
import { MainTitle } from "../../components/general/MainTitle";


export const WorkoutConfigPage = () => {

  const dispatch = useDispatch();

  const workouts = useSelector((state: RootState) => state.workout  );

  const handleDeleteButtonClick = () => {
    dispatch(resetWorkouts())
  }
  

  return (
    <>
      <Header />
      <div className="container">
        <div className="topContainer">
          <MainTitle content="Meu plano de treino" />
          <DeleteButton onClick={handleDeleteButtonClick} content="Resetar treino" />
        </div>
      <WorkoutList cards={workouts} />
      </div>
    </>
  );
};
