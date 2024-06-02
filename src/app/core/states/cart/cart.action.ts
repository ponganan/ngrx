import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../../shared/models/product.interface';

export const addToCart = createAction('[Cart Component] AddToCart', props<{ product: IProduct }>());
export const incrementProduct = createAction('[Cart Component] incrementProduct', props<{ productId: number }>());
export const decrementProduct = createAction('[Cart Component] decrementProduct', props<{ productId: number }>());
export const removeProduct = createAction('[Cart Component] removeProduct', props<{ productId: number }>());