import { FC } from 'react';
import styles from './style.module.scss';
import {ProductItemProps} from "./types";
import {CartIcon} from "../CartIcon";
import {LikeIcon} from "../LikeIcon";
import {useDispatch} from "react-redux";
import {increment, changeSum} from "../../app/productsSlice";

export const ProductItem: FC<ProductItemProps> = (props) => {
  const { id, title, description, imgUrl, price } = props;
  const formatPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(increment(id));
    dispatch(changeSum(price));
  }

  return (
    <div className={styles.product}>
      <div className={styles['product__img']}>
        <img alt={title} src={require(`../../assets/images/${imgUrl}`)} />
      </div>
      <div className={styles['product__title']}>{title}</div>
      <div className={styles['product__description']}>{description}</div>
      <div className={styles['product__price']}>{formatPrice} руб.</div>
      <div className={styles['product__buttons']}>
        <button type="button" onClick={onClick}>
          <CartIcon />
        </button>
        <button type="button">
          <LikeIcon />
        </button>
      </div>
    </div>
  );
};
