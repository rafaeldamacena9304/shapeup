import { DietList } from "../../components/fromDiet/DietList";
import { Header } from "../../components/general/Header";


export const DietConfigPage = () => {


  return (
    <>
      <Header />
      <div className="container">
        <DietList/>
      </div>
    </>
  );
};
