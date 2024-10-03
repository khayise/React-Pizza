import React from 'react';
import Header from '../Components/Header/Header';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useLocation, useOutlet } from 'react-router-dom';
import { Footer } from '../Components/Footer/Footer';

const Root: React.FC = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();

  return (
    <>
      <SwitchTransition>
        <CSSTransition
          key={location.pathname} // Меняем ключ на основании location.pathname для каждой страницы
          timeout={300} // Время анимации
          classNames="page" // Класс для анимации
          unmountOnExit // Удаляет компонент после выхода
          mountOnEnter // Монтирует компонент при входе
        >
          {(state) => (
            <div className="page">
              <Header />
              {currentOutlet}
              <Footer />
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default Root;
