import { ProductButtons } from "./ProductButtons";
import { ProductCard as ProductCardHOC, PropsProductCard } from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export interface IProductCardComponent {
  ({ children, product }: PropsProductCard): JSX.Element,
  Title: ({ name }: { name?: string }) => JSX.Element,
  Image: ({ image }: { image?: string }) => JSX.Element,
  Buttons: () => JSX.Element

}

export const ProductCard: IProductCardComponent = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
})

export default ProductCard