import { useContext } from "react"
import { ProductContext } from "./ProductContext"
import styles from '../../../styles/styles.module.css'

export const ProductTitle = ({ name }: { name?: string }) => {
  const { product } = useContext(ProductContext)
  const nameToShow = name ?? product.name

  return (
    <span className={styles.productDescription}>{nameToShow}</span>
  )
}