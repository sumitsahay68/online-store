import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = []
  total = 0
  checkoutForm;
  constructor(private cartService : CartService, private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.items =this.cartService.items
    for(let item of this.items){
      this.total += item['price']
    }

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    })
  }

  onSubmit(customerData){
    console.warn('Your order has been submitted', customerData)

    this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}