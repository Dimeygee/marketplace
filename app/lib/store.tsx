


import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice"
import cartReducer from "./features/cart/cartSlice"

export const store = () => {
    return configureStore({
        reducer: {
            products:productsReducer,
            cart: cartReducer
        }
    })
}


export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']