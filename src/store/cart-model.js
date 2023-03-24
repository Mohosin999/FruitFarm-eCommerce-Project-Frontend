import { action, thunk, persist } from "easy-peasy";

const cartModel = persist({
  items: [],
  addToCart: action((state, payload) => {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === payload.id
    );
    if (existingItemIndex !== -1) {
      // Item with the same id already exists, update price and quantity
      const existingItem = state.items[existingItemIndex];
      existingItem.attributes.price += payload.attributes.price;
      existingItem.attributes.quantity += payload.attributes.quantity;

      state.items[existingItemIndex] = existingItem;
    } else {
      // Item doesn't exist, add to cart
      state.items.push(payload);
    }
  }),
  removeFromCart: action((state, payload) => {
    state.items = state.items.filter((item) => item.id !== payload);
  }),
  clearAllCart: action((state, payload) => {
    state.items = [];
  }),
  incrementItem: action((state, payload) => {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === payload
    );
    if (existingItemIndex !== -1) {
      // Item with the same id already exists, update price and quantity
      const existingItem = state.items[existingItemIndex];
      existingItem.attributes.price += payload.attributes.price;
      existingItem.attributes.quantity += payload.attributes.quantity;

      state.items[existingItemIndex] = existingItem;
    } else {
      // Item doesn't exist, add to cart
      return;
    }
  }),
});

export default cartModel;
