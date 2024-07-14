import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../data/data";

const userStatusSlice = createSlice({
  name: "status",
  initialState: {
    user: JSON.parse(localStorage.getItem("user") || "{}") as User,
  },
  reducers: {
    updateUser(state, action: PayloadAction<User>) {
      const user = { ...state.user, ...action.payload };
      localStorage.setItem("user", JSON.stringify(user));
    },
  },
});

export const userStatusActions = userStatusSlice.actions;

export default userStatusSlice;
