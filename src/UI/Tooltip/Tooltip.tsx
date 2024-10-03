import React, { useRef } from 'react';
import style from './Tooltip.module.scss';
import { CSSTransition } from 'react-transition-group';

interface TooltipProps {
  children: React.ReactNode;
  isShowed: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, isShowed }) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        nodeRef={nodeRef}
        timeout={200}
        in={isShowed}
        classNames={'fade'}>
        <div ref={nodeRef} className={style.container}>
          {children}
        </div>
      </CSSTransition>
    </>
  );
};
