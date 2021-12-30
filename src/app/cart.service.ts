import { Injectable } from '@angular/core';
import { Product } from 'src/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];


  constructor() { }

  addProductToCart(product: Product): void {
    this.products.push(product);
  }

  getProducts(): Product[] {
    return this.products;
  }

  clearProduct(): void {
    this.products = [];
  }
}
