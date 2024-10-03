import React from 'react';
import { Receipt } from '../../Components/Receipt/Receipt';
import style from './ReceiptPage.module.scss';
import { Link } from 'react-router-dom';

interface ReceiptPageProps {}

export const ReceiptPage: React.FC<ReceiptPageProps> = ({}) => {
  return (
    <>
      <div className={style.container}>
        <h1>Thank you for the order</h1>
        <Receipt />
        <h2 className={style.callToAction}>
          Want more? Make another order{' '}
          <Link to={'/'}>
            <span className={style.link}>here</span>
          </Link>
        </h2>
      </div>
    </>
  );
};
