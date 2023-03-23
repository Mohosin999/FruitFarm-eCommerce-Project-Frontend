import { createStore } from "easy-peasy";
import cartModel from "./cart-model";

const store = createStore({
  carts: cartModel,
});

export default store;
