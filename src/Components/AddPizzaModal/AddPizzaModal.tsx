import { IItem } from '../../Pages/Home';
import { UseAppSelector, useAppDispatch } from '../../Hook';
import { selectTotal } from '../../store/Selectors';
import { addToCart } from '../../store/CartSlice';
import { ICartItem } from '../../Pages/Cart/Cart';
import { useGetExtrasQuery, useGetItemsQuery } from '../../store/ItemsApi';
import { ExtraCard } from '../ExtraCard/ExtraCard';
import { ExtraCardSkeleton } from '../ExtraCard/ExtraCardSkeleton';

import style from './AddPizzaModal.module.scss';

interface IAddPizzaModalProps {
  action: () => void;
}

export const AddPizzaModal: React.FC<IAddPizzaModalProps> = ({ action }) => {
  const { data: extras, isLoading } = useGetExtrasQuery();
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
          <div className={style.extrasContainer}>
            {isLoading ? (
              <ExtraCardSkeleton />
            ) : (
              <>
                {extras?.map((extra) => {
                  return <ExtraCard key={extra.id} extra={extra} />;
                })}
              </>
            )}
          </div>
        </div>

        <button onClick={handleAddToCart} className={style.toCartBtn}>
          To cart for {total.toFixed(2)}$
        </button>
      </div>
    </>
  );
};
