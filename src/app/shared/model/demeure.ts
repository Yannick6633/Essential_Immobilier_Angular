export class Demeure {
  id: string;
  title: string;
  price: number;
  city: string;
  piece: number;
  description: string;
  image: string;
  CritereId: string;
  constructor(title: string, price: number, city: string, piece: number, description: string, image: string, CritereId: string) {
    this.title = title;
    this.price = price;
    this.piece = piece;
    this.city = city;
    this.description = description;
    this.image = image;
    this.CritereId = CritereId;
  }
}
