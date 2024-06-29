import { Product, ShoppingCartI } from '../../Interfaces/Product'
import ProductCard4 from '../ProductCard4 - State Initializer'
import styles from './ShoppingCart.module.css'

interface Props {
  cart: ShoppingCartI,
  updateShoppingCart: (product: Product, count: number) => void
}

export function ShoppingCart({ cart, updateShoppingCart }: Props) {

  return (
    <div className={`${styles['shopping-cart-position']} ${styles['shopping-cart-size']} ${styles['shopping-cart']}`}>
       {
        Object.entries(cart).map(([key, { count, ...product}]) => (
          <ProductCard4 product={product} key={key}  className="bg-light" value={count} changeFn={ ({ count, product }) => {
            updateShoppingCart(product, count)
          }}>
            {
              () => (
                <>
                  <ProductCard4.Image className="custom-image" />
                  <ProductCard4.Title className="text-dark"/>
                  <ProductCard4.Buttons />
                  
                </>
              )
            }
          </ProductCard4> 
        ))
       }
    </div>
  )
}