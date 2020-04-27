import { Component, OnInit } from '@angular/core';
import {CartItem} from "../../models/cart-item";
import {MessengerService} from "../../services/messenger.service";
import {Product} from "../../models/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = []
  cartTotal = 0

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.cartTotal = 0
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProduct(product);
    });
  }

  getTotal(): number {
    return this.cartTotal;
  }

  addProduct(product: Product) {
    let found = false;

    for (let i in this.cartItems) {
      if (this.cartItems[i].product.id === product.id) {
        this.cartItems[i].qty++;
        found = true;
        break;
      }
    }

    if (!found) {
      this.cartItems.push(new CartItem(product));
    }

    this.cartTotal += product.price;
  }
}
