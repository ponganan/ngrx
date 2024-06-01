import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  productArray: any[] = [];

  http = inject(HttpClient);
  //holds the Observable value with xxx$ .
  products$ = this.http.get('https://fakestoreapi.com/products/') as Observable<any[]>;


  // constructor() {
  //   this.loadAllProduct();
  // }

  ngOnInit(): void {
    this.loadAllProduct();
  }

  loadAllProduct() {
    this.http.get('https://fakestoreapi.com/products/1').subscribe((res: any) => {
      this.productArray = res;
    })
  }
}

