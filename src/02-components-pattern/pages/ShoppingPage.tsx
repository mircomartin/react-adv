import { ProductButtons } from "../components/ProductButtons"
import { ProductCard } from "../components/ProductCard"
import { ProductImage } from "../components/ProductImage"
import { ProductTitle } from "../components/ProductTitle"
import '../styles/custom-styles.css'

const product = {
    id: '1',
    title:"My Product",
    img:"./coffee-mug.png"
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard 
                    product={product}
                    className="bg-dark"
                    style={{ backgroundColor: '#70D1F8'}}
                    >
                    <ProductImage
                        className="custom-image"
                    />
                    <ProductTitle 
                        className="text-white text-bold"
                    />
                    <ProductButtons
                        className="custom-buttons"
                    />
                </ProductCard>
            </div>
        </div>
    )
}
