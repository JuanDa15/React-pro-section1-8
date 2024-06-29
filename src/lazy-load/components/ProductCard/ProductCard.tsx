import styles from '../../../styles/styles.module.css'
import { UseProduct } from '../../hooks/useProduct';
import { PropsWithChildren } from 'react';
import { ProductProvider } from './ProductContext';

import { Product } from '../../Interfaces/Product';

export interface PropsProductCard extends PropsWithChildren {
  product: Product
}

export function ProductCard({ children, product }: PropsProductCard  ): JSX.Element {
  const { quantity, increaseBy } = UseProduct(0);

  return (
    <ProductProvider value={{
      quantity,
      increaseBy,
      product
    }}>
      <article className={styles.productCard}>
        {children}
      </article>
    </ProductProvider>
  );
}
