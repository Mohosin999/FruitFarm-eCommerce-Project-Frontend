import { action, thunk, persist } from "easy-peasy";

const cartModel = persist({
  items: [],
  addToCart: action((state, payload) => {
    console.log(payload);
    state.items.push(payload);
  }),
  removeFromCart: action((state, payload) => {
    state.items = state.items.filter((pId) => payload !== pId);
  }),
  clearAllCart: action((state, payload) => {
    state.items = [];
  }),
});

export default cartModel;
