import Skeleton from 'react-loading-skeleton';
import style from './ExtraCard.module.scss';

export const ExtraCardSkeleton = () => {
  return new Array(20).fill(null).map((_, index) => {
    return (
      <li key={index} className={style.container}>
        <Skeleton className={style.img} circle></Skeleton>
        <Skeleton className={style.title}></Skeleton>
        <Skeleton className={style.price}></Skeleton>
      </li>
    );
  });
};
