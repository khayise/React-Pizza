import React from 'react';
import closeIcon from '../../assets/closeIcon.svg';
import style from './CloseButton.module.scss';

interface CloseButtonProps {
  onClick?: () => void;
  className?: string;
}

export const CloseButtonComponent: React.FC<CloseButtonProps> = ({ onClick, className }) => {
  return (
    <button onClick={onClick} className={style.btn}>
      <img className={className} src={closeIcon} alt="" />
    </button>
  );
};
