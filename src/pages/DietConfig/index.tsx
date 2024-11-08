import { DietList } from "../../components/fromDiet/DietList";
import { Header } from "../../components/general/Header";
import { MealModel } from "../../models/MealModel";

const meals: MealModel[] = [
  {
    title: "Almoço",
    time: "12:00",
    foods: [
      {
        name: "Frango",
        amount: 150,
        carb: 0,
        fat: 4,
        protein: 34,
        kcal: 150,
      },
      {
        name: "Arroz",
        amount: 100,
        carb: 28,
        fat: 0.3,
        protein: 2.5,
        kcal: 130,
      },
    ],
    totalkcal: 280,
  },
  {
    title:"Café da tarde",
    foods: [
        {
            name: "Pão",
            amount:100,
            carb:32,
            fat:0,
            protein:4,
            kcal:150
        }
    ],
    time:"16:00",
    totalkcal:150
  }
];

export const DietConfigPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <DietList meals={meals} />
      </div>
    </>
  );
};
