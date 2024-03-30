import { configureStore, Tuple } from '@reduxjs/toolkit'
import cartReducer from "../utils/cartSlice"
import authReducer from "./authSlice"
const appStore=configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer
    }
}
)
export default appStore
