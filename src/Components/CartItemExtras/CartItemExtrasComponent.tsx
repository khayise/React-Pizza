import React from 'react';
import { ICartItem } from '../../Pages/Cart/Cart';
import { IoIosClose } from 'react-icons/io';
import { useAppDispatch } from '../../Hook';
import { removeExtraFromCart } from '../../store/CartSlice';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import style from './CartItemExtras.module.scss';

interface CartItemExtrasProps {
  item: ICartItem;
}

export const CartItemExtrasComponent: React.FC<CartItemExtrasProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  return (
    <ul className={style.container}>
      <TransitionGroup>
        {item.extras.map((extra) => {
          return (
            <CSSTransition key={extra.id} timeout={300} classNames={'cart-extra'} unmountOnExit>
              <li className={style.extraContainer} key={extra.id}>
                <span className={style.title}>{extra.name}</span>
                <button onClick={() => dispatch(removeExtraFromCart({ item, extra }))}>
                  <IoIosClose color="#868686" size="24px" />
                </button>
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </ul>
  );
};
