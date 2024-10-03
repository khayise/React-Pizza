import React from 'react';
import style from '../AddPizzaModal/AddPizzaModal.module.scss';
import { UseAppSelector, useAppDispatch } from '../../Hook';
import { ICartItem } from '../../Pages/Cart/Cart';
import { IItem } from '../../Pages/Home';
import { addToCart } from '../../store/CartSlice';
import { useGetExtrasQuery } from '../../store/ItemsApi';
import { selectTotal } from '../../store/Selectors';

interface AddItemWithNoExtraModalProps {
  action: () => void;
}

export const AddItemWithNoExtraModal: React.FC<AddItemWithNoExtraModalProps> = ({ action }) => {
  const { data: extras } = useGetExtrasQuery();
  const selectedItem: IItem | null = UseAppSelector(
    (state) => state.SelectedItemSlice.selectedItem,
  );
  const selectedExtras = UseAppSelector((state) => state.SelectedItemSlice.selectedExtras);
  const total = UseAppSelector(selectTotal);

  if (!selectedItem) return null;

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    if (extras) {
      const itemToCart: ICartItem = {
        item: selectedItem,
        extras: selectedExtras,
        total: total,
        amount: 1,
      };
      dispatch(addToCart(itemToCart));
      action();
    }
  };

  return (
    <>
      <img className={style.img} src={selectedItem.imageUrl} alt={selectedItem.name} />
      <div className={style.container}>
        <div className={style.frame}>
          <h1 className={style.title}>{selectedItem.name}</h1>
          <div className={style.extrasContainer}></div>
          {selectedItem.weight && <p className={style.additionalInfo}></p>}
          {selectedItem.capacity && (
            <p className={style.additionalInfo}>{`${selectedItem.capacity} l.`}</p>
          )}
          <p className={style.additionalInfo}>{selectedItem.additionalInfo}</p>
        </div>

        <button onClick={handleAddToCart} className={style.toCartBtn}>
          To cart for {total.toFixed(2)}$
        </button>
      </div>
    </>
  );
};
