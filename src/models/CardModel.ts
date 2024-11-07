export class CardModel {
  status: "Pendente" | "Concluído" | "Lembrete";
  title: string;
  image: string;
  subType: string;
  content: string[];

  constructor(
    status: "Pendente" | "Concluído" | "Lembrete",
    title: string,
    image: string,
    subType: string,
    content: string[]
  ) {
    this.status = status;
    this.title = title;
    this.image = image;
    this.subType = subType;
    this.content = content;
  }
}
