import { ICartItem } from './Pages/Cart/Cart';

class Calculator {
  public pizzaTotal(cartItem: ICartItem): number {
    return (
      (cartItem.item.price + cartItem.extras.reduce((acc, extra) => acc + extra.price, 0)) *
      cartItem.amount
    );
  }

  public cartTotal(cartItems: ICartItem[]): number {
    return cartItems.reduce((acc, item) => acc + this.pizzaTotal(item), 0);
  }
}

export default new Calculator();
