import styles from '../../../styles/styles.module.css'
import '../../../styles/custom-clases.css'
import { UseProduct } from '../../hooks/useProduct';
import { PropsWithChildren } from 'react';
import { ProductProvider } from './ProductContext';

import { Product } from '../../Interfaces/Product';

export interface Props extends PropsWithChildren {
  product: Product,
  className?: string,
  style?: React.CSSProperties
}

export function ProductCard2({ children, product, className, style }: Props  ): JSX.Element {
  const { quantity, increaseBy } = UseProduct(0);

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
