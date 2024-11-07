import { UserCard } from "../../components/fromDashboard/UserCard";
import { Header } from "../../components/general/Header";
import { MainTitle } from "../../components/general/MainTitle";
import { CardModel } from "../../models/CardModel";
import dumbbell from '../../assets/images/dumbbell.png'
import { CardList } from "../../components/fromDashboard/MainCardList";

const cards: CardModel[] = [
  {
    status: "Concluído",
    title:"Treino de hoje",
    subType:"Pernas",
    content: ["Agachamento", "Levantamento Terra"],
    image: dumbbell
  },
  {
    status: "Pendente",
    title:"Dieta de hoje",
    subType:"Almoço",
    content: ["150g Arroz", "01 Bife de boi"],
    image: dumbbell
  },
  {
    status: "Lembrete",
    title:"Hidratação",
    subType:"Lembre-se de beber água",
    content: ["2,5 litros"],
    image: dumbbell
  },


];

export const DashboardPage = () => {
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
