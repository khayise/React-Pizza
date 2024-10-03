import React, { ReactNode } from 'react';
import { Element } from 'react-scroll';
import style from './Capture.module.scss';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { navigationEnum } from '../../Pages/Home';
import { setActiveNav } from '../../store/activeNavSlice';
import { useAppDispatch } from '../../Hook';

export type TNavKey = 'pizza' | 'snacks' | 'drinks';

interface ICaptureProps {
  name: string;
  children: ReactNode;
  navKey: TNavKey;
}

export const Capture: React.FC<ICaptureProps> = ({ name, children, navKey }) => {
  const dispatch = useAppDispatch();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    dispatch(setActiveNav(navigationEnum[navKey]));
  }, [inView]);

  return (
    <div>
      <Element name={name}>
        <h1 ref={ref} className={style.capture}>
          {children}
        </h1>
      </Element>
    </div>
  );
};
