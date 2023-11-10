import { FC } from 'react';
import styles from './style.module.scss';
import {ProductItem} from "../ProductItem";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";

export const ProductList: FC = () => {
  const products = useSelector((state: RootState) => state.products.value);

  return (
    <div className={styles['product-list']}>
      {products.map((product) => (
        <ProductItem key={product.id} { ...product} />
      ))}
    </div>
  );
};
