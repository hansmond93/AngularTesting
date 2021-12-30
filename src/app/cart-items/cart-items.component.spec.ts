import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from '../cart.service';

import { CartItemsComponent } from './cart-items.component';
import { MockCartService } from './MockCartService';

describe('CartItemsComponent', () => {
  let component: CartItemsComponent;
  let fixture: ComponentFixture<CartItemsComponent>;
  let cart: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartItemsComponent ],
      providers: [
        {provide: CartService, useClass: MockCartService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemsComponent);
    cart = TestBed.inject(CartService);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sum up Total Price Correctly', () => {
    expect(component.total).toEqual(68);

    component.onKey(cart.getProducts()[1], 3);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const value = element.querySelector('.total')?.textContent;
    expect(value).toEqual('$108.00');
  });
});
