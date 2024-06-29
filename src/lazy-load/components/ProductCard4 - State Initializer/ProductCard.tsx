import styles from '../../../styles/styles.module.css'
import '../../../styles/custom-clases.css'
import { UseProduct } from '../../hooks/useProduct';
import { ProductProvider } from './ProductContext';

import { Product } from '../../Interfaces/Product';
import { IOnChangeArgs, ProductCardHandlers } from './interfaces';

export interface Props {
  children: (args: ProductCardHandlers) => JSX.Element
  product: Product,
  className?: string,
  style?: React.CSSProperties,
  changeFn?: (args: IOnChangeArgs) => void,
  value?: number,
  initialValues?: IInitialValues
}

export interface IInitialValues {
  count?: number,
  maxCount?: number
}

export function ProductCard4({ 
  children, 
  product, 
  className, 
  style, 
  changeFn, 
  value = 0, 
  initialValues 
}: Props  ): JSX.Element {
  const { quantity, increaseBy, reset, isMaxCountReached } = UseProduct({
    defaultValue: value,
    changeFn: changeFn,
    product: product,
    initialValues
  });
  

  return (
    <ProductProvider value={{
      quantity,
      increaseBy,
      product,
      maxCount: initialValues?.maxCount
    }}>
      <article className={ `${styles.productCard} ${className}`} style={style}>
        { children({
           count: quantity,
           isMaxCountReached,
           maxCount: initialValues?.maxCount,
           product,
           increaseBy,
           reset
        }) }
      </article>
    </ProductProvider>
  );
}
