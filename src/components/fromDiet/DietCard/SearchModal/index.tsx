import { useState, useEffect } from "react";
import { FoodProps } from "../../../../models/MealModel";
import { useDispatch } from "react-redux";
import { addFood } from "../../../../redux/reducers/mealsReducer";

import * as S from "./styles";

import search from "../../../../assets/images/search.svg";

interface SearchModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  id: string;
}

export const SearchModal = ({
  isModalOpen,
  setIsModalOpen,
  id,
}: SearchModalProps) => {
  const dispatch = useDispatch();

  // Associated with search and suggestions, and select food that user wants
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<FoodProps[]>([]);
  const [selectedFood, setSelectedFood] = useState<any>(null);
  const [foodsData, setFoodsData] = useState<FoodProps[]>([]);

  // Value for the dinamic amount value in the input typed by user
  const [editedAmount, setEditedAmount] = useState(100);

  // Load foods data from local JSON file
  useEffect(() => {
    const loadFoodsData = async () => {
      const response = await fetch("/src/assets/data/foods.json");
      const data = await response.json();
      setFoodsData(data);
    };
    loadFoodsData();
  }, []);

  // Recalculate nutrients of the food based on amount typed by user
  const recalculateNutrients = (value: number) =>
    parseFloat(((value / 100) * editedAmount).toFixed(1));

  // Fetching when user types > 2 characters, to find suggestions for search
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.length > 1) {
      const filteredSuggestions = foodsData.filter((food) =>
        food.name.toLowerCase().includes(term.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Add new food, closes modal and clear selected food
  const handleAddFood = () => {
    dispatch(
      addFood({ id: id, food: { ...selectedFood, amount: editedAmount } })
    );
    setSelectedFood(null);
    setIsModalOpen(false);
    setEditedAmount(100);
  };

  return (
    <>
      <S.ModalOverlay
        onClick={() => {
          setIsModalOpen(false);
          setSuggestions([]);
          setSelectedFood(null);
        }}
        isModalOpen={isModalOpen}
      />
      <S.Content isModalOpen={isModalOpen}>
        <S.SearchBar>
          <img src={search} alt="" />
          <input
            min="0"
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
                g
              </S.Value>
            </S.Key>
            <S.Key>
              Proteína:{" "}
              <S.Value>{recalculateNutrients(selectedFood.protein)}g</S.Value>
            </S.Key>
            <S.Key>
              Carboidratos:{" "}
              <S.Value>{recalculateNutrients(selectedFood.carb)}g</S.Value>
            </S.Key>
            <S.Key>
              Gordura:{" "}
              <S.Value>{recalculateNutrients(selectedFood.fat)}g</S.Value>
            </S.Key>
            <S.Key>
              Calorias:{" "}
              <S.Value>{recalculateNutrients(selectedFood.kcal)}kcal</S.Value>
            </S.Key>
            <S.AddButton onClick={handleAddFood}>Adicionar</S.AddButton>
          </>
        )}
        {/* Suggestions showing below search bar */}
        {suggestions.length > 0 && (
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
    </>
  );
};
