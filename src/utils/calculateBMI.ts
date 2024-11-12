export const calculateBMI = (weight: number, height: number): number => {
  const heightInMeters = height / 100; // Converte altura para metros
  const bmi = weight / (heightInMeters * heightInMeters); // Fórmula do IMC
  return Math.round(bmi); // Arredonda para o número inteiro mais próximo
};
