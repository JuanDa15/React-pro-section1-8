import { useCallback, useContext } from 'react';
import styles from '../../../styles/styles.module.css'
import { ProductContext } from './ProductContext';

export interface Props {
  className?: string
}

export const ProductButtons4 = ({ className }: Props) => {
  const { increaseBy, quantity, maxCount } = useContext(ProductContext)

  const isMaxCountReached = useCallback(() => {
    return !!maxCount && quantity === maxCount
  }, [quantity, maxCount])

  return (
    <div className  ={`${styles.buttonsContainer} ${className}`}>
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
          disabled={isMaxCountReached()}
        >
          +
        </button>
      </div>
  )
}
