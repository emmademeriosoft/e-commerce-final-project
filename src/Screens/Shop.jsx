import React from 'react'
import ShopBanner from '../components/ShopBanner'
import SingleProduct from '../components/SingleProduct'

const Shop = (props) => {
const productId = props.match.params.id
    return (
        <>
           <ShopBanner/> 
           <SingleProduct productId={productId}/>
        </>
    )
}

export default Shop
