import React, { useEffect, useRef } from 'react';
import { CloseButtonComponent } from '../CloseButton/CloseButtonComponent';
import style from './ModalWindow.module.scss';

interface IModalProps {
  handleModalClose: () => void;
  children: React.ReactNode;
}

export const ModalWindow: React.FC<IModalProps> = ({ handleModalClose, children }) => {
  const backgroundRef = useRef<any>(null);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.target === backgroundRef.current) {
      handleModalClose();
    }
  };

  useEffect(() => {
    return () => document.body.classList.remove('no-overflow');
  }, []);

  return (
    <>
      <div ref={backgroundRef} onClick={handleBackgroundClick} className={style.background}>
        <div className={style.window}>
          {children}
          <CloseButtonComponent onClick={handleModalClose} className={style.closeBtn} />
        </div>
      </div>
    </>
  );
};
