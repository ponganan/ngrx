import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { CounterComponent } from './counter/counter.component';
import { HeadComponent } from './head/head.component';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from '../shared/pages/product-card/product-card.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { RouterLink } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';



@NgModule({
  declarations: [
    DetailsComponent,
    CounterComponent,
    HeadComponent,
    ProductsComponent,
    ProductCardComponent,
    SignupComponent,
    CartComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    DetailsComponent,
    CounterComponent,
    HeadComponent,
    ProductsComponent,
    ProductCardComponent
  ]
})
export class PagesModule { }
