import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ProductItem} from "../types";
import {products} from "../data";

interface ProductsState {
  value: ProductItem[];
  cart: Record<number, number> | null,
  sum: number,
}

const initialState: ProductsState = {
  value: products,
  cart: null,
  sum: 0,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    sorting: (state, action: PayloadAction<boolean>) => {
      state.value = state.value.slice().sort((a, b) => action.payload ? (a.price - b.price) : (b.price - a.price));
    },
    increment: (state, action: PayloadAction<number>) => {
      const val = state.cart?.[action.payload];
      state.cart = { ...state.cart, [action.payload]: val ? (val + 1) : 1};
    },
    decrement: (state, action: PayloadAction<number>) => {
      const val = state.cart?.[action.payload];

      if (val) {
        state.cart = { ...state.cart, [action.payload]: val - 1 };
      }
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      const val = state.cart?.[action.payload];

      if (val) {
        state.cart = { ...state.cart, [action.payload]: 0 };
      }
    },
    deleteAll: (state) => {
      state.cart = null;
      state.sum = 0;
    },
    changeSum: (state, action: PayloadAction<number>) => {
      state.sum = state.sum + action.payload;
    },
  },
})

export const { sorting, increment, decrement, deleteItem, deleteAll, changeSum } = productsSlice.actions;

export default productsSlice.reducer
