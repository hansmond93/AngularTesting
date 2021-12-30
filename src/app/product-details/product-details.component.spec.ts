import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verify enableBuying method', () => {
    expect(component.isUnChanged).toBe(true);
    component.enableBuying();
    expect(component.isUnChanged).toBe(false);
  });

  it('verify title of product details Component', () => {
    const element: HTMLElement = fixture.nativeElement;
    const header = element.querySelector('h1');
    expect (header?.textContent).toEqual('Product List');

  });

});
