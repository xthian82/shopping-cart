import {Product} from "./product";

export class CartItem {

  // id: number
  product: Product
  qty: number

  constructor (product: Product, qty: number = 1) {
    // this.id = id;
    this.product = product
    this.qty = qty
  }

  getTotal(): number {
    return this.qty * this.product.price;
  }
}
