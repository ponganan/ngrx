import { Component, computed, effect, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../shared/states/app.state';
import { selectCount } from '../../shared/states/counter/counter.selector';
import { increment, decrement, reset } from '../../shared/states/counter/counter.action';
import { CounterStore } from '../../shared/states/signalcounter/counter.store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {

  count$: Observable<number>;

  counterStore = inject(CounterStore);

  count = signal(0);
  double = computed(() => this.count() * 2);

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
    effect(() => {
      console.log('The current value of is ' + this.count());
    });
  }

  increment() {
    // this.store.dispatch(increment());
    // use signal store
    this.count.update((num) => num + 1);
  }

  decrement() {
    // this.store.dispatch(decrement());
    // use signal store
    this.count.update((num) => num - 1);
  }

  reset() {
    //this.store.dispatch(reset());
    // use signal store
    this.count.set(0);
  }
}
