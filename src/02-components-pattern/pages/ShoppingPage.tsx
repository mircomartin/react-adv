import { ProductButtons } from '../components/ProductButtons';
import { ProductCard } from '../components/ProductCard';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import '../styles/custom-styles.css';
import { products } from '../data/products';

const product = products[0]

export const ShoppingPage = () => {

	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />

			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
				}}
			>
				<ProductCard
					key={product.id}
					product={product}
					className='bg-dark'
					style={{ backgroundColor: '#70D1F8' }}
					initialValues={{
						count:4,
						maxCount: 10
					}}

				>
					{
						({reset, isMaxCountReached, increaseBy, count}) => (
							<>
								<ProductImage className='custom-image' />
								<ProductTitle className='text-white text-bold' />
								<ProductButtons className='custom-buttons' />

								<button onClick={reset}>Reset</button>
								<button onClick={()=>increaseBy(-2)}>-2</button>
								{
									!isMaxCountReached &&
									<button onClick={()=>increaseBy(+2)}>+2</button>
								}
								<span>{count}</span>
							</>
						)
					}
				</ProductCard>
			</div>
			
		</div>
	);
};
