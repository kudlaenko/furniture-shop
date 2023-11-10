import {FC, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import styles from './style.module.scss';

export const Header: FC = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;

  return (
    <nav className={styles.nav}>
      <h1>Интерьер.</h1>
      <ul className={styles['nav__links']}>
        <li>
          <Link to="/" className={styles['nav__links__item']}>
            {isMobile ? (
              <img alt='Каталог' src={require('../../assets/icons/catalog.png')} />
            ) : 'Каталог'}
          </Link>
        </li>
        <li>
          <Link to="/cart" className={styles['nav__links__item']}>
            {isMobile ? (
              <img alt='Корзина' src={require('../../assets/icons/cart.png')} />
            ) : 'Корзина'}</Link>
        </li>
      </ul>
    </nav>
  );
};
