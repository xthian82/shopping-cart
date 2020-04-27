import { Injectable } from '@angular/core';
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Product 1', 'This is the procut 1 description, totatlly cool!', 109),
    new Product(2, 'Product 2', 'This is the procut 2 description, totatlly cool!', 108),
    new Product(3, 'Product 3', 'This is the procut 3 description, totatlly cool!', 107),
    new Product(4, 'Product 4', 'This is the procut 4 description, totatlly cool!', 106),
    new Product(5, 'Product 5', 'This is the procut 5 description, totatlly cool!', 105),
    new Product(6, 'Product 6', 'This is the procut 6 description, totatlly cool!', 104),
    new Product(7, 'Product 7', 'This is the procut 7 description, totatlly cool!', 103),
    new Product(8, 'Product 8', 'This is the procut 8 description, totatlly cool!', 102),
    new Product(9, 'Product 9', 'This is the procut 9 description, totatlly cool!', 101)
  ]

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
