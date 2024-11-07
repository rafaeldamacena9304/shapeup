export class UserModel {
  id: number;
  name: string;
  weight: number;
  height: number;
  gender: string;
  age: number;
  bmi: number;
  bmr: number;

  constructor(
    id: number,
    name: string,
    weight: number,
    height: number,
    gender: string,
    age: number,
    bmi: number,
    bmr: number
  ) {
    this.id = id;
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.gender = gender;
    this.age = age;
    this.bmi = bmi;
    this.bmr = bmr;
  }
}
