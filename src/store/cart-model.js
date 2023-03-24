import { action, thunk, persist } from "easy-peasy";

const cartModel = persist({
  items: [],
  addToCart: action((state, payload) => {
    state.items.push(payload);
  }),
  removeFromCart: action((state, payload) => {
    state.items = state.items.filter((item) => item.id !== payload);
  }),
  clearAllCart: action((state, payload) => {
    state.items = [];
  }),
});

export default cartModel;
