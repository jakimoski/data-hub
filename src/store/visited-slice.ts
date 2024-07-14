import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../data/data";

const visitedSlice = createSlice({
  name: "visited",
  initialState: {
    visited: JSON.parse(localStorage.getItem("visited") || "[]") as Product[],
  },
  reducers: {
    addVisited: (state, action: PayloadAction<Product>) => {
      const visitedItems = [...state.visited];
      const existingVisited = visitedItems.find(
        (item) => item.id === action.payload.id
      );
      if (!existingVisited) {
        state.visited = [...state.visited, action.payload];
        localStorage.setItem("visited", JSON.stringify(state.visited));
      }
    },
  },
});

export const visitedActions = visitedSlice.actions;
export default visitedSlice;
