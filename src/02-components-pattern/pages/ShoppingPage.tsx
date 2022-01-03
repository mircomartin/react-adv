import { ProductButtons } from "../components/ProductButtons"
import { ProductCard } from "../components/ProductCard"
import { ProductImage } from "../components/ProductImage"
import { ProductTitle } from "../components/ProductTitle"

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
                <ProductCard product={product}>
                    <ProductImage img={''}/>
                    <ProductTitle title={'Hola Mundo'}/>
                    <ProductButtons/>
                </ProductCard>
            </div>
        </div>
    )
}
