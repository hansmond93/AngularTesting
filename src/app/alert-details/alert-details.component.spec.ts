import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from 'src/product';

import { AlertDetailsComponent } from './alert-details.component';

describe('AlertDetailsComponent', () => {
  let component: AlertDetailsComponent;
  let fixture: ComponentFixture<AlertDetailsComponent>;
  const stubProduct: Product = {
    id: 2,
    name: 'Appium',
    price: 189,
    quantity: 0,
    status: '2 left',
    description: 'this course help us to understand automation testing',
    imgaddress : 'https://rahulshettyacademy.com/rs_admin/public/images/courses/cypress-modern-automation-testing-from-scratch-framework_1609261074_azure.jpg'
  };
  const stubProduct2: Product = {
    id: 2,
    name: 'Appium',
    price: 780,
    quantity: 5,
    status: '2 left',
    description: 'this course help us to understand automation testing',
    imgaddress : 'https://rahulshettyacademy.com/rs_admin/public/images/courses/cypress-modern-automation-testing-from-scratch-framework_1609261074_azure.jpg'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDetailsComponent);
    component = fixture.componentInstance;
    component.product = stubProduct;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display discount HTML', () => {
    const element: HTMLElement = fixture.nativeElement;
    const p = element.querySelector('p');
    expect(p?.textContent).toEqual('Course is available for discount');
  });

  it('verify paragraph logic', () => {
    const element: HTMLElement = fixture.nativeElement;
    const p = element.querySelectorAll('p');
    expect(p.length).toEqual(2);

    component.product = stubProduct2;
    fixture.detectChanges();
    const element2: HTMLElement = fixture.nativeElement;
    const p2 = element2.querySelectorAll('p');
    expect(p2.length).toEqual(0);
  });

  it('should verify notify method', () => {
    component.product = stubProduct;
    fixture.detectChanges();

    let selectedProduct: Product = stubProduct2;  // I am assigning to stubProduct 2 because TS says selectedProduct is not assigned to.
    component.notify.subscribe((p) => {
      selectedProduct = p;
    });
    component.clickChildMe();
    expect(selectedProduct).toEqual(stubProduct);
  });


});
