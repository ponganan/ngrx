import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs'
import { IProduct } from '../../shared/models/product.interface';
import { ProductApiService } from '../../shared/services/product-api.service';
import { Store } from '@ngrx/store';
import { addToCart } from '../../core/states/cart/cart.action';
import * as ProductActions from '../../core/states/product/product.action';
import * as ProductSelectors from '../../core/states/product/product.selector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  //productApi = inject(ProductApiService);

  //products$ = this.productApi.getProducts() as Observable<IProduct[]>;

  // use ngrx effect

  products$!: Observable<IProduct[]>;
  error$!: Observable<string | null>;

  constructor(private store: Store<{ cart: { products: IProduct[] } }>) {

    this.store.dispatch(ProductActions.loadProduct());
    this.products$ = this.store.select(ProductSelectors.selectAllProducts);
    this.error$ = this.store.select(ProductSelectors.selectProductError);
  }

  ngOnInit(): void { }

  addItemToCart(product: IProduct) {
    this.store.dispatch(addToCart({ product }));
  }

}

