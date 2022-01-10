import { ProductButtons } from '../components/ProductButtons';
import { ProductCard } from '../components/ProductCard';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import '../styles/custom-styles.css';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';


export const ShoppingPage = () => {

	const { shoppingCart, onProductCountChange } = useShoppingCart()
	
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
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						className='bg-dark'
						style={{ backgroundColor: '#70D1F8' }}
						value={ shoppingCart[product.id]?.count || 0}
						onChange={onProductCountChange}
					>
						<ProductImage className='custom-image' />
						<ProductTitle className='text-white text-bold' />
						<ProductButtons className='custom-buttons' />
					</ProductCard>
				))}
			</div>

				<div className='shopping-cart'>
					{
						Object.entries(shoppingCart).map(([key, product])=>(
							
							<ProductCard
								key={product.id}
								product={product}
								className='bg-dark'
								style={{ width: '100px' }}
								value={product.count}
								onChange={onProductCountChange}
							>
								<ProductImage className='custom-image' />
								<ProductButtons className='custom-buttons' />
							</ProductCard>

						))
					}
				</div>
			
		</div>
	);
};
