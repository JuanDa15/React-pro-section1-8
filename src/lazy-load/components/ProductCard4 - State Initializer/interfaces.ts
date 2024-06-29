import { Props as ProducCardProps } from './ProductCard'
import { Props as ProductImageProps } from './ProductImage'
import { Props as ProductTitleProps } from './ProductTitle'
import { Props as ButtonsProps } from './ProductButtons'
import { Product } from '../../Interfaces/Product'

export interface IProductCardComponent {
  ({ children, product, className }: ProducCardProps): JSX.Element,
  Title: (props: ProductTitleProps) => JSX.Element,
  Image: (props: ProductImageProps) => JSX.Element,
  Buttons: (props: ButtonsProps) => JSX.Element
}

export interface IOnChangeArgs {
  product: Product,
  count: number
}

export interface ProductCardHandlers {
  count: number,
  isMaxCountReached: boolean,
  maxCount?: number,
  product: Product,
  increaseBy: (value: number) => void,
  reset: () => void
}