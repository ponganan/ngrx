import { Component } from '@angular/core';
import { AppState } from '../../shared/states/app.state';
import { Store } from '@ngrx/store';
import { selectCartProducts } from '../../core/states/cart/cart.selector';
import { decrementProduct, incrementProduct, removeProduct } from '../../core/states/cart/cart.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartItem$ = this.store.select(selectCartProducts);

  constructor(private store: Store<AppState>) { }

  remove(productId: number) {
    this.store.dispatch(removeProduct({ productId }));
  }

  increment(productId: number) {
    this.store.dispatch(incrementProduct({ productId }));
  }

  decrement(productId: number) {
    this.store.dispatch(decrementProduct({ productId }));
  }

}
