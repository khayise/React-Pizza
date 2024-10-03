import { UseAppSelector } from '../../Hook';
import { IItem, IExtra } from '../Home';
import { CartItemComponent } from '../../Components/CartItemComponent/CartItemComponent';
import EmptyCartComponent from '../../Components/EmptyCart/EmptyCartComponent';
import OrderForm from '../../Components/OrderForm/OrderForm';
import { ModalWindow } from '../../UI/ModalWindow/ModalWindow';
import { Transition, TransitionGroup, CSSTransition } from 'react-transition-group';
import { selectCartTotal } from '../../store/Selectors';
import style from './Cart.module.scss';
import { useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { Tooltip } from '../../UI/Tooltip/Tooltip';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import ScrollReset from '../../Components/ScrollReset/ScrollReset';

export interface ICartItem {
  id?: number;
  item: IItem;
  extras: IExtra[];
  total: number;
  amount: number;
}

const Cart = () => {
  const cartItems: ICartItem[] = UseAppSelector((state) => state.CartSlice.cartItems);

  const { itemsCost, deliveryCost, finalPrice } = UseAppSelector(selectCartTotal);
  const isEmpty: boolean = cartItems.length ? false : true;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isTooltipShowed, setIsTooltipShowed] = useState<boolean>(false);

  const onInfoSignHover = () => {
    setIsTooltipShowed(true);
  };

  const onInfoSignLeave = () => {
    setIsTooltipShowed(false);
  };

  function openModal() {
    setIsModalOpen(true);
    document.body.classList.add('no-overflow');
  }

  function closeModal() {
    setIsModalOpen(false);
    document.body.classList.remove('no-overflow');
  }

  const totalAmountOfItems = cartItems.reduce((amount, item) => amount + item.amount, 0);

  return (
    <>
      <ScrollReset />
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.listContainer}>
            <ul className={style.list}>
              <TransitionGroup>
                {cartItems.map((item) => {
                  return (
                    <CSSTransition
                      timeout={300}
                      classNames={'cart-item-animation'}
                      key={item.id}
                      unmountOnExit>
                      <CartItemComponent item={item} />
                    </CSSTransition>
                  );
                })}
              </TransitionGroup>
            </ul>
          </div>

          <Transition timeout={300} in={!isEmpty} unmountOnExit>
            {(state) => (
              <div className={`${style.checkoutContainer} ${style[state]}`}>
                <div className={style.checkout}>
                  <div className={style.checkoutElement}>
                    <span>Products:</span>
                    <span>{totalAmountOfItems}</span>
                  </div>
                  <div className={style.checkoutElement}>
                    <span>Cost:</span>

                    <span>{itemsCost.toFixed(2)}$</span>
                  </div>
                  <div className={style.checkoutElement}>
                    <span>Delivery cost:</span>
                    <span>
                      {deliveryCost ? (
                        <div className={style.toolipContainer}>
                          <Tooltip isShowed={isTooltipShowed}>Free delivery from 15$</Tooltip>
                          <IoMdInformationCircleOutline
                            onMouseEnter={onInfoSignHover}
                            onMouseLeave={onInfoSignLeave}
                            size={18}
                            className={style.infoSign}
                          />
                          <span>{`${deliveryCost.toFixed(2)}$`}</span>
                        </div>
                      ) : (
                        'Free'
                      )}
                    </span>
                  </div>
                  <div className={style.hr}></div>
                  <div className={style.checkoutElement}>
                    <span>Total:</span>
                    <span>{finalPrice.toFixed(2)}$</span>
                  </div>
                  <button onClick={openModal} className={`${style.orderBtn}`}>
                    Place an Order
                  </button>
                </div>
              </div>
            )}
          </Transition>
        </div>
        <CSSTransition
          in={isModalOpen}
          timeout={200}
          classNames={'modal-window--background'}
          mountOnEnter
          unmountOnExit>
          <ModalWindow handleModalClose={closeModal}>
            <OrderForm />
          </ModalWindow>
        </CSSTransition>
        <Transition timeout={300} in={isEmpty} mountOnEnter>
          {(state) => <EmptyCartComponent className={`empty-cart-${state}`} />}
        </Transition>
      </div>
    </>
  );
};

export default Cart;
