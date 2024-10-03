import React from 'react';
import style from './ItemCard.module.scss';
import Skeleton from 'react-loading-skeleton';

interface IItemCardSekeletonProps {
  index: number;
}

export const ItemCardSekeleton: React.FC<IItemCardSekeletonProps> = () => {
  return (
    <li className={style.card}>
      <div className={style.topContainer}>
        <Skeleton className={style.img} circle height={'250px'} width={'250px'} />
        <Skeleton className={style.title} height={'26px'} width={'100%'}></Skeleton>
        <Skeleton className={style.description} height={'108px'} width={'300px'}></Skeleton>
      </div>
      <div className={style.bottomContainer}>
        <Skeleton className={style.price} height={'30px'} width={'70px'}></Skeleton>
        <Skeleton height={'40px'} width={'139px'} borderRadius={'16px'}></Skeleton>
      </div>
    </li>
  );
};
