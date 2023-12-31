import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  _id: string;
  status: string;
  title: string;
  slug: string;
  price: number;
  qty: number;
  sku: string;
  salesPrice: number;
  parentCat: string;
  description: string;
  thumbnail: string;
  orderQty: number;
}
export type TCartState = CartState[];

const initial: CartState = {
  _id: "",
  status: "",
  title: "",
  slug: "",
  price: 0,
  qty: 0,
  sku: "",
  salesPrice: 0,
  parentCat: "",
  description: "",
  thumbnail: "",

  orderQty: 0,
};
const initialState: TCartState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }: PayloadAction<CartState>) => {
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
    // removeItemFromCart: (state, { payload }) => {
    //   state.cart = state.cart.filter((item) => item._id !== payload);
    // },
    // resetCart: (state) => {
    //   state.cart = [];
    // },
  },
});

// Action creators are generated for each case reducer function
const { actions, reducer } = cartSlice;
export const { setCart, removeItemFromCart, resetCart } = actions;

export default reducer;
