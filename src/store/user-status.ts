import { createSlice } from "@reduxjs/toolkit";

const userStatusSlice = createSlice({
  name: "status",
  initialState: {
    userstatus: false,
  },
  reducers: {
    updateStatus(state) {
      state.userstatus = !state.userstatus;
    },
  },
});

export const userStatusActions = userStatusSlice.actions;

export default userStatusSlice;
