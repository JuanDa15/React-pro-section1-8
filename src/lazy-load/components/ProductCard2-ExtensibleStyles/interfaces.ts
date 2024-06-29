import { Props as ProducCardProps } from './ProductCard'
import { Props as ProductImageProps } from './ProductImage'
import { Props as ProductTitleProps } from './ProductTitle'
import { Props as ButtonsProps } from './ProductButtons'

export interface IProductCardComponent {
  ({ children, product, className }: ProducCardProps): JSX.Element,
  Title: (props: ProductTitleProps) => JSX.Element,
  Image: (props: ProductImageProps) => JSX.Element,
  Buttons: (props: ButtonsProps) => JSX.Element
}