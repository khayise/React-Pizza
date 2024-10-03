import { Logo } from '../../UI/Logo';
import style from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.innerContainer}>
          <div className={style.headerLogo}>
            <Logo width={'150px'} />
          </div>
          <div className={style.fakeBlock}></div>
          <div className={`${style.centerBlock} ${style.tooltipTrigger}`}>
            <div className={style.top}>Pizza delivery NewYork</div>
            <div className={style.bottom}>40 min</div>
            <div className={style.tooltip}>
              <p className={style.tooltipText}>
                At React Pizza, we understand that when you're hungry, you don't want to wait.
                That's why we guarantee delivery in 40 minutes or less. Our efficient delivery
                system ensures that your pizza arrives hot and fresh every time.
              </p>
            </div>
          </div>

          <div className={style.right}>
            <div className={style.top}>+4915120484176</div>
            <div className={style.bottom}>Call us</div>
          </div>
        </div>
        {/* Thats a fake block bellow to make header tighter */}
        <div className={style.innerContainer}></div>
      </header>
    </>
  );
};

export default Header;
