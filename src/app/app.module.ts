import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './shared/states/counter/counter.reducer';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { cartReducer } from './core/states/cart/cart.reducer';
import { ProductReducer } from './core/states/product/product.reducer';
import { provideEffects } from '@ngrx/effects';
import { ProductEffect } from './core/states/product/product.effect';
import { CounterStore } from './shared/states/signalcounter/counter.store';

// add Zoneless Change Detection 
//import { provideExperimentalZonelessChangeDetection } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,

  ],
  providers: [
    // add Zoneless Change Detection 
    // provideExperimentalZonelessChangeDetection()

    provideHttpClient(withFetch()),
    provideStore(),
    provideState({ name: 'counter', reducer: counterReducer }),
    provideState({ name: 'cart', reducer: cartReducer }),
    provideState({ name: 'product', reducer: ProductReducer }),
    provideEffects(ProductEffect),
    [CounterStore],


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }  
