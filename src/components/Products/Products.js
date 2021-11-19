import { Product, ProductButton, ProductDescription, ProductImg, WrapperProducts } from "./Products.styled"


const Products = ({products}) => 
    <WrapperProducts>
        {products && products.map(item => <Product key={item.id}>
            <ProductImg>
            <img src={item.image} alt={item.image} />
            </ProductImg>
            <ProductDescription> 
            <h3>{item.title}</h3>
            <h5>{item.description}</h5>
            <h2>{item.price} &#8381;</h2>
            </ProductDescription>
            <ProductButton>
                <p>В корзину</p>
            </ProductButton>
        </Product>)}
    </WrapperProducts>

export default Products