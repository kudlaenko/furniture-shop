import { FC } from 'react';
import {ProductList, SortField} from "../../components";
import styles from './style.module.scss';

export const Catalog: FC = () => {
  return (
    <div className={styles['catalog-page']}>
      <div className={styles['catalog-page__sort-wrapper']}>
        <SortField />
      </div>
      <ProductList />
    </div>
  );
};
