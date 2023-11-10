import { FC } from 'react';
import styles from './style.module.scss';
import {CartItemProps} from "./types";
import {Counter} from "../Counter";
import {products} from "../../data";
import {changeSum, deleteItem} from "../../app/productsSlice";
import {useDispatch} from "react-redux";

export const CartItem: FC<CartItemProps> = (props) => {
  const { id, value } = props;
  const product = products.find((pr) => pr.id === id);
  const dispatch = useDispatch();

  if (!product || !value) return null;

  const { title, description, imgUrl, price } = product;
  const onClick = () => {
    dispatch(deleteItem(id));
    dispatch(changeSum(-(price * value)));
  }

  return (
    <div className={styles['cart-item']}>
      <div className={styles['cart-item__img']}>
        <img alt={title} src={require(`../../assets/images/${imgUrl}`)} />
      </div>
      <div className={styles['cart-item__info']}>
        <div>
          <div className={styles['cart-item__title']}>{title}</div>
          <div className={styles['cart-item__description']}>{description}</div>
          <div className={styles['cart-item__price']}>{price}</div>
          <div className={styles['cart-item__buttons']}>
            <button type="button">Избранные</button>
            <button type="button" onClick={onClick}>Удалить</button>
          </div>
        </div>
        <Counter value={value} id={id} price={price} />
      </div>
    </div>
  );
};
