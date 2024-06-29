import { ProductButtons2 } from "./ProductButtons";
import { ProductCard2 as ProductCardHOC } from "./ProductCard";
import { ProductImage2 } from "./ProductImage";
import { ProductTitle2 } from "./ProductTitle";
import { IProductCardComponent } from "./interfaces";

export { ProductButtons2 } from "./ProductButtons";
export { ProductImage2 } from "./ProductImage";
export { ProductTitle2 } from "./ProductTitle";


export const ProductCard2: IProductCardComponent = Object.assign(ProductCardHOC, {
  Title: ProductTitle2,
  Image: ProductImage2,
  Buttons: ProductButtons2,
})

export default ProductCard2