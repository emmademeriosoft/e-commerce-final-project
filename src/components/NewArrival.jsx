
import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyle = makeStyles((theme) => ({
    new_arrival: {
        padding: '50px 0px'
    },
    "display_product_box": {
        position: 'relative',
        overflow: 'hidden',


    },
    "display_product_title": {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: '10%',
        "& h4, h2": {
            margin: '0px !important',

        }
    },
    "display_product_title_center": {
        position: 'absolute',
        left: '40px',
        bottom: 0,
        padding: '20px',
        transform: 'translateY(-50%)',
        width: '50%',

        "@media (max-width: 1440px)": {

            left: '30px',
            transform: 'translateY(-8%)',
            width: '80%',
        },
        "& h4, h2": {
            margin: '0px !important',

        }

    }

}))

const NewArrival = () => {
    const style = useStyle()
    return (
        <section className={style.new_arrival}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className={style.display_product_box + " img_zoom_hover mb-3"}>
                            <img src="/images/woman.png" alt="" />
                            <div className={style.display_product_title}>
                                <h4 className="text-uppercase text_orange">outwear</h4>
                                <h2 className="text-uppercase">new</h2>
                                <h4 className="text-uppercase">collection</h4>
                                <Link to="/" className="primary_button bg_black btn_sm mt-3">Shop Now</Link>
                            </div>
                        </div>
                        <div className={style.display_product_box + " img_zoom_hover"}>
                            <img src="/images/woman1.png" alt="" />
                            <div className={style.display_product_title}>
                                <h4 className="text-uppercase">outwear</h4>
                                <h2 className="text-uppercase">new</h2>
                                <h4 className="text-uppercase">collection</h4>
                                <Link to="/" className="primary_button bg_black btn_sm mt-2" >Shop Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className={style.display_product_box + " img_zoom_hover mb-3"}>
                            <img src="/images/bag.png" alt="" />
                            <div className={style.display_product_title_center}>
                                <h4 className="text-uppercase text_orange">outwear</h4>
                                <h2 className="text-uppercase">new</h2>
                                <h4 className="text-uppercase">collection</h4>
                                <Link to="/" className="primary_button bg_black btn_sm mt-3">Shop Now</Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 d-none d-sm-block d-lg-block">
                        <div className={style.display_product_box + " img_zoom_hover mb-3"}>
                            <img src="/images/woman4.png" alt="" />
                            <div className={style.display_product_title}>
                                <h4 className="text-uppercase text_orange">outwear</h4>
                                <h2 className="text-uppercase">new</h2>
                                <h4 className="text-uppercase">collection</h4>
                                <Link to="/" className="primary_button bg_black btn_sm mt-3">Shop Now</Link>
                            </div>
                        </div>
                        <div className={style.display_product_box + " img_zoom_hover"}>
                            <img src="/images/kids.png" alt="" />
                            <div className={style.display_product_title}>
                                <h4 className="text-uppercase">outwear</h4>
                                <h2 className="text-uppercase">new</h2>
                                <h4 className="text-uppercase">collection</h4>
                                <Link to="/" className="primary_button bg_black btn_sm mt-2" >Shop Now</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default NewArrival
