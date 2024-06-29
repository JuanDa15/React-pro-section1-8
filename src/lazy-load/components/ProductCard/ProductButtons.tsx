import { useContext } from 'react';
import styles from '../../../styles/styles.module.css'
import { ProductContext } from './ProductContext';

export const ProductButtons = () => {
  const { increaseBy, quantity } = useContext(ProductContext)


  return (
    <div className={styles.buttonsContainer}>
        <button
          type='button'
          className={styles.buttonMinus}
          onClick={() => increaseBy(-1)}
        >
          -
        </button>
        <div className={styles.countLabel}>{quantity}</div>
        <button
          type='button'
          className={styles.buttonAdd}
          onClick={() => increaseBy(+1)}
        >
          +
        </button>
      </div>
  )
}
