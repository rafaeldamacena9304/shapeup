export const calculateBMI = (weight: number, height: number): number => {
    const heightInMeters = height / 100; // Converte altura para metros
    return weight / (heightInMeters * heightInMeters); // Fórmula do IMC
  };