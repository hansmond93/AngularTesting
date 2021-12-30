import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product';
import { products } from '../../data/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  title = 'Rahul Shetty Academy';
  products: Product[] = products;
  isUnChanged = true;

  constructor() { }

  ngOnInit(): void {
  }

  clickMe(product: Product): void {
    window.alert( product.name + ' Course videos are available in your location');
  }

  enableBuying(): void {
    this.isUnChanged = !this.isUnChanged;
  }

}
