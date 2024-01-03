import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "@/lib/redux/cart.slice";
import menuReducer from "@/lib/redux/menu.slice";

const persistConfig = {
  key: "cartInfo",
  storage,
};
const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const store = configureStore({
  reducer: { cart: persistedCartReducer, menu: menuReducer },
});
const persistor = persistStore(store);

export { store, persistor };
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
