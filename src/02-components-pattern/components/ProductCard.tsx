import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext, CSSProperties } from 'react';
import {
	ProductContextProps,
	Product,
	onChangeArgs,
	InitialValues,
	ProductCardHandlers,
} from '../interfaces/productsInterfaces';

interface Props {
	//children?: ReactElement | ReactElement[];
	children: (args: ProductCardHandlers) => JSX.Element;
	className?: string;
	initialValues?: InitialValues;
	onChange?: (args: onChangeArgs) => void;
	product: Product;
	style?: CSSProperties;
	value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
	children,
	product,
	className,
	style,
	onChange,
	value,
	initialValues,
}: Props) => {
	const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({
		onChange,
		product,
		value,
		initialValues,
	});

	return (
		<Provider
			value={{
				counter,
				increaseBy,
				product,
				maxCount,
			}}
		>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children({
					count: counter,
					increaseBy,
					product,
					maxCount: initialValues?.maxCount,
					isMaxCountReached: isMaxCountReached,
					reset,
				})}
			</div>
		</Provider>
	);
};
