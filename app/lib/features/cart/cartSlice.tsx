import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CartItem = {
  id: number;
  productName: string;
  quantity: number;
  price: number | null;
  image: string
};



const initialState : Array<CartItem> = [];

const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<CartItem>) => {
        const existingcartItem = state.find(cart => cart.id === action.payload.id)
        if(existingcartItem) return 
        state.push(action.payload);
    },
    updateCart: (state, action: PayloadAction<CartItem>) => {
      const existingCartIndex = state.findIndex(
        (cart) => cart.id === action.payload.id
      );

      if (existingCartIndex !== -1) {
        state[existingCartIndex] = action.payload;
      }
    },
    removeCart: (state, action: PayloadAction<number>) => {
      const cartIndexToRemove = state.findIndex(
        (cart) => cart.id === action.payload
      );

      if (cartIndexToRemove !== -1) {
        state.splice(cartIndexToRemove, 1);
      }
    },
    incrementQuantity: (state, action: PayloadAction<{ itemId: number }>) => {
      const { itemId } = action.payload;
      const cart = state.find((cart) => cart.id === itemId);
      
    },
    decrementQuantity: (state, action: PayloadAction<{ itemId: number }>) => {
      const { itemId } = action.payload;
      const cart = state.find((cart) => cart.id === itemId);

    },
  },
});

export const {
  addCart,
  updateCart,
  removeCart,
  incrementQuantity,
  decrementQuantity,
} = cartsSlice.actions;



export default cartsSlice.reducer;
