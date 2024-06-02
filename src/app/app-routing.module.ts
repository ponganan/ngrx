import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { ProductsComponent } from './pages/products/products.component';
import { CounterComponent } from './pages/counter/counter.component';
import { ProductCardComponent } from './shared/pages/product-card/product-card.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CartComponent } from './pages/cart/cart.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'details', component: DetailsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'card', component: ProductCardComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cart', component: CartComponent },
  //{ path: 'counter', loadComponent: () => import('../app/pages/counter/counter.component').then(a => a.CounterComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
