import { configureStore } from "@reduxjs/toolkit";
import { loginState } from "./Reducer/login";
import { userState } from "./Reducer/config";
import { productState } from "./Reducer/products";

export const store = configureStore({
  reducer: {
    product: productState,
    login: loginState,
    config: userState,
  },
});
