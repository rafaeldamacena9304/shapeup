  import { RootState } from "../../redux/store";
  import { useSelector } from "react-redux";
  import { selectTodayWorkout } from "../../utils/getCurrentWorkout";
  import { selectCurrentMeal } from "../../utils/getCurrentMeal";
  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";

  import { UserCard } from "../../components/fromDashboard/UserCard";
  import { Header } from "../../components/general/Header";
  import { MainTitle } from "../../components/general/MainTitle";
  import { CardModel } from "../../models/CardModel";
  import { CardList } from "../../components/fromDashboard/MainCardList";

  import dumbbell from "../../assets/images/dumbbell.png";
  import cup from "../../assets/images/cup.svg";
  import apple from "../../assets/images/apple.svg";

  export const DashboardPage = () => {
    // Recover from global stated based on a function that links workout with corresponding day
    const todayWorkout = useSelector((state: RootState) =>
      selectTodayWorkout(state)
    );
    //Recover from global state based on a function that links with date.time
    const currentMeal = useSelector((state: RootState) =>
      selectCurrentMeal(state)
    );

    // Labeled cards "Bodies", simply the base some things that are static in them
    const cards: CardModel[] = [
      {
        cardType: "treino",
        status: "Pendente",
        title: "Treino de hoje",
        subType: todayWorkout
          ? todayWorkout.modality
          : "Nenhum treino registrado hoje...",
        workoutContent: todayWorkout ? todayWorkout.exercises : [],
        image: dumbbell,
      },
      {
        cardType: "dieta",
        status: "Pendente",
        title: "Dieta de hoje",
        subType: currentMeal ? currentMeal.title : "Nenhuma refeição agora...",
        foodContent: currentMeal ? currentMeal.foods : [],
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

    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      const isUserLogged = async () => {
        try {
          const response = await fetch(
            "https://shapeup-backend.vercel.app/api/check_credentials",
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
            }
          );
          if (response.ok) {
            const data = await response.json();
            console.log("Resposta do back-end:", data)
            setIsLoggedIn(data.loggedIn);
            if (!data.loggedIn){
              navigate('/')
            } else{
              setIsLoggedIn(true)
            }
          } else { 
            navigate('/')
          }
        } catch (error) {
          console.error("Erro ao verificar sessão:", error);
          navigate('/')
        } finally {
          setIsLoading(false);
        }
      };
      isUserLogged();
    }, [navigate]);

    return (
      <>
        <Header />
        <div className="container">
          <div className="topContainer">
            <div className="titleContainer">
              <MainTitle content="Olá, Rafael" />
              <p className="subTitle">Pronto para superar os seus limites?</p>
            </div>
            <UserCard />
          </div>
          <CardList cards={cards} />
        </div>
      </>
    );
  };
