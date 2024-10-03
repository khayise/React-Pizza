import React, { useState } from 'react';
import { IExtra } from '../../Pages/Home';
import acceptIcon from '../../assets/acceptIcon.svg';
import { useAppDispatch } from '../../Hook';
import { addExtra, removeExtra } from '../../store/SelectedItemSlice';
import style from './ExtraCard.module.scss';

interface IExtraCardProps {
  extra: IExtra;
}

export const ExtraCard: React.FC<IExtraCardProps> = ({ extra }) => {
  const [isAccepted, setIsAccepted] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  function handleClick(extra: IExtra) {
    setIsAccepted((prev) => !prev);
    if (!isAccepted) {
      dispatch(addExtra(extra));
    } else {
      dispatch(removeExtra(extra));
    }
  }
  return (
    <div
      onClick={() => handleClick(extra)}
      className={`${style.container} ${isAccepted ? `${style.container__accepted}` : ''}`}>
      <img className={style.img} src={extra.imgUrl} alt="" />
      <div className={style.title}>{extra.name}</div>
      <div className={style.price}>{extra.price.toFixed(2)}$</div>
      {isAccepted && <img className={style.acceptFlag} src={acceptIcon} alt="" />}
    </div>
  );
};
