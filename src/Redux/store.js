import { configureStore } from "@reduxjs/toolkit";
import { totalState } from "./reducer";

export const store = configureStore({
  reducer: {
    product: totalState,
  },
});
