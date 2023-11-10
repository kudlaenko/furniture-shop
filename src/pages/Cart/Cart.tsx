import { FC } from 'react';
import styles from './style.module.scss';
import {CartList, SubmitForm} from "../../components";

export const Cart: FC = () => {
  return (
    <div className={styles['cart-page']}>
      <CartList />
      <SubmitForm />
    </div>
  );
};
