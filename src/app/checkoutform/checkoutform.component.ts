import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/contact';

@Component({
  selector: 'app-checkoutform',
  templateUrl: './checkoutform.component.html',
  styleUrls: ['./checkoutform.component.css']
})
export class CheckoutformComponent implements OnInit {
  msg = 'gmail.com';
  contact = new Contact();
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  submit(form: any): void {
    console.log(form);
    this.contact.firstname = form.firstname;
    this.contact.lastname = form.lastname;
    this.contact.email = form.email;
    this.contact.password = form.password;
    window.alert('cart is successfully submitted by ' + this.contact.firstname);
    this.submitted = true;

  }

}
