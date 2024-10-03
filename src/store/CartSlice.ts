import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem } from '../Pages/Cart/Cart';
import _ from 'lodash';
import { IExtra } from '../Pages/Home';

interface initialState {
  cartItems: ICartItem[];
}

interface IRemoveExtraFromCart {
  item: ICartItem;
  extra: IExtra;
}

const initialState: initialState = {
  cartItems: [],
};

const setUniqId: Function = (state: initialState): number => {
  let biggestID: number = 0;
  for (let item of state.cartItems) {
    if (item.id && item.id! > biggestID) {
      biggestID = item.id;
    }
  }
  return biggestID + 1;
};

const CartSlice = createSlice({
  name: 'CartSlice',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICartItem>) {
      let isPizzaNew: boolean = true;
      state.cartItems = state.cartItems.map((item) => {
        if (
          item.item.id === action.payload.item.id &&
          _.isEqual(item.extras, action.payload.extras)
        ) {
          item.amount += 1;
          isPizzaNew = false;
          return item;
        } else return item;
      });
      if (isPizzaNew) {
        const { payload } = action;
        payload.id = setUniqId(state);

        state.cartItems.push(payload);
      }
    },
    pizzaInc(state, action: PayloadAction<ICartItem>) {
      const toChange: ICartItem | undefined = state.cartItems.find(
        (item) =>
          item.item.id === action.payload.item.id && _.isEqual(item.extras, action.payload.extras),
      );
      if (toChange) {
        const index = state.cartItems.indexOf(toChange);
        toChange.amount += 1;
        state.cartItems[index] = toChange;
      }
    },
    pizzaDec(state, action: PayloadAction<ICartItem>) {
      const toChange: ICartItem | undefined = state.cartItems.find(
        (item) =>
          item.item.id === action.payload.item.id && _.isEqual(item.extras, action.payload.extras),
      );
      if (toChange) {
        const index = state.cartItems.indexOf(toChange);

        toChange.amount -= 1;
        state.cartItems[index] = toChange;
      }
    },
    removePizza(state, action: PayloadAction<ICartItem>) {
      const toChange: ICartItem | undefined = state.cartItems.find(
        (item) =>
          item.item.id === action.payload.item.id && _.isEqual(item.extras, action.payload.extras),
      );
      if (toChange) {
        state.cartItems = state.cartItems.filter((item) => !_.isEqual(item, toChange));
      }
    },
    removeExtraFromCart(state, action: PayloadAction<IRemoveExtraFromCart>) {
      const { item, extra } = action.payload;

      const toChange = state.cartItems.find(
        (cartItem) => cartItem.item.id === item.item.id && _.isEqual(cartItem.extras, item.extras),
      );

      if (toChange) {
        toChange.extras = toChange.extras.filter((e) => e.id !== extra.id);
        toChange.total -= extra.price;

        const duplicateIndex = state.cartItems.findIndex(
          (cartItem, index) =>
            cartItem.item.id === toChange.item.id &&
            _.isEqual(cartItem.extras, toChange.extras) &&
            index !== state.cartItems.indexOf(toChange),
        );

        if (duplicateIndex !== -1) {
          state.cartItems[duplicateIndex].amount += 1;
          state.cartItems.splice(state.cartItems.indexOf(toChange), 1);
        }
      }
    },
  },
});

export default CartSlice.reducer;

export const { addToCart, pizzaInc, pizzaDec, removePizza, removeExtraFromCart } =
  CartSlice.actions;
