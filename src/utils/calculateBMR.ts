export const calculateBMR = (weight: number, height: number, age: number, gender: string): number => {
  let bmr: number;
  if (gender === "Masculino") {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age); // Fórmula para homens
  } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age); // Fórmula para mulheres
  }
  return Math.round(bmr); // Arredonda para o número inteiro mais próximo
};
