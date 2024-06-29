import { ShoppingCart } from '../components/ShoppingCart/ShoppingCart';
import ProductCard4 from '../components/ProductCard4 - State Initializer';
import { IOnChangeArgs } from '../components/ProductCard3 - ControlProps/interfaces';
import { useShoppingCart } from '../hooks/useShoppingCart';

export const products = [
  {
    id: crypto.randomUUID(),
    name: 'Product 1',
    price: 10.99,
    description: 'This is product 1',
    image: '/coffee-mug.png',
  },
  {
    id: crypto.randomUUID(),
    name: 'Product 2',
    price: 20.99,
    description: 'This is product 2',
    image: '/coffee-mug2.png',
  },
  {
    id: crypto.randomUUID(),
    name: 'Product 3',
    price: 30.99,
    description: 'This is product 3',
    image: null,
  },
];

export default function ShoppingPage(): JSX.Element {
  const { shoppingCart, onProductChange } = useShoppingCart()

  return (
    <>
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        }}
      >
        {products.map((product) => (
          <>
            <ProductCard4
              product={product}
              key={product.id}
              className='bg-light'
              initialValues={{
                count: 3,
                maxCount: 10
              }}
            >
              {
                ({ reset, increaseBy }) => (
                  <>
                    <ProductCard4.Image className='custom-image' />
                    <ProductCard4.Title className='text-dark' />
                    <ProductCard4.Buttons />
                    <button type='button' onClick={reset}>
                      Reset
                    </button>
                    <button type='button' onClick={() => increaseBy(2)}>
                      + 2
                    </button>
                  </>
                )
              }
            </ProductCard4>
          </>
        ))}
      </section>
      <ShoppingCart cart={shoppingCart} updateShoppingCart={onProductChange}  />
    </>
  );
}
