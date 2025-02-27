import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

import { Dispatch } from "@reduxjs/toolkit";
import { User as FirebaseUser } from "firebase/auth";

import authService from "../services/auth";

interface UserState {
  isLoggedIn: boolean,
  userId: string | null;
  userEmail: string | null;
  accessToken: string | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  userId: null,
  userEmail: null,
  accessToken: null,
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    storeUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { storeUser } = userSlice.actions;

export const setUserInfo = (user: FirebaseUser) => {
  return async (dispatch: Dispatch) => {
    const accessToken = await authService.getAccessToken();

    dispatch(
      storeUser({
        isLoggedIn: true,
        userId: user.uid,
        userEmail: user.email,
        accessToken,
      })
    );
  };
};

export const clearUserInfo = () => {
  return async (dispatch: Dispatch) => {
    dispatch(storeUser(initialState));
  };
};

export default userSlice.reducer;
