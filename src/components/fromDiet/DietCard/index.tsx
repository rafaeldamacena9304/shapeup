import { useDispatch, useSelector } from "react-redux";
import {
  deleteMeal,
  saveEditChanges,
  addFood,
} from "../../../redux/reducers/mealsReducer";
import { useState } from "react";

import { FoodProps, MealModel } from "../../../models/MealModel";
import { DeleteButton } from "../../general/DeleteButton";
import { Title } from "./Title";
import { FoodList } from "./FoodList";

import * as S from "./styles";

import edit from "../../../assets/images/edit.svg";
import add from "../../../assets/images/add.svg";
import cancel from "../../../assets/images/cancel.svg";
import save from "../../../assets/images/save.svg";
import search from "../../../assets/images/search.svg";

export const DietCard = ({ title, time, totalkcal }: MealModel) => {
  const dispatch = useDispatch();

  //Popup and Edit state
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Associated with title and time edit
  const [newTitle, setNewTitle] = useState(title);
  const [newTime, setNewTime] = useState(time);

  // Associated with search and suggestions, and select food that user wants
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<FoodProps[]>([]);
  const [selectedFood, setSelectedFood] = useState<any>(null);

  // Value for the dinamic amount value in the input typed by user
  const [editedAmount, setEditedAmount] = useState(100);

  //Recalculate nutrients of the food based on amount typed by user
  const recalculateAmount = (value: number) =>
    parseFloat(((value / 100) * editedAmount).toFixed(1));

  // Fetching when user types > 2 characters, to find suggestions for search
  const handleSearch = async (term: string) => {
    setSearchTerm(term);
    if (term.length > 2) {
      const encodedTerm = encodeURIComponent(term);
      const response = await fetch(
        `http://127.0.0.1:5000/api/search?q=${encodedTerm}`
      );
      const data = (await response).json();
      setSuggestions(await data);
    } else if (term.length < 2) {
      setSuggestions([]);
    }
  };

  //Add new food, closes modal and clear selected food
  const handleAddFood = () => {
    dispatch(
      addFood({ title: title, food: { ...selectedFood, amount: editedAmount } })
    );
    setSelectedFood(null);
    setIsModalOpen(false);
    setEditedAmount(100);
  };

  // Obtain current meal from global state, based in this element meal itself
  const meal = useSelector((state: any) =>
    state.meals.find((meal: MealModel) => meal.title === title)
  );

  // Store initial titles before editing
  const originalTitle = title;
  const originalTime = time;

  // Deletes a meal
  const handleDeleteButtonClick = () => {
    dispatch(deleteMeal({ title }));
  };

  // Redux action for editing title and time of the meal
  const handleSaveEditChanges = () => {
    dispatch(saveEditChanges({ title: newTitle, time: newTime }));
    setIsEditing(false);
  };

  //Function for canceling edit, restores from original variables created before
  const handleCancelEdit = () => {
    setNewTitle(originalTitle); // Resets for original title
    setNewTime(originalTime); // Resets for original time
    setIsEditing(false);
  };

  // Calculate total kcal correctly
  const calculateTotalCalories = (): number => {
    if (!meal || !meal.foods || meal.foods.length === 0) return 0;

    // Reduce (calculate) all the calories for the foods in meal finded in global state
    return meal.foods.reduce((totalCalories: number, foodItem: FoodProps) => {
      // Recalculate based on quantity of each food, in function "recalculateAmount"
      const recalculatedCalories = recalculateAmount(foodItem.kcal);
      return totalCalories + recalculatedCalories;
    }, 0);
  };

  // Need to always recover foods list, because title and time has changed, else, foodsList will no find the foods
  const foods = meal ? meal.foods : [];

  return (
    <>
      {/* Modal */}
      <S.ModalOverlay
        onClick={() => setIsModalOpen(false)}
        isModalOpen={isModalOpen}
      />
      <S.Content isModalOpen={isModalOpen}>
        <S.SearchBar>
          <img src={search} alt="" />
          <input
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
            placeholder="Busque um alimento"
          />
        </S.SearchBar>
        {/* Food that user has selected */}
        {selectedFood && (
          <>
            <S.Title>
              {selectedFood.name} - {selectedFood.type}
            </S.Title>
            <S.Key>
              Quantidade:
              <S.Value>
                <input
                  required
                  onChange={(e) => setEditedAmount(Number(e.target.value))}
                  type="number"
                  placeholder="100g"
                />
              </S.Value>
            </S.Key>
            <S.Key>
              Proteína:{" "}
              <S.Value>{recalculateAmount(selectedFood.protein)}g</S.Value>
            </S.Key>
            <S.Key>
              Carboidratos:{" "}
              <S.Value>{recalculateAmount(selectedFood.carb)}g</S.Value>
            </S.Key>
            <S.Key>
              Gordura: <S.Value>{recalculateAmount(selectedFood.fat)}g</S.Value>
            </S.Key>
            <S.Key>
              Calorias:{" "}
              <S.Value>{recalculateAmount(selectedFood.kcal)}kcal</S.Value>
            </S.Key>
            <S.AddButton onClick={handleAddFood}>Adicionar</S.AddButton>
          </>
        )}
        {/* Suggestions showing bellow search bar */}
        {suggestions.length > 2 && (
          <S.Suggestions>
            {suggestions.map((food) => (
              <li
                onClick={() => {
                  setSelectedFood(food);
                  setSearchTerm("");
                  setSuggestions([]);
                }}
                key={food.name}
              >
                <span>
                  {food.name} - {food.type}
                </span>
                <br />
                <span>P:</span> {food.protein}g | <span>C: </span>
                {food.carb}g | <span>G: </span>
                {food.fat}g | {food.kcal}kcal
              </li>
            ))}
          </S.Suggestions>
        )}
      </S.Content>
      <S.Card>
        <S.TitleContainer>
          {/* Will be rendered while editing */}
          {isEditing ? (
            <>
              <S.EditContainer>
                <input
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  type="text"
                  placeholder={title}
                />
                <input
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  type="time"
                  placeholder={time}
                />
              </S.EditContainer>
              <S.ButtonsContainer>
                <S.EditButton onClick={handleSaveEditChanges}>
                  <img src={save} alt="Salvar" /> Salvar
                </S.EditButton>
                <S.EditButton onClick={handleCancelEdit}>
                  <img src={cancel} alt="Cancelar" /> Cancelar
                </S.EditButton>
              </S.ButtonsContainer>
            </>
          ) : (
            <>
              {/* Will be rendered normally */}

              <Title title={newTitle} time={newTime} />
              <S.ButtonsContainer>
                <S.EditButton onClick={() => setIsEditing(true)}>
                  <img src={edit} alt="Editar" /> Editar
                </S.EditButton>
                <S.EditButton onClick={() => setIsModalOpen(true)}>
                  <img src={add} alt="Adicionar" /> Adicionar alimento
                </S.EditButton>
              </S.ButtonsContainer>
            </>
          )}
        </S.TitleContainer>
        <DeleteButton
          onClick={handleDeleteButtonClick}
          spacement="0"
          textSize="12"
          imageSize="12"
          content="Excluir refeição"
        />
        <br />
        {/* Necessary to pass this parameters for FoodList find the meal that it belongs it, which was edited */}
        <FoodList meal={{ title: newTitle, time: newTime, foods }} />
        <S.TotalKcal>Total: {calculateTotalCalories()} kcal</S.TotalKcal>
      </S.Card>
    </>
  );
};
