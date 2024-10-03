import React from 'react';
import OrderFormInput from '../../UI/OrderFormInput/OrderFormInput';
import style from './OrderForm.module.scss';
import { UseAppSelector } from '../../Hook';
import { useNavigate } from 'react-router-dom';

const OrderForm: React.FC = () => {
  const navigate = useNavigate();

  const isButtonDisabled: boolean = (() => {
    const inputsValues = Object.values(UseAppSelector((state) => state.FormInputs));
    for (let value of inputsValues) {
      if (Boolean(value) === false) {
        return true;
      }
    }
    return false;
  })();

  function submit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    navigate('/receipt');
  }

  return (
    <>
      <form className={style.form}>
        <OrderFormInput label="Street" />
        <OrderFormInput label="House" />
        <OrderFormInput label="Post Index" />
        <OrderFormInput label="Telephone Number" />

        <button
          disabled={isButtonDisabled}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => submit(e)}
          className={style.submitBtn}
          type="submit">
          Apply
        </button>
      </form>
    </>
  );
};

export default OrderForm;
