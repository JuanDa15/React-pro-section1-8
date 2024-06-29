import { useState } from "react";
import { Product, ShoppingCartI } from "../Interfaces/Product";

export function useShoppingCart() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartI>({})

  const onProductChange = (product: Product, count: number) => {
    setShoppingCart((prev) => {
      const newShoppingCart = { ...prev }

      if (count === 1 && !newShoppingCart[product.id]) {
        newShoppingCart[product.id] = { ...product, count }
      }

      if (count === -1 && !newShoppingCart[product.id]) return newShoppingCart

      const newValue = newShoppingCart[product.id].count + count

      if (newValue === 0) {
        delete newShoppingCart[product.id]
        return newShoppingCart
      }

      newShoppingCart[product.id].count = newValue
      return newShoppingCart
    })
  };


  const productInCart = (product: Product) => {
    return shoppingCart[product.id]
  };


  return {
    shoppingCart,
    onProductChange,
    productInCart
  }
}