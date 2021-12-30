import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  products = this.cart.getProducts();
  sum = 0;
  newPrice: number;
  shippingPrice = 8;
  total: number;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.updateSum();
  }

  updateSum(): void {
    this.products.forEach(p => {
      this.sum += p.price;
    });
    this.total = this.sum + this.shippingPrice;
  }

  onKey(product: Product, quantity: string | number): void {
    this.newPrice = product.price * +quantity;
    this.sum = this.sum - product.price + this.newPrice;
    this.total = this.sum + this.shippingPrice;

  }

  deleteProduct(product: Product): void {
    const index = this.products.indexOf(product);
    if (index) {
      this.products.splice(index);
    }
    this.updateSum();
  }

}
