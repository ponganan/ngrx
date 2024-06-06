// have to install
// npm i @ngrx/effects@xxxVersion for @latest

import { Injectable, inject } from "@angular/core";
import { ProductApiService } from "../../../shared/services/product-api.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from './product.action';
import { switchMap, map, catchError, of } from "rxjs";

@Injectable()

export class ProductEffect {
    private api = inject(ProductApiService);
    action$ = inject(Actions);

    loadProducts$ = createEffect(() =>
        this.action$.pipe(
            ofType(ProductActions.loadProduct),
            switchMap(() =>
                this.api.getProducts().pipe(
                    map((res) => ProductActions.loadProductSuccess({ products: res })),
                    catchError((error: { message: string }) => of(
                        ProductActions.loadProductFailure({ errorMessage: 'Fail to load products' })
                    ))
                )
            )
        )
    );
}