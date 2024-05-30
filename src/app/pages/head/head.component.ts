import { Component } from '@angular/core';
import { Observable } from 'rxjs'
import { AppState } from '../../shared/states/app.state';
import { Store } from '@ngrx/store';
import { selectCount } from '../../shared/states/counter/counter.selector';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent {

  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
  }

}
