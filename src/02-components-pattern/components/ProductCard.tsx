import style from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/productsInterfaces';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({children, product}:ProductCardProps) => {
	const { counter, increaseBy } = useProduct();

	return (
        <Provider value={{
            counter,
            increaseBy,
            product,
        }}
        >
            <div className={style.productCard}>
                {children}
            </div>
        </Provider>
	);
};
