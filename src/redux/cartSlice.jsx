import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
      cart: [],
  },
  reducers:{
      addToCart: (state, action) => {
          const itemIndex = state.cart.findIndex(item => item.product.id === action.payload.product.id);
          if (itemIndex >= 0) {
              state.cart[itemIndex].quantity += 1;  // If item exists, increment quantity
          } else {
              state.cart.push({ ...action.payload, quantity: 1 });  // Add item with quantity 1 if it doesn't exist
          }
      },
      removeFromCart: (state, action) => {
          state.cart = state.cart.filter(x => x.product.id !== action.payload);
      },
      increment: (state, action) => {
          const item = state.cart.find(x => x.product.id === action.payload);
          if (item) {
              item.quantity += 1;  // Increment the specific item's quantity
          }
      },
      decrement: (state, action) => {
          const item = state.cart.find(x => x.product.id === action.payload);
          if (item && item.quantity > 1) {
              item.quantity -= 1;  // Decrement if quantity is greater than 1
          }
      },
  }
});

export const { addToCart, removeFromCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
