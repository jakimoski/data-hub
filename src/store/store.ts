import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "./favorites-slice";
import priceWatchSlice from "./price-watch-slice";
import userStatusSlice from "./user-status";

const store = configureStore({
  reducer: {
    favorites: favoritesSlice.reducer,
    priceWatch: priceWatchSlice.reducer,
    status: userStatusSlice.reducer,
  },
});

// Store and Dispatch types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
