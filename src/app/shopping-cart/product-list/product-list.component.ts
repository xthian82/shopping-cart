import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []

  constructor(private produtService: ProductService) { }

  ngOnInit(): void {
    this.productList = this.getProducts()
  }

  getProducts(): Product[] {
    return this.produtService.getProducts();
  }
}
