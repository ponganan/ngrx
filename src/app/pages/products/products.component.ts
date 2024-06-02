import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs'
import { IProduct } from '../../shared/models/product.interface';
import { ProductApiService } from '../../shared/services/product-api.service';
import { Store } from '@ngrx/store';
import { addToCart } from '../../core/states/cart/cart.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  //productArray: any[] = [];

  productApi = inject(ProductApiService);

  http = inject(HttpClient);
  //holds the Observable value with xxx$ .
  products$ = this.http.get('https://fakestoreapi.com/products/') as Observable<IProduct[]>;


  // constructor() {
  //   this.loadAllProduct();
  // }

  constructor(private store: Store<{ cart: { products: IProduct[] } }>) { }

  ngOnInit(): void {
    //  this.loadAllProduct();

    // this.http.get('https://fakestoreapi.com/products/').subscribe(res => {
    //   console.log(res);
    // }
    // )

    this.productApi.getProducts().subscribe(res => {
      console.log(res);
    })


  }

  // loadAllProduct() {
  //   this.http.get('https://fakestoreapi.com/products/1').subscribe((res: any) => {
  //     this.productArray = res;
  //   })
  // }

  addItemToCart(product: IProduct) {
    this.store.dispatch(addToCart({ product }))
  }
}

