import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/ProductsData";

const initialState = {
  cart: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: {
      prepare(id) {
        return {
          payload: {
            id,
          },
        };
      },

      reducer(state, action) {
        const product = products.find((el) => el.id === action.payload.id);

        const existingItem = state.cart.find(
          (item) => item.id === action.payload.id,
        );

        if (existingItem) {
          existingItem.quantity += 1;
          state.isOpen = true;
        }

        if (!existingItem) {
          state.cart = [...state.cart, { ...product, quantity: 1 }];
          state.isOpen = true;
        }
      },
    },

    removeFromCart: {
      prepare(id) {
        return {
          payload: {
            id,
          },
        };
      },

      reducer(state, action) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      },
    },

    increaseQuantity: {
      prepare(id) {
        return {
          payload: {
            id,
          },
        };
      },

      reducer(state, action) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      },
    },

    decreaseQuantity: {
      prepare(id) {
        return {
          payload: {
            id,
          },
        };
      },

      reducer(state, action) {
        const item = state.cart.find((item) => item.id === action.payload.id);

        if (!item) return state;

        if (item.quantity === 1) {
          state.cart = state.cart.filter(
            (item) => item.id !== action.payload.id,
          );
        }

        if (item.quantity >= 2) {
          state.cart = state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          );
        }
      },
    },

    clearCart(state) {
      state.cart = [];
      state.isOpen = false;
    },

    openCart(state) {
      state.isOpen = true;
    },

    closeCart(state) {
      state.isOpen = false;
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  openCart,
  closeCart,
} = cartSlice.actions;
