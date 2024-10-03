import { ICartItem } from '../../Pages/Cart/Cart';
import { useAppDispatch } from '../../Hook';
import { pizzaDec, pizzaInc, removePizza } from '../../store/CartSlice';
import { useRef } from 'react';
import { IoIosClose } from 'react-icons/io';
import { CartItemExtrasComponent } from '../CartItemExtras/CartItemExtrasComponent';
import style from './CartItemComponent.module.scss';

interface ICartItemComponentProps {
  item: ICartItem;
}

export const CartItemComponent: React.FC<ICartItemComponentProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const cartItemRef = useRef<HTMLLIElement | null>(null);

  function handleRemove() {
    dispatch(removePizza(item));
  }

  function handleDec() {
    if (item.amount === 1) {
      handleRemove();
    } else {
      dispatch(pizzaDec(item));
    }
  }

  const cost = item.amount * item.total;

  return (
    <li className={style.item} ref={cartItemRef}>
      <img className={style.img} src={item.item.imageUrl} alt="" />
      <div className={style.title}>{item.item.name}</div>
      <div className={style.price}>Cost {cost.toFixed(2)}$</div>
      <CartItemExtrasComponent item={item} />
      <div className={style.counterBlock}>
        <button className={style.counterBtn} onClick={handleDec}>
          -
        </button>
        <span>{item.amount}</span>
        <button className={style.counterBtn} onClick={() => dispatch(pizzaInc(item))}>
          +
        </button>
      </div>

      <button className={style.closeBtn} onClick={handleRemove}>
        <IoIosClose color="#000" size="32px" />
      </button>
    </li>
  );
};
