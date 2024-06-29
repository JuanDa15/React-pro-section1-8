import { useContext } from 'react';
import styles from '../../../styles/styles.module.css'
import placeholder from '../../../assets/no-image.jpg';
import { ProductContext } from './ProductContext';

export interface Props {
  image?: string,
  className?: string,
  style?: React.CSSProperties
}

export const ProductImage4 = ({ image = '', className, style }: Props) =>  {
  const { product } = useContext(ProductContext)

  const imageToShow = image ? image : product.image

  return (
    <img 
      src={imageToShow ? imageToShow : placeholder} 
      alt={ imageToShow ? product.name : 'placeholder img'}
      className={`${styles.productImg} ${className}`} 
      style={style}
    />
  )
}
