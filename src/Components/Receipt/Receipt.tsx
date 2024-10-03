import React from 'react';
import { UseAppSelector } from '../../Hook';
import style from './Receipt.module.scss';
import Calculator from '../../Calculator';
import { ICartItem } from '../../Pages/Cart/Cart';

interface ReceiptProps {}

export const Receipt: React.FC<ReceiptProps> = ({}) => {
  const cartItems: ICartItem[] = UseAppSelector((state) => state.CartSlice.cartItems);
  const cartTotal: number = Calculator.cartTotal(cartItems);
  const isDeliveryfree: boolean = cartTotal > 15;
  const deliveryCost: number = 3.99;
  return (
    <>
      <div className={style.container}>
        <h2>RECEIPT</h2>
        {cartItems.map((item) => {
          return (
            <>
              <div key={item.item.id}>
                <span className={style.item}>
                  {item.amount}* {item.item.name.toUpperCase()} {item.item.price}$
                </span>
                {item.extras.map((extra) => {
                  return (
                    <span key={extra.id} className={style.extra}>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {extra.name} {extra.price}$
                    </span>
                  );
                })}
                <br />
              </div>
            </>
          );
        })}
        <span className={style.extra}>
          Delivery: {isDeliveryfree ? 'FREE' : `${deliveryCost}$`}
        </span>
        <hr />
        <span className={style.total}>
          TOTAL:{' '}
          {isDeliveryfree ? `${cartTotal.toFixed(2)}` : `${(cartTotal + deliveryCost).toFixed(2)}`}$
        </span>
        <div className={style.greetingsContrainer}>
          <span className={style.item}>ENJOY YOUR MEAL!!!</span>
          <span className={style.item}>YOUR REACT PIZZA TEAM</span>
        </div>
      </div>
    </>
  );
};
