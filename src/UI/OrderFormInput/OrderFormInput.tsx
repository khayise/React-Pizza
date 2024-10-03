import React, { useState } from 'react';
import style from './OrderFormInput.module.scss';
import { UseAppSelector, useAppDispatch } from '../../Hook';
import { changeInput } from '../../store/FormInputs';
import { InitialState } from '../../store/FormInputs';
import { CSSTransition } from 'react-transition-group';

interface OrderFormInputProps {
  label: keyof InitialState; // Исправлено здесь
}

const OrderFormInput: React.FC<OrderFormInputProps> = ({ label }) => {
  const dispatch = useAppDispatch();
  const inputValue = UseAppSelector((state) => state.FormInputs[label]);

  const [neededText, setNeededText] = useState<boolean>(false);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNeededText(false);
    const text = e.target.value;
    dispatch(changeInput([label, text]));
  }

  function onBlur() {
    if (!inputValue) {
      setNeededText(true);
    }
  }

  return (
    <div className={style.container}>
      <label htmlFor={label}>{label}:</label>
      <input
        spellCheck={false}
        onBlurCapture={onBlur}
        onChange={onChange}
        autoComplete="off"
        className={`${style.input} ${neededText ? style.warning : ''}`}
        id={label}
        type="text"
        value={inputValue}
      />
      <CSSTransition in={neededText} timeout={300} classNames={'fade'} mountOnEnter unmountOnExit>
        <span className={style.notification}>Please fill a field</span>
      </CSSTransition>
    </div>
  );
};

export default OrderFormInput;
