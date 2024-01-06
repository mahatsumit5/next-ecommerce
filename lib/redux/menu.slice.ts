import { ICateogry, TMenuStore } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Initial = {
  menu: TMenuStore[];
};

const initialState: Initial = {
  menu: [],
};
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, { payload }: PayloadAction<TMenuStore>) => {
      if (
        state.menu.filter((menu) => menu.parentCat === payload.parentCat).length
      ) {
        return;
      }
      state.menu = [...state.menu, payload];
    },
  },
});

// Action creators are generated for each case reducer function
const { actions, reducer } = menuSlice;
export const { setMenu } = actions;

export default reducer;
