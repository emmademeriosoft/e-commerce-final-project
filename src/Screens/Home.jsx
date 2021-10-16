import React from 'react'
import HomeBanner from '../components/HomeBanner'
import HotProducts from '../components/HotProducts'
import NewArrival from '../components/NewArrival'
import OfferTimmer from '../components/OfferTimmer'
import TodaysDeals from '../components/TodaysDeals'
import Trending from '../components/Trending'

const Home = () => {
    return (
        <>
            <HomeBanner />
            <NewArrival />
            <HotProducts />
            <OfferTimmer />
            <TodaysDeals />
            <Trending />
        </>
    )
}

export default Home
