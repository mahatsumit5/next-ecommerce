import { ICartState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TInitial = {
  cart: ICartState[];
};
const initialState: TInitial = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }: PayloadAction<ICartState>) => {
      if (payload._id === undefined) {
        return;
      }
      const itemExist = state.cart.filter((item) => item._id === payload._id);
      // console.log(itemExist.length);
      if (itemExist.length > 0) {
        // console.log("ssame old item");

        const indexOfItemTobeRemoved = state.cart.findIndex(
          (item) => item._id === payload._id
        );

        // console.log(indexOfItemTobeRemoved, "index to be removed");

        state.cart.splice(indexOfItemTobeRemoved, 1, payload);

        // console.log("item removed", state.cart);
        // state.cart = [...state.cart, payload];
        return;
      }

      state.cart = [...state.cart, payload];
    },
    removeItemFromCart: (state, { payload }: PayloadAction<string>) => {
      console.log(payload);
      state.cart = state.cart.filter((item) => item._id !== payload);
    },
    resetCart: (state) => {
      state.cart = [];
    },
  },
});

// Action creators are generated for each case reducer function
const { actions, reducer } = cartSlice;
export const { setCart, removeItemFromCart, resetCart } = actions;

export default reducer;
