import { createContext } from "react";
import { Product } from "../../Interfaces/Product";

interface ProductContextProps {
  product: Product;
  quantity: number;
  increaseBy: (q: number) => void;
}

export const ProductContext = createContext<ProductContextProps>({
  product: {} as Product,
  quantity: 0,
  increaseBy: () => { }
})

const { Provider } = ProductContext;

export const ProductProvider = Provider