import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { reset } from "../counter/counter.action";
export interface CounterState {
    count: number;
}

const initialCounterstate: CounterState = {
    count: 0
}

export const CounterStore = signalStore(
    withState(initialCounterstate),
    withMethods(({ count, ...store }) => ({
        increment() {
            patchState(store, { count: count() + 1 })
        },
        decrement() {
            patchState(store, { count: count() - 1 })
        },
        reset() {
            patchState(store, { count: 0 })
        }
    }))
);