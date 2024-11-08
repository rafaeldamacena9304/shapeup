import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectTodayWorkout } from "../../utils/getCurrentWorkout";
import { selectCurrentMeal } from "../../utils/getCurrentMeal";

import { UserCard } from "../../components/fromDashboard/UserCard";
import { Header } from "../../components/general/Header";
import { MainTitle } from "../../components/general/MainTitle";
import { CardModel } from "../../models/CardModel";
import { CardList } from "../../components/fromDashboard/MainCardList";

import dumbbell from "../../assets/images/dumbbell.png";
import cup from "../../assets/images/cup.svg";
import apple from "../../assets/images/apple.svg";

export const DashboardPage = () => {
  const todayWorkout = useSelector((state: RootState) =>
    selectTodayWorkout(state)
  );
  const currentMeal = useSelector((state: RootState) =>
    selectCurrentMeal(state)
  );

  const cards: CardModel[] = [
    {
      cardType: "treino",
      status: "Pendente",
      title: "Treino de hoje",
      subType: todayWorkout!.modality,
      workoutContent: todayWorkout!.exercises,
      image: dumbbell,
    },
    {
      cardType: "dieta",
      status: "Pendente",
      title: "Dieta de hoje",
      subType: currentMeal!.title,
      foodContent: currentMeal?.foods,
      image: apple,
    },
    {
      cardType: "lembrete",
      status: "Lembrete",
      title: "Hidratação",
      subType: "Lembre-se de beber água",
      normalContent: ["2,5 litros"],
      image: cup,
    },
  ];

  return (
    <>
      <Header />
      <div className="container">
        <div className="topContainer">
          <div className="titleContainer">
            <MainTitle content="Olá, Rafael" />
            <p className="subTitle">Pronto para superar os seus limites?</p>
          </div>
          <UserCard
            id={1}
            name="Rafael"
            age={18}
            height={161}
            weight={65}
            gender="Masculino"
            bmi={26}
            bmr={1800}
          />
        </div>
        <CardList cards={cards} />
      </div>
    </>
  );
};
