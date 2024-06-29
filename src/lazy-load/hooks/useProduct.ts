import { useEffect, useRef, useState } from "react"
import { IOnChangeArgs } from "../components/ProductCard3 - ControlProps/interfaces";
import { Product } from "../Interfaces/Product";
import { IInitialValues } from "../components/ProductCard4 - State Initializer/ProductCard";

interface Props {
  defaultValue?: number;
  product: Product;
  changeFn?: (args: IOnChangeArgs) => void;
  initialValues?: IInitialValues
}

export function UseProduct({
  defaultValue = 0,
  product,
  changeFn,
  initialValues
}: Props) {
  const [quantity, setQuantity] = useState<number>(initialValues?.count || defaultValue)

  const isControlled = useRef(!!changeFn)
  const isMounted = useRef(false)

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      if (changeFn) return changeFn({ count: value, product: product })
    }
    let newValue = Math.max(quantity + value, 0)

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount)
    }

    setQuantity(newValue);

    if (changeFn) {
      changeFn({
        count: newValue,
        product: product
      })
    }
  }

  const reset = () => {
    setQuantity(initialValues?.count || defaultValue)
  }

  useEffect(() => {
    if (!isMounted.current) return;

    setQuantity(defaultValue)
  }, [defaultValue])

  useEffect(() => {
    isMounted.current = true
  }, [])

  return {
    quantity,
    increaseBy,
    reset,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === quantity
  }
} 