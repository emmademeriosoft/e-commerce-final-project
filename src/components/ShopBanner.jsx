import { Breadcrumbs, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyle = makeStyles(theme => ({
    "shopBanner": {
        backgroundImage: 'url(/images/common_bg.png)',
        padding: '90px 0',
        backgroundRepeat: 'no-repeat',
        marginTop: '50px',
        marginBottom: '50px',

    },
}))

const ShopBanner = () => {
    const style = useStyle()
    return (
        <section className={style.shopBanner}>
            <div className="container">
                <div className="shopBannerContent">
                    <h2 className="text-center text-white">SHOP</h2>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" className="text-white hover_text" color="inherit" to="/">
                            Home
                        </Link>

                        <Typography className="text_orange">Breadcrumbs</Typography>
                    </Breadcrumbs>
                </div>
            </div>
        </section>
    )
}

export default ShopBanner
