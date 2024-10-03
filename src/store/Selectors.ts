// selectors.ts
import { createSelector } from 'reselect';
import { RootState } from './store';

const selectSelectedItem = (state: RootState) => state.SelectedItemSlice.selectedItem;
const selectSelectedExtras = (state: RootState) => state.SelectedItemSlice.selectedExtras;

export const selectTotal = createSelector(
  [selectSelectedItem, selectSelectedExtras],
  (selectedItem, selectedExtras) => {
    if (!selectedItem) return 0;
    const price = selectedItem.price + selectedExtras.reduce((sum, extra) => sum + extra.price, 0);
    return price;
  },
);

const cartItems = (state: RootState) => state.CartSlice.cartItems;

export interface ITotalPrice {
  itemsCost: number;
  deliveryCost: number;
  finalPrice: number;
}

export const selectCartTotal = createSelector([cartItems], (cartItems) => {
  if (!cartItems) return { itemsCost: 0, deliveryCost: 0 };
  const DELIVERY_COST_CONSTANT = 3.99;
  const FREE_DELIVERY_TRESHHOLD = 15;

  let itemsCost: number = cartItems.reduce((sum, item) => sum + item.total * item.amount, 0);
  let deliveryCost: number = DELIVERY_COST_CONSTANT;

  if (itemsCost > FREE_DELIVERY_TRESHHOLD) {
    deliveryCost = 0;
  }

  const totalPrice: ITotalPrice = {
    itemsCost,
    deliveryCost,
    finalPrice: itemsCost + deliveryCost,
  };

  return totalPrice;
});
