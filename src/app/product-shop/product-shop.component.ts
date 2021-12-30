import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/data/products';
import { Product } from 'src/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css']
})
export class ProductShopComponent implements OnInit {
  product: Product;
  disableAddToCart = false;
  text = 'Add to cart';
  submitted = false;
  constructor(private route: ActivatedRoute, private cart: CartService) { }

  ngOnInit(): void {
    const routeParams = this.route?.snapshot?.paramMap;
    const id = Number(routeParams.get('productId'));
    this.product = products.find(p => p.id === id) as Product;  //
  }

  addToCart(): void {
    this.disableAddToCart = true;
    this.text = 'Added to Cart';
    this.submitted = true;
    this.cart.addProductToCart(this.product);
  }

}
