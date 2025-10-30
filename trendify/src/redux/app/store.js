import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/productSlice";
import productSlice from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
  },
});

export default store;
