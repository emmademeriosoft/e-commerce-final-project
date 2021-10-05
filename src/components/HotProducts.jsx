import React from 'react'
import MainTitle from './MainTitle'
import ProductsTabs from './ProductsTabs'
import NewArrivalsTab from './productsTabs/NewArrivalsTab'

const HotProducts = () => {
    return (
        <section className="hotProducts">
            <div className="container-fluid">
                <MainTitle title="hot products" tagLine="Lorem ipsum dolor sit, amet consectetur adipisicing elit." />
                <ProductsTabs />
                <NewArrivalsTab />
                
            </div>
        </section>
    )
}

export default HotProducts
