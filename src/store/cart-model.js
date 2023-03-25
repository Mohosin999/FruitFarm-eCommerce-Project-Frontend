import { action, persist, computed } from "easy-peasy";

const cartModel = persist({
  items: [],
  addToCart: action((state, payload) => {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === payload.id
    );
    if (existingItemIndex !== -1) {
      // Item with the same id already exists, update price and quantity
      const existingItem = state.items[existingItemIndex];
      existingItem.attributes.totalPrice += payload.attributes.totalPrice;
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
  incrementCartItem: action((state, payload) => {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === payload.id
    );
    if (existingItemIndex !== -1) {
      // Item with the same id already exists, increment quantity and price
      const existingItem = state.items[existingItemIndex];
      existingItem.attributes.totalPrice += payload.attributes.price;
      existingItem.attributes.quantity += 1;

      state.items[existingItemIndex] = existingItem;
    }
  }),
  decrementCartItem: action((state, payload) => {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === payload.id
    );
    if (existingItemIndex !== -1) {
      // Item with the same id already exists, increment quantity and price
      const existingItem = state.items[existingItemIndex];
      if (existingItem.attributes.quantity > 0) {
        existingItem.attributes.totalPrice -= payload.attributes.price;
        existingItem.attributes.quantity -= 1;
      }

      state.items[existingItemIndex] = existingItem;
    }
  }),
  grandTotal: computed((state) =>
    state.items.reduce((acc, cur) => {
      return (acc += cur.attributes.totalPrice);
    }, 0)
  ),
});

export default cartModel;
