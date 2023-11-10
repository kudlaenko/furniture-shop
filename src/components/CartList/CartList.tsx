import { FC } from 'react';
import styles from './style.module.scss';
import {CartItem} from "../CartItem";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {deleteAll} from "../../app/productsSlice";

export const CartList: FC = () => {
  const cart = useSelector((state: RootState) => state.products.cart);
  const dispatch = useDispatch();

  return (
    <div className={styles['cart-list']}>
      <div className={styles['cart-list__header']}>
        <div>Товар</div>
        <div>К-во</div>
      </div>
      {cart ? Object.keys(cart).map((key) => (
        <CartItem key={key} value={cart[+key]} id={+key} />
      )) : null}
      <div className={styles['cart-list__buttons']}>
        <button type="button" onClick={() => dispatch(deleteAll())}>Очистить корзину</button>
        <Link to="/" className={styles['cart-list__buttons_black']}>Продолжить покупки</Link>
      </div>
    </div>
  );
};
