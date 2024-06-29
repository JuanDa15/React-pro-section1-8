import { useContext } from 'react';
import styles from '../../../styles/styles.module.css'
import placeholder from '../../../assets/no-image.jpg';
import { ProductContext } from './ProductContext';

export const ProductImage = ({ image = '' }: { image?: string }) =>  {
  const { product } = useContext(ProductContext)

  const imageToShow = image ? image : product.image

  return (
    <img 
      src={imageToShow ? imageToShow : placeholder} 
      alt={ imageToShow ? product.name : 'placeholder img'}
      className={styles.productImg} 
    />
  )
}
