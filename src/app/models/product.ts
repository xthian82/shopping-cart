export class Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;

  constructor(id: number, name: string, description: string,
              price: number = 0,
              imageUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTF1FzFbLPMc21c67Tmz_-vlaZx-5POMr6FIaMEoxkOnEeXPO2b&usqp=CAU') {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
