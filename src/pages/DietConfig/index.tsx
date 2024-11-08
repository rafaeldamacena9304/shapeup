import { useSelector } from "react-redux";
import { DietList } from "../../components/fromDiet/DietList";
import { Header } from "../../components/general/Header";
import { RootState } from "../../redux/store";


export const DietConfigPage = () => {

  const meals = useSelector((state: RootState) => state.meals)

  return (
    <>
      <Header />
      <div className="container">
        <DietList meals={meals} />
      </div>
    </>
  );
};
