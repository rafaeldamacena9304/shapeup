export const calculateTotalCalories = (foods: {kcal: number}[]): number => {
    return foods.reduce((total, food) => total + food.kcal, 0);
};