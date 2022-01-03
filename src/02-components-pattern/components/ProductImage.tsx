import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import style from '../styles/styles.module.css';

interface Props {
    className?: string,
    img?: string,
}

export const ProductImage = ({className, img}: Props) => {

    const { product } = useContext(ProductContext)

    let imgToShow: string;
    if(img){
        imgToShow = img
    }else if ( product.img ) {
        imgToShow = product.img
    }else{
        imgToShow = noImage
    }

    return(

        <img src={imgToShow} alt='Product Image' className={`${style.productImg} ${className}`} />

    )
}