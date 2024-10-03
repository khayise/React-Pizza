import Nav from '../Components/Nav/Nav';
import { Capture } from '../Components/Capture/Capture';

import ItemsList from '../Components/ItemList/ItemsList';
import SkeletonLoader from '../Components/ItemList/ItemsListSkeleton';
import { useGetItemsQuery } from '../store/ItemsApi';

export interface IItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  sizes?: number[];
  categories?: number[];
  weight?: number;
  capacity?: number;
  additionalInfo?: string;
}

export interface IExtra {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
}

export enum navigationEnum {
  'pizza',
  'snacks',
  'drinks',
}

function Home() {
  const { isLoading: isItemsLoading } = useGetItemsQuery('pizzas');

  return (
    <>
      <Nav />
      <Capture name={'pizzas'} navKey="pizza">
        Pizzas
      </Capture>
      {isItemsLoading ? <SkeletonLoader /> : <ItemsList hasExtras itemsType="pizzas" />}

      <Capture name={'snacks'} navKey="snacks">
        Snacks
      </Capture>
      <ItemsList itemsType="snacks" />

      <Capture name={'drinks'} navKey="drinks">
        Drinks
      </Capture>
      <ItemsList itemsType="drinks" />
    </>
  );
}

export default Home;
