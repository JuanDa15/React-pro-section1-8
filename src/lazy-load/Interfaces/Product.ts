export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string | null;
}

export interface ShoppingCartItem extends Product {
  count: number;
}

export interface ShoppingCartI {
  [id: string]: ShoppingCartItem
}