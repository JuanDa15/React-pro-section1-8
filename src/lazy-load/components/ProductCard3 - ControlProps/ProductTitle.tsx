import { useContext } from "react"
import { ProductContext } from "./ProductContext"
import styles from '../../../styles/styles.module.css'

export interface Props {
  name?: string,
  className?: string,
  style?: React.CSSProperties
}

export const ProductTitle3 = ({ name, className, style }: Props) => {
  const { product } = useContext(ProductContext)
  const nameToShow = name ?? product.name

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>{nameToShow}</span>
  )
}