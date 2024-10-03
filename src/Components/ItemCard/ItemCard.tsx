import React, { useRef } from 'react';
import { IItem } from '../../Pages/Home';
import { ModalWindow } from '../../UI/ModalWindow/ModalWindow';
import { useState } from 'react';
import { useAppDispatch } from '../../Hook';
import { setSelectedItem, clearExtras } from '../../store/SelectedItemSlice';
import { CSSTransition } from 'react-transition-group';
import { AddPizzaModal } from '../AddPizzaModal/AddPizzaModal';

import style from './ItemCard.module.scss';
import { AddItemWithNoExtraModal } from '../AddItemWithNoExtraModal/AddItemWithNoExtraModal';

interface IItemCardProps {
  item: IItem;
  hasExtras: boolean;
}
const ItemCard: React.FC<IItemCardProps> = ({ item, hasExtras }) => {
  const [isActiveModal, setIsActiveModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const cardRef = useRef<HTMLLIElement>(null);
  const handleModalClose = (): void => {
    setIsActiveModal(false);
    document.body.classList.remove('no-overflow');
  };
  const handleCardClick = (e: React.MouseEvent<HTMLLIElement>, item: IItem): void => {
    dispatch(clearExtras());
    dispatch(setSelectedItem(item));
    setIsActiveModal(true);
    document.body.classList.add('no-overflow');
  };

  return (
    <li ref={cardRef} className={style.card} onClick={(e) => handleCardClick(e, item)}>
      <div className={style.topContainer}>
        <img className={style.img} src={`${item.imageUrl}`} alt="" />
        <div className={style.title}>{item.name}</div>
        <div className={style.description}>{item.description}</div>
      </div>
      <div className={style.bottomContainer}>
        {hasExtras ? (
          <div className={style.price}>From {item.price}$</div>
        ) : (
          <div className={style.price}>{item.price}$</div>
        )}

        <button className={style.orderBtn}>Add to cart</button>
      </div>
      <CSSTransition
        in={isActiveModal}
        timeout={200}
        classNames={'modal-window--background'}
        mountOnEnter
        unmountOnExit>
        <ModalWindow handleModalClose={handleModalClose}>
          {hasExtras ? (
            <AddPizzaModal action={handleModalClose} />
          ) : (
            <AddItemWithNoExtraModal action={handleModalClose} />
          )}
        </ModalWindow>
      </CSSTransition>
    </li>
  );
};

export default ItemCard;
