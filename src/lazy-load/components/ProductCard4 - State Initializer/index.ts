import { ProductButtons4 } from "./ProductButtons";
import { ProductCard4 as ProductCardHOC } from "./ProductCard";
import { ProductImage4 } from "./ProductImage";
import { ProductTitle4 } from "./ProductTitle";
import { IProductCardComponent } from "./interfaces";

export { ProductButtons4 } from "./ProductButtons";
export { ProductImage4 } from "./ProductImage";
export { ProductTitle4 } from "./ProductTitle";


export const ProductCard4: IProductCardComponent = Object.assign(ProductCardHOC, {
  Title: ProductTitle4,
  Image: ProductImage4,
  Buttons: ProductButtons4,
})

export default ProductCard4