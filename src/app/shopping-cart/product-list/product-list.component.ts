import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  productList: Product[] = []
  private ps: Subscription;

  constructor(private produtService: ProductService) { }

  ngOnInit(): void {
    this.productList = this.getProducts()
  }

  ngOnDestroy(): void {
    this.ps.unsubscribe();
  }

  getProducts(): Product[] {
    this.ps = this.produtService.getProducts().subscribe((products) => {
      this.productList = products;
    });
    return this.productList;
  }
}
