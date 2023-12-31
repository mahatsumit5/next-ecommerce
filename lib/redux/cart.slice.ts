import { ICartState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { v4 } from "uuid";
type TInitial = {
  cart: ICartState[];
  uniqueId: string;
};
const initialState: TInitial = {
  cart: [],
  uniqueId: v4(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }: PayloadAction<ICartState>) => {
      if (payload._id === undefined) {
        return;
      }
      toast.success("Item added to cart", {});
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
      state.uniqueId = v4();
    },
    removeItemFromCart: (state, { payload }: PayloadAction<string>) => {
      toast.warning("Your item has been removed from cart.", {
        description: `${new Date()}`,
      });
      state.cart = state.cart.filter((item) => item._id !== payload);

      if (!state.cart.length) {
        state.uniqueId = "";
      }
    },
    resetCart: (state) => {
      // toast.warning("Your item has been removed from cart.", {
      //   description: `${new Date()}`,
      // });
      state.cart = [];
      state.uniqueId = "";
    },
  },
});

// Action creators are generated for each case reducer function
const { actions, reducer } = cartSlice;
export const { setCart, removeItemFromCart, resetCart } = actions;

export default reducer;
