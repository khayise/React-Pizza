import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { UseAppSelector } from '../../Hook';
import { NavButton } from '../NavButton/NavButton';
import { CSSTransition } from 'react-transition-group';
import style from './Nav.module.scss';

const Nav: React.FC = () => {
  const offset = -40;
  const duration = 500;

  const { ref, inView } = useInView({
    threshold: 1,
    initialInView: true,
  });

  const pizzaCounter = UseAppSelector((state) =>
    state.CartSlice.cartItems.reduce((totalAmount, item) => item.amount + totalAmount, 0),
  );

  return (
    <nav ref={ref} className={`${style.nav} ${!inView ? `${style.nav__sticked}` : ''}`}>
      <div className={style.leftSide}>
        <NavButton to="pizzas" offset={offset} duration={duration} label="Pizza" navIndex={0} />
        <NavButton to="snacks" offset={offset} duration={duration} label="Snacks" navIndex={1} />
        <NavButton to="drinks" offset={offset} duration={duration} label="Drinks" navIndex={2} />
      </div>
      <Link to="/cart">
        <button className={style.cartBtn}>
          <div
            className={`${style.cartLabel} ${pizzaCounter === 0 ? `${style.cartLabel__flexed}` : ''}`}>
            Cart
          </div>
          <CSSTransition
            timeout={1000}
            in={pizzaCounter !== 0}
            mountOnEnter
            unmountOnExit
            classNames={'cart'}>
            <div className={style.rightSide}>
              <div className={style.line}></div>
              <div className="nav-cart--counter">{pizzaCounter}</div>
            </div>
          </CSSTransition>
        </button>
      </Link>
    </nav>
  );
};

export default Nav;
