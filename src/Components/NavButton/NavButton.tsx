import React from 'react';
import { Link as Scroll } from 'react-scroll';
import { UseAppSelector } from '../../Hook';

import style from './NavButton.module.scss';

interface INavButton {
  to: string;
  offset: number;
  duration: number;
  label: string;
  navIndex: number;
}
export const NavButton: React.FC<INavButton> = ({ to, offset, duration, label, navIndex }) => {
  const activeNav: number | null = UseAppSelector((state) => state.ActiveNavSlice.activeNav);
  return (
    <Scroll to={to} smooth={true} offset={offset} duration={duration}>
      <button
        className={`${style.navBtn} ${activeNav === navIndex ? `${style.navBtn__active}` : ''}`}>
        {label}
      </button>
    </Scroll>
  );
};
