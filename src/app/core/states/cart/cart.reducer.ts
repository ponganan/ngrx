import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../../../shared/models/product.interface';
// import { addToCart, incrementProduct } from './cart.action';
import * as CartAction from './cart.action'

export interface CartState {
    products: IProduct[];
    totalPrice?: number;
}

export const initialCounterState: CartState = {
    products: []
}

export const cartReducer = createReducer(
    initialCounterState,
    on(CartAction.addToCart, (state, { product }) => {

        const updatedProduct = [...state.products, product]
        return {
            ...state,
            products: updatedProduct,
        }

    }),
    on(CartAction.incrementProduct, (state, { productId }) => {

        const updatedProduct = state.products.map((product) => product.id === productId ?
            { ...product, product: product.quantity + 1 } : product)
        return {
            ...state,
            products: updatedProduct,

        }

    }),
    on(CartAction.decrementProduct, (state, { productId }) => {

        const updatedProduct = state.products.map((product) => product.id === productId ?
            { ...product, product: product.quantity - 1 } : product)
        return {
            ...state,
            products: updatedProduct,

        }

    }),
    on(CartAction.removeProduct, (state, { productId }) => {

        const updatedProduct = state.products.filter((product) => product.id !== productId)
        return {
            ...state,
            products: updatedProduct,

        }

    })

);