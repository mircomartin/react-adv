import { useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"
import style from '../styles/styles.module.css';

export const ProductButtons = ({className}: {className: string}) => {

    const { counter, increaseBy, maxCount } = useContext(ProductContext)
    
    const isMaxReached = useCallback(

        () => !!maxCount && counter === maxCount,

        [ maxCount, counter ],
    )

    return(

        <div className={`${style.buttonsContainer} ${className}`}>
            <button className={style.buttonMinus} onClick={() => increaseBy(-1)}>
                -
            </button>
            <div className={style.countLabel}>{counter}</div>
            <button className={`${style.buttonAdd} ${isMaxReached() && style.disabled}`} onClick={() => increaseBy(+1)}>
                +
            </button>
        </div>
    )
}