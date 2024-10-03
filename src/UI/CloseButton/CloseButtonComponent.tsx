import React from 'react';
import { IoMdClose } from "react-icons/io";
import style from './CloseButton.module.scss';

interface CloseButtonProps {
  onClick?: () => void;
  className?: string;
}

export const CloseButtonComponent: React.FC<CloseButtonProps> = ({ onClick, className }) => {
  return (
    <button onClick={onClick} className={style.btn}>
      {/* <img className={className} src={closeIcon} alt="" /> */}
      <IoMdClose className={className} />
    </button>
  );
};
