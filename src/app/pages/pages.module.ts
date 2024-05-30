import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { CounterComponent } from './counter/counter.component';
import { HeadComponent } from './head/head.component';



@NgModule({
  declarations: [
    DetailsComponent,
    CounterComponent,
    HeadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DetailsComponent,
    CounterComponent,
    HeadComponent,
  ]
})
export class PagesModule { }
