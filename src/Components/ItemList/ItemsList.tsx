import { IItem } from '../../Pages/Home';
import ItemCard from '../ItemCard/ItemCard';
import { useGetItemsQuery } from '../../store/ItemsApi';

import style from './ItemList.module.scss';

interface IItemListProps {
  itemsType: string;
  hasExtras?: boolean;
}

const ItemsList: React.FC<IItemListProps> = ({ itemsType, hasExtras = false }) => {
  const { data: items } = useGetItemsQuery(itemsType);

  return (
    <ul className={style.container}>
      {items?.map((item: IItem) => {
        return <ItemCard hasExtras={hasExtras} key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default ItemsList;
