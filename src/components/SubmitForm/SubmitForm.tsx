import { FC } from 'react';
import styles from './style.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";

export const SubmitForm: FC = () => {
  const sum = useSelector((state: RootState) => state.products.sum);
  const formatSum = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return (
    <div className={styles['submit-form']}>
      <div className={styles['submit-form__title']}>Оформление заказа</div>
      <div className={styles['submit-form__input']}>
        <input type="text" placeholder="Имя Фамилия" />
      </div>
      <div className={styles['submit-form__input']}>
        <input type="text" placeholder="+ 7 904 000 80 80" />
      </div>
      <div className={styles['submit-form__input']}>
        <input type="text" placeholder="Адрес доставки" />
      </div>
      <div className={styles['submit-form__sum']}>Итого: <span>{formatSum} руб.</span></div>
      <div className={styles['submit-form__button']}>
        <button type="button">Оформить заказ</button>
      </div>
    </div>
  );
};
