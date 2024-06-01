import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './shared/states/counter/counter.reducer';
import { provideHttpClient } from '@angular/common/http';

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

    provideStore(),
    provideState({ name: 'counter', reducer: counterReducer }),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
