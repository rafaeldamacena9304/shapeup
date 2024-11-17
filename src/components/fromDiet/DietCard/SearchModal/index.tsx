import { useState } from "react";
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

  // Variables for search term, suggestions, and selected food
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<FoodProps[]>([]);
  const [selectedFood, setSelectedFood] = useState<any>(null);

  // Value for the dynamic amount that the user enters
  const [editedAmount, setEditedAmount] = useState(100);

  // Recalculate the nutrients of the food based on the entered amount
  const recalculateNutrients = (value: number) =>
    parseFloat(((value / 100) * editedAmount).toFixed(1));

  // Function to fetch suggestions from the JSON instead of API
  const handleSearch = async (term: string) => {
    setSearchTerm(term);
    if (term.length > 1) {
      // Simulating the process of retrieving data from a local JSON
      const response = await fetch("/path/to/your/json/data.json");
      const data = await response.json();
      // Filter data based on search term
      const filteredSuggestions = data.filter((food: any) =>
        food.name.toLowerCase().includes(term.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else if (term.length < 2) {
      setSuggestions([]);
    }
  };

  // Add selected food, close modal, and reset values
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
            placeholder="Search for food"
          />
        </S.SearchBar>
        {/* Display selected food details */}
        {selectedFood && (
          <>
            <S.Title>
              {selectedFood.name} - {selectedFood.type}
            </S.Title>
            <S.Key>
              Quantity:
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
              Protein:{" "}
              <S.Value>{recalculateNutrients(selectedFood.protein)}g</S.Value>
            </S.Key>
            <S.Key>
              Carbohydrates:{" "}
              <S.Value>{recalculateNutrients(selectedFood.carb)}g</S.Value>
            </S.Key>
            <S.Key>
              Fat:{" "}
              <S.Value>{recalculateNutrients(selectedFood.fat)}g</S.Value>
            </S.Key>
            <S.Key>
              Calories:{" "}
              <S.Value>{recalculateNutrients(selectedFood.kcal)}kcal</S.Value>
            </S.Key>
            <S.AddButton onClick={handleAddFood}>Add</S.AddButton>
          </>
        )}
        {/* Display search suggestions below the search bar */}
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
                {food.carb}g | <span>F: </span>
                {food.fat}g | {food.kcal}kcal
              </li>
            ))}
          </S.Suggestions>
        )}
      </S.Content>
    </>
  );
};
