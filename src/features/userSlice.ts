import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface USER {
  displayName: string;
  photoUrl: string;
}

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
    updateUserProfile: (state, action: PayloadAction<USER>) => {
      state.user.displayNmae = action.payload.displayName;
      state.user.photoUrl = action.payload.photoUrl;
    },
  },
});

export const { login, logout, updateUserProfile } = uerSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default uerSlice.reducer;
