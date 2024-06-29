import styles from '../../../styles/styles.module.css'
import '../../../styles/custom-clases.css'
import { UseProduct } from '../../hooks/useProduct';
import { PropsWithChildren } from 'react';
import { ProductProvider } from './ProductContext';

import { Product } from '../../Interfaces/Product';
import { IOnChangeArgs } from './interfaces';

export interface Props extends PropsWithChildren {
  product: Product,
  className?: string,
  style?: React.CSSProperties,
  changeFn?: (args: IOnChangeArgs) => void,
  value?: number
}
export function ProductCard3({ children, product, className, style, changeFn = () => {}, value = 0 }: Props  ): JSX.Element {
  const { quantity, increaseBy } = UseProduct({
    defaultValue: value,
    changeFn: changeFn,
    product: product
  });

  return (
    <ProductProvider value={{
      quantity,
      increaseBy,
      product
    }}>
      <article className={ `${styles.productCard} ${className}`} style={style}>
        {children}
      </article>
    </ProductProvider>
  );
}
