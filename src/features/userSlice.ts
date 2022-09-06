import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export const uerSlice = createSlice({
  name: "user",
  initialState: {
    user: { uid: "", photoUrl: "", displayNmae: "" },
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = { uid: "", photoUrl: "", displayNmae: "" };
    },
  },
});

export const { login, logout } = uerSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default uerSlice.reducer;
