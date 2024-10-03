import { ItemCardSekeleton } from '../ItemCard/ItemCardSekeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import style from './ItemList.module.scss';

const SkeletonLoader: React.FC = () => (
  <ul className={style.container}>
    {new Array(12).fill(null).map((_, index) => {
      return <ItemCardSekeleton key={index} index={index} />;
    })}
  </ul>
);

export default SkeletonLoader;
