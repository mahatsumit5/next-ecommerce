import { ICateogry } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type main = {
  parentCat: string;
  category: ICateogry[];
};
type Initial = {
  menu: main[];
};

const initialState: Initial = {
  menu: [],
};
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, { payload }: PayloadAction<main>) => {
      state.menu = [...state.menu, payload];
    },
  },
});

// Action creators are generated for each case reducer function
const { actions, reducer } = menuSlice;
export const { setMenu } = actions;

export default reducer;
