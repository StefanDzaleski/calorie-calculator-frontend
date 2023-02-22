import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    accessToken: null,
  },
  reducers: {
    logIn: (state, action) => {
      state.loggedIn = true;
      state.accessToken = action.payload;
    },
    logOut: (state) => {
      state.loggedIn = false;
      state.accessToken = null;
    },
    saveAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logIn, logOut, saveAccessToken } = userSlice.actions;

export default userSlice.reducer;
