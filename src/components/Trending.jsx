import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'


const useStyle = makeStyles(theme => ({
    "trending_banner": {
        backgroundImage: 'url(/images/offer-banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '115px 0',
    },
}))

const Trending = () => {
    const style = useStyle()
    return (
        <section className={style.trending_banner}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-12">
                        <div className="trending_text text-center">
                            <h5 className="text_orange">TRENDING</h5>
                            <h2 className="text-white py-2 fw-bold">New Fashion</h2>
                            <p className="text-white">Consectetur adipisicing elit. Dolores nisi distinctio magni, iure deserunt doloribus optio</p>
                            <Link to="/" className="primary_button bg_white btn_md mt-5">Shop Now</Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trending
