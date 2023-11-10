import { FC } from 'react';
import styles from './style.module.scss';
import {sorting} from "../../app/productsSlice";
import { useDispatch } from "react-redux";


export const SortField: FC = () => {
  const dispatch = useDispatch();

  return (
    <label className={styles['sort-field']}>
      <select onChange={e => dispatch(sorting(Boolean(e.target.value)))}>
        <option disabled selected>Выбрать сортировку</option>
        <option value="1">Порядок: сперва дешевле</option>
        <option value="">Порядок: сперва дороже</option>
      </select>
    </label>
  );
};
