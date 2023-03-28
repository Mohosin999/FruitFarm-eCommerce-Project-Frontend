import { createStore } from "easy-peasy";
import authModel from "./auth-model";
import cartModel from "./cart-model";

const store = createStore({
  carts: cartModel,
  auth: authModel,
});

export default store;
