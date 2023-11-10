import {FC, useState} from 'react';
import styles from './style.module.scss';
import {changeSum, decrement, increment} from "../../app/productsSlice";
import {useDispatch} from "react-redux";

export const Counter: FC<{value: number, id: number, price: number}> = ({value, id, price}) => {
  let [count, setCount] = useState(value);
  const min = 1;
  const max = 10;
  const dispatch = useDispatch();

  function incrementCount() {
    if (count < max) {
      count = count + 1;
      setCount(count);
      dispatch(increment(id));
      dispatch(changeSum(price));
    }
  }

  function decrementCount() {
    if (count > min) {
      count = count - 1;
      setCount(count);
      dispatch(decrement(id));
      dispatch(changeSum(-price));
    }
  }

  return (
    <div className={styles.counter}>
      <div className={styles['counter__value']}>{count}</div>
      <div className={styles['counter__buttons']}>
        <button onClick={incrementCount} />
        <button onClick={decrementCount} />
      </div>
    </div>
  );
};
