import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Contact } from 'src/contact';

import { CheckoutformComponent } from './checkoutform.component';

describe('CheckoutformComponent', () => {
  let component: CheckoutformComponent;
  let fixture: ComponentFixture<CheckoutformComponent>;
  const formData: Contact = {
    firstname: 'Rahul',
    lastname: 'Dessey',
    email: 'des@tt.com',
    password: 'jikol456'
  };

  beforeEach(fakeAsync( () => {
     TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ CheckoutformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(CheckoutformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test boolean methods', () => {
    expect(component.submitted).toBe(false);
    component.submit(formData);
    fixture.detectChanges();
    expect(component.submitted).toBe(true);

    const formHtml = fixture.nativeElement.querySelector('#mainDiv');
    expect(formHtml.hidden).toBe(true);
    component.submitted = false;
    fixture.detectChanges();
    expect(formHtml.hidden).toBe(false);
  });

  it('user inputfields', fakeAsync( () => {
      const email = fixture.nativeElement.querySelector('#inputEmail');
      email.value = 'rest@ui.com';
      // we have to notify Angular whenever me change input with code like email.value = 'rest@ui.com
      email.dispatchEvent(new Event('input'));  // this is how to notify Angular
      // the dispatchEvent method is asynchronous hence we wrap the code in a fakeAsync block
      // fake async block helps to run the code in a synchronous way
      fixture.detectChanges();
      tick(); // method to let JS know that it has to wait thereby making code synchrnous
      // ur method must be wrapped in fakeasync to use tick
      // all the beforeeach methods have to be marked with fakeasync also

      const textP = fixture.nativeElement.querySelector('p').textContent;
      expect(textP).toMatch('Hello' + ' rest@ui.com');
    })
  );

});
