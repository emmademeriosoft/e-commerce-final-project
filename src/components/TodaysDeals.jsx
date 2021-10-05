import React from 'react'
import MainTitle from './MainTitle'
import UseOwlCarousel from './UseOwlCarousel'

const TodaysDeals = () => {
    return (
        <>
            <section className="todaysDeals py-5">
                <div className="container-fluid">
                    <MainTitle title="today`s deals" tagLine="Lorem ipsum dolor sit, amet consectetur adipisicing elit." />
                    <UseOwlCarousel />
                </div>
            </section>
        </>
    )
}

export default TodaysDeals
