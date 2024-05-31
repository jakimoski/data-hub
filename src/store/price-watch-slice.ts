import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../data/data";

const priceWatchSlice = createSlice({
  name: "priceWatch",
  initialState: {
    priceWatch: JSON.parse(localStorage.getItem("preicewatch") || `""`) || [],
  },
  reducers: {
    toggleWatch(state, actions: PayloadAction<Product>) {
      const stateItems = [...state.priceWatch];
      const existingItem = stateItems.find(
        (item) => item.id === actions.payload.id
      );

      if (existingItem) {
        state.priceWatch = stateItems.filter(
          (item) => item.id !== existingItem.id
        );

        localStorage.setItem("preicewatch", JSON.stringify(state.priceWatch));
      } else {
        state.priceWatch = [...stateItems, actions.payload];
        localStorage.setItem("preicewatch", JSON.stringify(state.priceWatch));
      }
    },
  },
});

export const priceWatchActions = priceWatchSlice.actions;

export default priceWatchSlice;
