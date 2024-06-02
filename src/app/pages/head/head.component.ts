import { Component } from '@angular/core';
import { Observable } from 'rxjs'
import { AppState } from '../../shared/states/app.state';
import { Store } from '@ngrx/store';
import { selectCount } from '../../shared/states/counter/counter.selector';
import { IProduct } from '../../shared/models/product.interface';
import { selectCartProducts } from '../../core/states/cart/cart.selector';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent {

  count$: Observable<number>;

  products$: Observable<IProduct[]>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
    this.products$ = this.store.select(selectCartProducts);
  }

}
