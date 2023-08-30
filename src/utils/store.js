import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer : {
        cart : cartSlice           // name of the slice & slice
    }
})

export default store;