import { Product, ProductButton, ProductDescription, ProductImg, WrapperProducts } from "./Products.styled"
import {BsCartCheckFill} from 'react-icons/bs'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { memo } from "react"

const Products = ({products, onClickButtonProduct, showSidebar}) =>  <WrapperProducts onClick={() => showSidebar(false)}>
        {products && products.map(item => <Product key={item.id}>
            <ProductImg>
            <LazyLoadImage src={item.image} alt={item.image} />
            </ProductImg>
            <ProductDescription> 
            <h3>{item.title}</h3>
            <h5>{item.description}</h5>
            <h2>{item.price} &#8381;</h2>
            </ProductDescription>
            {!item.buttonActive
            ?   <ProductButton onClick={() => onClickButtonProduct(item.id, item.image, item.title, item.price, item.amount, item.buttonActive)}>
                    <p>В корзину</p>
            </ProductButton>
            :   <ProductButton activeButton={true} >
                    <BsCartCheckFill />
            </ProductButton>
            }
            
        </Product>)
        }
    </WrapperProducts>

export default memo(Products)