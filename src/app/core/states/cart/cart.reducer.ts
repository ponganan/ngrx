import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../../../shared/models/product.interface';
// import { addToCart, incrementProduct } from './cart.action';
import * as CartActions from './cart.action'

export interface CartState {
    products: IProduct[];
    totalPrice: number;
}

export const initialCounterState: CartState = {
    products: [],
    totalPrice: 0
}

export function calculateTotalPrice(product: IProduct[]) {
    return product.reduce((total, product) => total + (product.price * product.quantity), 0);
}

export const cartReducer = createReducer(
    initialCounterState,
    on(CartActions.addToCart, (state, { product }) => {

        const updatedProduct = [...state.products, product]
        return {
            ...state,
            products: updatedProduct,
            totalPrice: calculateTotalPrice(updatedProduct)
        }

    }),
    on(CartActions.incrementProduct, (state, { productId }) => {

        const updatedProduct = state.products.map((product) => product.id === productId ?
            { ...product, quantity: product.quantity + 1 } : product)
        return {
            ...state,
            products: updatedProduct,
            totalPrice: calculateTotalPrice(updatedProduct)

        }

    }),
    on(CartActions.decrementProduct, (state, { productId }) => {

        const updatedProduct = state.products.map((product) => product.id === productId ?
            { ...product, quantity: product.quantity - 1 } : product)
        return {
            ...state,
            products: updatedProduct,
            totalPrice: calculateTotalPrice(updatedProduct)

        }

    }),
    on(CartActions.removeProduct, (state, { productId }) => {

        const updatedProduct = state.products.filter((product) => product.id !== productId)
        return {
            ...state,
            products: updatedProduct,
            totalPrice: calculateTotalPrice(updatedProduct)

        }

    })

);