import { ProductButtons3 } from "./ProductButtons";
import { ProductCard3 as ProductCardHOC } from "./ProductCard";
import { ProductImage3 } from "./ProductImage";
import { ProductTitle3 } from "./ProductTitle";
import { IProductCardComponent } from "./interfaces";

export { ProductButtons3 } from "./ProductButtons";
export { ProductImage3 } from "./ProductImage";
export { ProductTitle3 } from "./ProductTitle";


export const ProductCard3: IProductCardComponent = Object.assign(ProductCardHOC, {
  Title: ProductTitle3,
  Image: ProductImage3,
  Buttons: ProductButtons3,
})

export default ProductCard3