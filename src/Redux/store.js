import { configureStore } from "@reduxjs/toolkit";
import { productState } from "./Reducer/products";

export const store = configureStore({
  reducer: {
    product: productState
  },
});
