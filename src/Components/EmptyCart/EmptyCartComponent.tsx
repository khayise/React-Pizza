import React from 'react';
import { Link } from 'react-router-dom';
import style from './EmptyCart.module.scss';

interface IEmptyCartProps {
  className: string;
}

const EmptyCartComponent: React.FC<IEmptyCartProps> = ({ className }) => {
  return (
    <div className={`${style.container} ${className}`}>
      <img
        className={style.img}
        src="https://cdn.dodostatic.net/site-static/dist/121df529925b0f43cc73.svg"
        alt=""
      />
      <h1>Ooops...</h1>
      <h2>Looks like sombody ate your pizza</h2>
      <p>
        Try to order new pizza{' '}
        <span className={style.link}>
          <Link to="/">here</Link>
        </span>
      </p>
    </div>
  );
};

export default EmptyCartComponent;
